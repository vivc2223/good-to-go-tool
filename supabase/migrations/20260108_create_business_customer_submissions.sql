-- Create business_customer_submissions table for Business Customer contact form submissions
CREATE TABLE IF NOT EXISTS business_customer_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  requester_name TEXT NOT NULL,
  email TEXT NOT NULL,
  title TEXT NOT NULL,
  company TEXT NOT NULL,
  company_size TEXT,
  country TEXT,
  message TEXT,
  has_use_case TEXT,
  use_case TEXT,
  states JSONB,
  total_units INTEGER,
  workflow_media JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE business_customer_submissions ENABLE ROW LEVEL SECURITY;

-- Allow public inserts (for the Edge Function using service role key)
CREATE POLICY "Allow public insert" ON business_customer_submissions
  FOR INSERT
  WITH CHECK (true);

-- Allow authenticated users to read all submissions (for Admin Dashboard)
CREATE POLICY "Allow authenticated read" ON business_customer_submissions
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Allow service role full access
CREATE POLICY "Allow service role full access" ON business_customer_submissions
  FOR ALL
  USING (auth.role() = 'service_role');
