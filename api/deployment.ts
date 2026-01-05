import { createClient } from "@supabase/supabase-js";
import * as formidable from "formidable";
import fs from "fs";
import nodemailer from "nodemailer";
import { VercelRequest, VercelResponse } from "@vercel/node";

// Initialize Supabase client - use server-side environment variables
const supabaseUrl =
  process.env.SUPABASE_URL ||
  process.env.REACT_APP_SUPABASE_URL ||
  process.env.VITE_SUPABASE_URL;
const supabaseAnonKey =
  process.env.SUPABASE_ANON_KEY ||
  process.env.REACT_APP_SUPABASE_ANON_KEY ||
  process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Missing Supabase configuration:", {
    hasUrl: !!supabaseUrl,
    hasKey: !!supabaseAnonKey,
    urlPrefix: supabaseUrl?.substring(0, 20) + "...",
  });
}

const supabase = createClient(supabaseUrl!, supabaseAnonKey!);

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  // Validate Supabase configuration
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Supabase not configured properly");
    return res.status(500).json({
      error: "Server configuration error - storage not available",
      details: "Supabase credentials not found",
    });
  }

  console.log(
    "Supabase configuration valid, URL starts with:",
    supabaseUrl.substring(0, 30)
  );

  const form = formidable.formidable({
    maxFiles: 5, // Allow up to 5 files as per frontend validation
    maxFileSize: 50 * 1024 * 1024, // 50MB per file
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Error parsing form:", err);
      return res.status(500).json({ error: "Error parsing form data." });
    }

    console.log("Parsed fields:", fields);
    console.log("Parsed files:", Object.keys(files));

    // Extract all form fields (handle both string and array cases)
    const profileType = Array.isArray(fields.profileType)
      ? fields.profileType[0]
      : fields.profileType;
    const name = Array.isArray(fields.name) ? fields.name[0] : fields.name;
    const email = Array.isArray(fields.email) ? fields.email[0] : fields.email;
    const title = Array.isArray(fields.title) ? fields.title[0] : fields.title;
    const company = Array.isArray(fields.company)
      ? fields.company[0]
      : fields.company;
    const companySize = Array.isArray(fields.companySize)
      ? fields.companySize[0]
      : fields.companySize;
    const country = Array.isArray(fields.country)
      ? fields.country[0]
      : fields.country;
    const message = Array.isArray(fields.message)
      ? fields.message[0]
      : fields.message;
    const hasUseCase = Array.isArray(fields.hasUseCase)
      ? fields.hasUseCase[0]
      : fields.hasUseCase;
    const useCase = Array.isArray(fields.useCase)
      ? fields.useCase[0]
      : fields.useCase;
    const statesString = Array.isArray(fields.states)
      ? fields.states[0]
      : fields.states;
    const totalUnits = Array.isArray(fields.totalUnits)
      ? fields.totalUnits[0]
      : fields.totalUnits;

    // Parse states JSON
    let states = [];
    try {
      states = JSON.parse(statesString || "[]");
    } catch (e) {
      console.error("Error parsing states:", e);
      states = [];
    }

    console.log("Extracted form data:", {
      profileType,
      name,
      email,
      title,
      company,
      companySize,
      country,
      message,
      hasUseCase,
      useCase,
      states,
      totalUnits,
    });

    // Validate required fields (common to all profiles)
    if (!profileType || !name || !email || !title || !company || !companySize) {
      return res.status(400).json({
        error: "Missing required fields",
        details: {
          profileType: !!profileType,
          name: !!name,
          email: !!email,
          title: !!title,
          company: !!company,
          companySize: !!companySize,
        },
      });
    }

    // Handle multiple files
    const uploadedFiles: Array<{
      originalName: string;
      url: string;
      size: number;
      type: string;
    }> = [];
    const fileKeys = Object.keys(files).filter((key) =>
      key.startsWith("files[")
    );

    console.log("File keys found:", fileKeys);

    // Files are only required for Business Customer with a use case
    const requiresFiles = profileType === "Business Customer" && (hasUseCase === "yes" || hasUseCase === "multiple");

    if (requiresFiles && fileKeys.length === 0) {
      return res.status(400).json({ error: "No files were uploaded." });
    }

    try {
      // Upload each file to Supabase storage
      for (const fileKey of fileKeys) {
        const file = Array.isArray(files[fileKey])
          ? files[fileKey][0]
          : files[fileKey];

        if (file && file.filepath) {
          console.log(
            `Processing file: ${file.originalFilename}, Size: ${file.size} bytes, Type: ${file.mimetype}`
          );

          try {
            const fileName = `${Date.now()}_${Math.random()
              .toString(36)
              .substring(7)}_${file.originalFilename}`;
            const stats = fs.statSync(file.filepath);
            const fileStream = fs.createReadStream(file.filepath);

            const { error: uploadError } = await supabase.storage
              .from("workflow-media")
              .upload(fileName, fileStream, {
                contentType: file.mimetype || "application/octet-stream",
                upsert: true,
                cacheControl: "3600",
                resumable: true,
                contentLength: stats.size,
                duplex: "half",
              });

            if (uploadError) {
              console.error("Upload error details:", {
                message: uploadError.message,
                error: uploadError,
                fileName,
                contentType: file.mimetype,
              });
              throw new Error(`Upload failed: ${uploadError.message}`);
            }

            console.log("Upload successful, getting public URL...");

            // Get the public URL of the uploaded file
            const {
              data: { publicUrl },
            } = supabase.storage.from("workflow-media").getPublicUrl(fileName);

            console.log(`Public URL generated: ${publicUrl}`);

            uploadedFiles.push({
              originalName: file.originalFilename,
              url: publicUrl,
              size: file.size,
              type: file.mimetype,
            });

            fs.unlinkSync(file.filepath);

            console.log(`File uploaded successfully: ${file.originalFilename}`);
          } catch (fileError) {
            console.error(
              `Error processing file ${file.originalFilename}:`,
              fileError
            );
            fs.unlinkSync(file.filepath);
            throw fileError;
          }
        }
      }

      if (requiresFiles && uploadedFiles.length === 0) {
        return res.status(400).json({ error: "Failed to upload any files." });
      }

      // Insert complete form data into Supabase database
      console.log("Inserting data into database...");
      const { data: insertData, error: insertError } = await supabase
        .from("deployment_submissions")
        .insert([
          {
            profile_type: profileType,
            requester_name: name,
            email,
            title,
            company,
            company_size: companySize,
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

      console.log("Data inserted successfully");

      // Send email notification based on profile type
      try {
        const emailRecipient =
          profileType === "Media" ? "media@dynarobotics.ai" :
          profileType === "Investor" ? "investors@dynarobotics.ai" :
          "team@dynarobotics.ai"; // Business Customer and Other

        console.log(`Sending email notification to ${emailRecipient} for profile type: ${profileType}`);

        // Note: Email sending via FormSubmit is handled on the frontend
        // This is just for logging and potential future email service integration

      } catch (emailError) {
        console.error("Email notification error (non-blocking):", emailError);
        // Don't fail the request if email fails
      }

      // Send success response
      res.status(200).json({
        success: true,
        message: "Contact form submitted successfully.",
        data: {
          submissionId: insertData?.[0]?.id,
          filesUploaded: uploadedFiles.length,
          profileType,
        },
      });
    } catch (error) {
      console.error("Error in processing:", error);
      res.status(500).json({ error: error.message });
    }
  });
}
