import { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabaseUrl =
  process.env.SUPABASE_URL || process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey =
  process.env.SUPABASE_ANON_KEY || process.env.REACT_APP_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Missing Supabase configuration for submission API");
}

const supabase = createClient(supabaseUrl!, supabaseAnonKey!);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Check if Supabase is properly configured
  if (!supabaseUrl || !supabaseAnonKey) {
    return res.status(500).json({
      error: "Server configuration error",
      details: "Supabase environment variables not found",
    });
  }

  // Handle CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

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

  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: "Submission ID is required" });
  }

  try {
    // Fetch specific submission by ID
    const { data: submission, error } = await supabase
      .from("deployment_submissions")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching submission:", error);
      return res.status(500).json({
        error: "Failed to fetch submission",
        details: error.message,
      });
    }

    if (!submission) {
      return res.status(404).json({ error: "Submission not found" });
    }
    console.log("Successfully fetched submission:", submission);

    return res.status(200).json({
      success: true,
      data: submission,
    });
  } catch (error: unknown) {
    console.error("Error in submission API:", error);
    return res.status(500).json({
      error: "Failed to fetch submission",
      details: error instanceof Error ? error.message : String(error),
    });
  }
}
