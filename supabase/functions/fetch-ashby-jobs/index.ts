// supabase/functions/fetch-ashby-jobs/index.ts
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

// 🚨 Make sure you set this in Supabase dashboard → Project Settings → Functions → Environment Variables
const ASHBY_API_KEY =
  "e14aaf4d3a044cd722d131b3ad4e9ff1e3423cdfc0fd0fadfdc900667929f2f5";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
  "Access-Control-Max-Age": "86400",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    // optional: you can receive filters from the frontend
    const { listedOnly = true, status = "OPEN" } = await req
      .json()
      .catch(() => ({}));

    const res = await fetch("https://api.ashbyhq.com/jobPosting.list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json; version=1",
        Authorization: "Basic " + btoa(ASHBY_API_KEY + ":"),
      },
      body: JSON.stringify({
        filters: { listedOnly, status },
        limit: 100,
      }),
    });

    const data = await res.json();

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: res.ok ? 200 : 400,
    });
  } catch (err) {
    console.error("Error fetching from Ashby:", err);
    const errorMessage = err instanceof Error ? err.message : "Unknown error occurred";
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
