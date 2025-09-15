import { createClient } from "@supabase/supabase-js";
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

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Basic CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Validate Supabase configuration
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Supabase not configured properly");
    return res.status(500).json({
      error: "Server configuration error - database not available",
      details: "Supabase credentials not found",
    });
  }

  try {
    // Handle GET: list newsletter subscribers (PROTECTED)
    if (req.method === "GET") {
      // Validate authorization header
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({
          error: "Authorization header is missing or invalid",
        });
      }

      const token = authHeader.split(" ")[1];

      // Verify the token with Supabase
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser(token);

      if (userError || !user) {
        return res.status(401).json({
          error: "Invalid or expired token",
          details: userError?.message,
        });
      }

      const { data, error } = await supabase
        .from("newsletter")
        .select("id, email, subscribed_at, is_active")
        .order("subscribed_at", { ascending: false });

      if (error) {
        console.error("Database fetch error (newsletter):", error);
        return res.status(500).json({
          error: "Failed to fetch newsletter subscribers",
          details: error.message,
        });
      }

      return res
        .status(200)
        .json({ success: true, data, count: data?.length || 0 });
    }

    // Handle POST: subscribe new email
    const { email } = req.body;

    // Validate required fields
    if (!email) {
      return res.status(400).json({
        error: "Email is required",
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: "Invalid email format",
      });
    }

    console.log("Processing newsletter signup for email:", email);

    // Check if email already exists
    const { data: existingSubscription, error: checkError } = await supabase
      .from("newsletter")
      .select("email")
      .eq("email", email.toLowerCase())
      .single();

    if (checkError && checkError.code !== "PGRST116") {
      // PGRST116 is "not found" error, which is expected for new emails
      console.error("Error checking existing subscription:", checkError);
      throw checkError;
    }

    if (existingSubscription) {
      return res.status(200).json({
        success: true,
        message: "Email already subscribed to newsletter.",
        alreadySubscribed: true,
      });
    }

    // Insert new newsletter subscription
    const { data: insertData, error: insertError } = await supabase
      .from("newsletter")
      .insert([
        {
          email: email.toLowerCase(),
          subscribed_at: new Date().toISOString(),
          is_active: true,
        },
      ])
      .select();

    if (insertError) {
      console.error("Database insert error:", insertError);
      throw insertError;
    }

    console.log("Newsletter subscription added successfully");

    // Send success response
    res.status(200).json({
      success: true,
      message: "Successfully subscribed to newsletter!",
      data: {
        subscriptionId: insertData?.[0]?.id,
        email: email.toLowerCase(),
      },
    });
  } catch (error) {
    console.error("Error in newsletter handler:", error);
    // If method is not supported
    if (req.method !== "GET" && req.method !== "POST") {
      return res.status(405).json({ message: "Method not allowed" });
    }
    res.status(500).json({
      error: "Failed to process request.",
      details: (error as Error).message,
    });
  }
}
