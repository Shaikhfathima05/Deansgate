-- Run this in Supabase SQL Editor to verify your setup

-- 1. Check if table exists and view its structure
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'contact_inquiries'
ORDER BY ordinal_position;

-- 2. Check if RLS is enabled
SELECT tablename, rowsecurity
FROM pg_tables
WHERE tablename = 'contact_inquiries';

-- 3. Check existing policies
SELECT policyname, cmd, qual
FROM pg_policies
WHERE tablename = 'contact_inquiries';

-- 4. Test insert (optional - will add a test record)
-- Uncomment the lines below to test:
-- INSERT INTO contact_inquiries (full_name, email, phone, message)
-- VALUES ('Test User', 'test@example.com', '+91 98765 43210', 'This is a test message');
