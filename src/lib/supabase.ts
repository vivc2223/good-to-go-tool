import { createClient } from "@supabase/supabase-js";

// Environment variables for Supabase
const supabaseUrl = "https://dcrrllcnjljduvufbqjj.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjcnJsbGNuamxqZHV2dWZicWpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcwMjAyNzEsImV4cCI6MjA3MjU5NjI3MX0.RCCtQRrWdBvZk30Izkvi_n33yD3L6m8ICCKZEZXAwPQ";

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Supabase URL and Anon Key must be provided in environment variables"
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
