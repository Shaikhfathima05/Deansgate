# Debug Supabase Connection

## Step 1: Check Browser Console for Errors

1. Open your website: http://localhost:5173
2. Press F12 to open Developer Tools
3. Click on "Console" tab
4. Try submitting the form
5. Look for any RED error messages

Common errors:
- "Missing Supabase environment variables" → .env not loaded
- "Failed to fetch" → Wrong URL or network issue
- "new row violates row-level security policy" → RLS policy issue
- "relation does not exist" → Wrong table name

---

## Step 2: Verify RLS Policies in Supabase

Go to Supabase SQL Editor and run this:

```sql
-- Check if RLS is enabled
SELECT tablename, rowsecurity
FROM pg_tables
WHERE tablename = 'contact_inquiries';

-- Check existing policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
FROM pg_policies
WHERE tablename = 'contact_inquiries';
```

You should see:
- rowsecurity = true
- At least one policy for INSERT with role 'anon'

---

## Step 3: Fix RLS Policies (If Needed)

If policies are missing or wrong, run this in SQL Editor:

```sql
-- Drop existing policies (if any)
DROP POLICY IF EXISTS "Allow public inserts" ON contact_inquiries;
DROP POLICY IF EXISTS "Allow authenticated reads" ON contact_inquiries;

-- Enable RLS
ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

-- Create correct policy for public inserts
CREATE POLICY "Enable insert for anon users"
ON contact_inquiries
FOR INSERT
TO anon
WITH CHECK (true);

-- Create policy for authenticated reads
CREATE POLICY "Enable read for authenticated users"
ON contact_inquiries
FOR SELECT
TO authenticated
USING (true);
```

---

## Step 4: Test Direct Insert in Supabase

Go to SQL Editor and try inserting directly:

```sql
INSERT INTO contact_inquiries (full_name, email, phone, message)
VALUES ('Direct Test', 'direct@test.com', '+91 98765 43210', 'Testing direct insert');

-- Then check if it worked
SELECT * FROM contact_inquiries ORDER BY created_at DESC LIMIT 5;
```

If this works, the table is fine. If not, there's a table structure issue.

---

## Step 5: Check Environment Variables

In your terminal, run:

```cmd
cd task1-A
npm run dev
```

Look for any warnings about missing environment variables.

---

## Step 6: Test Supabase Connection

Add this test to your Contact.jsx temporarily:

```javascript
// Add this inside the Contact component, before the return statement
useEffect(() => {
    console.log('Supabase URL:', import.meta.env.VITE_SUPABASE_URL);
    console.log('Supabase Key exists:', !!import.meta.env.VITE_SUPABASE_ANON_KEY);
    
    // Test connection
    const testConnection = async () => {
        const { data, error } = await supabase
            .from('contact_inquiries')
            .select('count');
        
        if (error) {
            console.error('Supabase connection error:', error);
        } else {
            console.log('Supabase connected successfully!');
        }
    };
    
    testConnection();
}, []);
```

Check the console for these logs.

---

## Common Issues & Solutions

### Issue 1: "Missing Supabase environment variables"
**Solution:**
- Make sure .env file is in task1-A/ folder (not task1-A/src/)
- Restart dev server after adding .env
- Variable names must start with VITE_

### Issue 2: "new row violates row-level security policy"
**Solution:**
- Run the RLS policy fix from Step 3
- Make sure policy allows INSERT for 'anon' role
- Check WITH CHECK is set to 'true'

### Issue 3: Form submits but no error, no data
**Solution:**
- Check browser console for silent errors
- Verify table name is exactly 'contact_inquiries'
- Check column names match: full_name, email, phone, message

### Issue 4: "Failed to fetch"
**Solution:**
- Check internet connection
- Verify VITE_SUPABASE_URL is correct
- Make sure Supabase project is active (not paused)

---

## Quick Test Script

Run this in Supabase SQL Editor to test everything:

```sql
-- 1. Check table exists
SELECT EXISTS (
    SELECT FROM information_schema.tables 
    WHERE table_name = 'contact_inquiries'
);

-- 2. Check RLS is enabled
SELECT tablename, rowsecurity 
FROM pg_tables 
WHERE tablename = 'contact_inquiries';

-- 3. Check policies exist
SELECT COUNT(*) as policy_count 
FROM pg_policies 
WHERE tablename = 'contact_inquiries';

-- 4. Try insert as anon user
SET ROLE anon;
INSERT INTO contact_inquiries (full_name, email, phone, message)
VALUES ('Anon Test', 'anon@test.com', '+91 98765 43210', 'Testing as anon user');
RESET ROLE;

-- 5. Check if insert worked
SELECT * FROM contact_inquiries ORDER BY created_at DESC LIMIT 1;
```

If step 4 fails, the RLS policy is the problem.

---

## What to Share for Help

If still not working, share:
1. Browser console errors (screenshot)
2. Result of the Quick Test Script above
3. Result of checking policies (Step 2)
