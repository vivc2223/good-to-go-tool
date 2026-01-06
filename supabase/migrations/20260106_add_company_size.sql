-- Add company_size column to deployment_submissions table
ALTER TABLE deployment_submissions ADD COLUMN IF NOT EXISTS company_size TEXT;
