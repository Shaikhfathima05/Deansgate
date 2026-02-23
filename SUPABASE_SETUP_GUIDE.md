# Supabase Setup Guide - Step by Step

## STEP 1: Create Supabase Account & Project

1. Go to https://supabase.com
2. Click "Start your project"
3. Sign up with GitHub or email
4. Click "New Project"
5. Fill in:
   - **Project Name**: deansgate-website
   - **Database Password**: (Create a strong password and save it)
   - **Region**: Choose closest to your users (e.g., Mumbai for India)
6. Click "Create new project"
7. Wait 2-3 minutes for project to be ready

---

## STEP 2: Create Database Table

### Option A: Using Table Editor (Recommended for Beginners)

1. In Supabase Dashboard, click **"Table Editor"** in left sidebar
2. Click **"Create a new table"**
3. Fill in:
   - **Name**: `contact_inquiries`
   - **Description**: Stores contact form submissions
   - Enable **"Enable Row Level Security (RLS)"**
4. Add these columns:

| Column Name | Type | Default Value | Primary | Required | Unique |
|------------|------|---------------|---------|----------|--------|
| id | int8 | Auto-increment | ✓ | ✓ | ✓ |
| created_at | timestamptz | now() | | ✓ | |
| full_name | text | | | ✓ | |
| email | text | | | ✓ | |
| phone | text | | | ✓ | |
| unit_type | text | | | | |
| message | text | | | ✓ | |
| status | text | 'new' | | ✓ | |

5. Click **"Save"**

### Option B: Using SQL Editor (Advanced)

1. Click **"SQL Editor"** in left sidebar
2. Click **"New query"**
3. Copy and paste this SQL:

```sql
-- Create contact inquiries table
CREATE TABLE contact_inquiries (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  unit_type TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new'
);

-- Enable Row Level Security
ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone (for contact form)
CREATE POLICY "Allow public inserts" ON contact_inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy to allow authenticated users to read all
CREATE POLICY "Allow authenticated reads" ON contact_inquiries
  FOR SELECT
  TO authenticated
  USING (true);
```

4. Click **"Run"** button
5. You should see "Success. No rows returned"

---

## STEP 3: Set Up Row Level Security (RLS) Policies

If you used Table Editor, you need to add policies:

1. Go to **"Authentication"** → **"Policies"**
2. Find `contact_inquiries` table
3. Click **"New Policy"**

### Policy 1: Allow Public Inserts
- **Policy name**: Allow public inserts
- **Policy command**: INSERT
- **Target roles**: anon
- **USING expression**: (leave empty)
- **WITH CHECK expression**: `true`
- Click **"Review"** → **"Save policy"**

### Policy 2: Allow Authenticated Reads
- **Policy name**: Allow authenticated reads
- **Policy command**: SELECT
- **Target roles**: authenticated
- **USING expression**: `true`
- Click **"Review"** → **"Save policy"**

---

## STEP 4: Get Your Supabase Credentials

1. Click **"Project Settings"** (gear icon) in left sidebar
2. Click **"API"** in the settings menu
3. You'll see:
   - **Project URL**: `https://xxxxxxxxxxxxx.supabase.co`
   - **anon public key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` (very long)

4. **COPY BOTH VALUES** - you'll need them next!

---

## STEP 5: Install Supabase in Your Project

1. Open terminal in VS Code
2. Navigate to project folder:
```cmd
cd task1-A
```

3. Install Supabase client:
```cmd
npm install @supabase/supabase-js
```

4. Wait for installation to complete

---

## STEP 6: Add Your Credentials to .env File

1. Open the file `task1-A/.env` (already created)
2. Replace the placeholder values:

```env
VITE_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

3. **IMPORTANT**: 
   - Replace `https://xxxxxxxxxxxxx.supabase.co` with YOUR Project URL
   - Replace `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` with YOUR anon public key
   - Do NOT add quotes around the values
   - Do NOT commit this file to Git (it's already in .gitignore)

4. Save the file

---

## STEP 7: Update .gitignore (Security)

1. Open `task1-A/.gitignore`
2. Make sure it contains:
```
.env
.env.local
```

3. This prevents your credentials from being uploaded to GitHub

---

## STEP 8: Restart Development Server

1. Stop the current dev server (Ctrl + C in terminal)
2. Start it again:
```cmd
npm run dev
```

3. The server will now load your Supabase credentials

---

## STEP 9: Test the Contact Form

1. Open your website in browser: http://localhost:5173
2. Scroll to the **Contact** section
3. Fill in the form:
   - Full Name: Test User
   - Email: test@example.com
   - Phone: +91 98765 43210
   - Unit Type: Garden Villament
   - Message: This is a test inquiry
4. Click **"Send Enquiry"**
5. You should see a success message!

---

## STEP 10: Verify Data in Supabase

1. Go back to Supabase Dashboard
2. Click **"Table Editor"**
3. Click on **"contact_inquiries"** table
4. You should see your test submission!
5. Check all fields are populated correctly

---

## STEP 11: View Submissions (Optional)

To view all submissions easily:

1. In Supabase, go to **"Table Editor"**
2. Click **"contact_inquiries"**
3. You'll see all form submissions with:
   - Name, Email, Phone
   - Unit Type, Message
   - Timestamp (created_at)
   - Status (new/contacted/closed)

---

## TROUBLESHOOTING

### Error: "Missing Supabase environment variables"
- Check your `.env` file exists in `task1-A/` folder
- Make sure variable names start with `VITE_`
- Restart dev server after adding credentials

### Error: "Failed to submit enquiry"
- Check your internet connection
- Verify Supabase credentials are correct
- Check browser console (F12) for detailed error
- Verify RLS policies are set up correctly

### Form submits but no data in Supabase
- Check RLS policies (Step 3)
- Make sure "Allow public inserts" policy exists
- Check table name is exactly `contact_inquiries`

### Error: "relation 'enquiries' does not exist"
- The Contact component is looking for 'enquiries' table
- Either rename your table to 'enquiries' OR
- Update Contact.jsx line 40 to use 'contact_inquiries'

---

## NEXT STEPS

### 1. Set Up Email Notifications (Optional)
- Use Supabase Database Webhooks
- Or integrate with services like SendGrid, Mailgun
- Get notified when new inquiries arrive

### 2. Create Admin Dashboard (Optional)
- Build a simple admin page to view inquiries
- Add authentication for admin access
- Update inquiry status (new → contacted → closed)

### 3. Export Data
- Go to Table Editor
- Click on contact_inquiries
- Click "..." menu → "Download as CSV"
- Import into Excel/Google Sheets

---

## SECURITY NOTES

✅ **DO:**
- Keep your `.env` file private
- Never commit `.env` to Git
- Use environment variables for credentials
- Enable RLS on all tables

❌ **DON'T:**
- Share your anon key publicly
- Commit credentials to GitHub
- Disable RLS without proper policies
- Use service_role key in frontend code

---

## SUPPORT

If you encounter issues:
1. Check Supabase documentation: https://supabase.com/docs
2. Check browser console for errors (F12)
3. Verify all steps were completed
4. Check Supabase project status (should be "Active")

---

## Summary Checklist

- [ ] Created Supabase account and project
- [ ] Created `contact_inquiries` table
- [ ] Set up RLS policies
- [ ] Copied Project URL and anon key
- [ ] Installed @supabase/supabase-js
- [ ] Updated .env file with credentials
- [ ] Restarted dev server
- [ ] Tested contact form
- [ ] Verified data in Supabase
- [ ] Added .env to .gitignore

**Congratulations! Your contact form is now connected to Supabase! 🎉**
