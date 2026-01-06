-- Add country column to deployment_submissions table
ALTER TABLE deployment_submissions ADD COLUMN IF NOT EXISTS country TEXT;
