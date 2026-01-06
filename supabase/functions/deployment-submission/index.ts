import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.52.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Max-Age": "86400",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 405,
    });
  }

  try {
    // Initialize Supabase client with service role key for storage access
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    console.log("Supabase URL available:", !!supabaseUrl);
    console.log("Service Role Key available:", !!supabaseServiceKey);

    if (!supabaseUrl || !supabaseServiceKey) {
      throw new Error("Missing Supabase configuration");
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Parse multipart form data
    console.log("Parsing form data...");
    const formData = await req.formData();
    console.log("Form data parsed successfully");

    // Extract form fields
    const profileType = formData.get("profileType") as string;
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const title = formData.get("title") as string;
    const company = formData.get("company") as string;
    const companySize = formData.get("companySize") as string;
    const country = formData.get("country") as string | null;
    const message = formData.get("message") as string | null;
    const hasUseCase = formData.get("hasUseCase") as string | null;
    const useCase = formData.get("useCase") as string | null;
    const statesString = formData.get("states") as string | null;
    const totalUnits = formData.get("totalUnits") as string | null;

    console.log("Extracted fields:", { profileType, name, email, title, company, companySize, hasUseCase });

    // Validate required fields
    if (!profileType || !name || !email || !title || !company || !companySize) {
      return new Response(
        JSON.stringify({
          error: "Missing required fields",
          details: {
            profileType: !!profileType,
            name: !!name,
            email: !!email,
            title: !!title,
            company: !!company,
            companySize: !!companySize,
          },
        }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 400,
        }
      );
    }

    // Parse states JSON
    let states: string[] = [];
    try {
      states = JSON.parse(statesString || "[]");
    } catch {
      states = [];
    }

    // Handle file uploads
    const uploadedFiles: Array<{
      originalName: string;
      url: string;
      size: number;
      type: string;
    }> = [];

    // Get all file entries from formData
    for (const [key, value] of formData.entries()) {
      if (key.startsWith("files[") && value instanceof File) {
        const file = value;

        if (file.size > 0) {
          console.log(`Processing file: ${file.name}, Size: ${file.size} bytes, Type: ${file.type}`);

          const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}_${file.name}`;
          const arrayBuffer = await file.arrayBuffer();
          const uint8Array = new Uint8Array(arrayBuffer);

          const { error: uploadError } = await supabase.storage
            .from("workflow-media")
            .upload(fileName, uint8Array, {
              contentType: file.type || "application/octet-stream",
              upsert: true,
              cacheControl: "3600",
            });

          if (uploadError) {
            console.error("Upload error:", uploadError);
            throw new Error(`Upload failed: ${uploadError.message}`);
          }

          // Get the public URL
          const { data: { publicUrl } } = supabase.storage
            .from("workflow-media")
            .getPublicUrl(fileName);

          uploadedFiles.push({
            originalName: file.name,
            url: publicUrl,
            size: file.size,
            type: file.type,
          });

          console.log(`File uploaded successfully: ${file.name}`);
        }
      }
    }

    // Check if files are required for Business Customer with use case
    const requiresFiles =
      profileType === "Business Customer" &&
      (hasUseCase === "yes" || hasUseCase === "multiple");

    if (requiresFiles && uploadedFiles.length === 0) {
      return new Response(
        JSON.stringify({ error: "No files were uploaded." }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 400,
        }
      );
    }

    // Handle submissions based on profile type
    if (profileType === "Media") {
      // Media submissions: Email only, no database storage needed
      // Email is handled on frontend via FormSubmit
      console.log("Media submission - skipping database insert (email only)");

      return new Response(
        JSON.stringify({
          success: true,
          message: "Media inquiry submitted successfully.",
          data: {
            profileType,
          },
        }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200,
        }
      );
    } else if (profileType === "Investor") {
      // Investor submissions: Email only, no database storage needed
      // Email is handled on frontend via FormSubmit
      console.log("Investor submission - skipping database insert (email only)");

      return new Response(
        JSON.stringify({
          success: true,
          message: "Investor inquiry submitted successfully.",
          data: {
            profileType,
          },
        }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200,
        }
      );
    } else if (profileType === "Other") {
      // General Inquiry submissions: Email only, no database storage needed
      // Email is handled on frontend via FormSubmit
      console.log("General Inquiry submission - skipping database insert (email only)");

      return new Response(
        JSON.stringify({
          success: true,
          message: "General inquiry submitted successfully.",
          data: {
            profileType,
          },
        }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200,
        }
      );
    } else if (profileType === "Business Customer") {
      // Insert into business_customer_submissions table
      console.log("Inserting Business Customer data into database...");
      const { data: insertData, error: insertError } = await supabase
        .from("business_customer_submissions")
        .insert([
          {
            requester_name: name,
            email,
            title,
            company,
            company_size: companySize || null,
            country: country || null,
            message: message || null,
            has_use_case: hasUseCase || null,
            use_case: useCase || null,
            states: states.length > 0 ? states : null,
            total_units: totalUnits ? parseInt(totalUnits) : null,
            workflow_media: uploadedFiles.length > 0 ? uploadedFiles : null,
            created_at: new Date().toISOString(),
          },
        ])
        .select();

      if (insertError) {
        console.error("Database insert error:", insertError);
        throw insertError;
      }

      console.log("Data inserted successfully into business_customer_submissions table");

      return new Response(
        JSON.stringify({
          success: true,
          message: "Contact form submitted successfully.",
          data: {
            submissionId: insertData?.[0]?.id,
            filesUploaded: uploadedFiles.length,
            profileType,
          },
        }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200,
        }
      );
    } else {
      // Unknown profile type - return error
      console.log("Unknown profile type:", profileType);
      return new Response(
        JSON.stringify({
          error: "Unknown profile type",
          profileType,
        }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 400,
        }
      );
    }
  } catch (err) {
    console.error("Error processing submission:", err);
    console.error("Error type:", typeof err);
    console.error("Error stringified:", JSON.stringify(err, Object.getOwnPropertyNames(err)));

    let errorMessage = "Unknown error occurred";
    if (err instanceof Error) {
      errorMessage = err.message;
    } else if (typeof err === "object" && err !== null) {
      errorMessage = JSON.stringify(err);
    } else if (typeof err === "string") {
      errorMessage = err;
    }

    return new Response(JSON.stringify({ error: errorMessage, stack: err instanceof Error ? err.stack : undefined }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
