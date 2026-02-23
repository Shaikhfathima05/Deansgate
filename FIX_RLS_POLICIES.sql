-- ============================================
-- FIX RLS POLICIES FOR CONTACT FORM
-- Run this in Supabase SQL Editor
-- ============================================

-- Step 1: Drop any existing policies
DROP POLICY IF EXISTS "Allow public inserts" ON contact_inquiries;
DROP POLICY IF EXISTS "Allow authenticated reads" ON contact_inquiries;
DROP POLICY IF EXISTS "Enable insert for anon users" ON contact_inquiries;
DROP POLICY IF EXISTS "Enable read for authenticated users" ON contact_inquiries;

-- Step 2: Make sure RLS is enabled
ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

-- Step 3: Create policy to allow anyone to insert
CREATE POLICY "allow_anon_insert"
ON contact_inquiries
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Step 4: Create policy to allow authenticated users to read
CREATE POLICY "allow_authenticated_select"
ON contact_inquiries
FOR SELECT
TO authenticated
USING (true);

-- Step 5: Test the policy by inserting as anon
SET ROLE anon;
INSERT INTO contact_inquiries (full_name, email, phone, message)
VALUES ('Policy Test', 'policy@test.com', '+91 98765 43210', 'Testing RLS policy');
RESET ROLE;

-- Step 6: Verify the insert worked
SELECT * FROM contact_inquiries ORDER BY created_at DESC LIMIT 1;

-- If you see the "Policy Test" record, it's working! ✅
