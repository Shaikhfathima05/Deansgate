# ✅ FINAL STEPS - Your Database is Ready!

## Good News! 🎉
Your Supabase table and policies are already set up. You just need to add your credentials.

---

## Step 1: Get Your Credentials

1. In Supabase, click **Settings** (gear icon) in the left sidebar
2. Click **API**
3. You'll see two important values:

### Project URL
```
https://ypseudvmvxgstmduuotw.supabase.co
```
✅ This is already in your .env file!

### anon public key
Look for the section that says **"anon public"** and copy the LONG key that starts with `eyJhbGci...`

It looks like this:
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlwc2V1ZHZtdnhnc3RtZHV1b3R3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk1NjQwMDAsImV4cCI6MjAyNTE0MDAwMH0.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

---

## Step 2: Update .env File

1. Open `task1-A/.env` file
2. Find this line:
```env
VITE_SUPABASE_ANON_KEY=paste_your_anon_key_here
```

3. Replace `paste_your_anon_key_here` with your actual anon key
4. Save the file

Your .env should look like:
```env
VITE_SUPABASE_URL=https://ypseudvmvxgstmduuotw.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlwc2V1ZHZtdnhnc3RtZHV1b3R3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk1NjQwMDAsImV4cCI6MjAyNTE0MDAwMH0.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

---

## Step 3: Restart Dev Server

In your terminal:

```cmd
cd task1-A
```

Stop the server if running (Ctrl + C), then:

```cmd
npm run dev
```

---

## Step 4: Test the Contact Form

1. Open your website: http://localhost:5173
2. Scroll to the **Contact** section
3. Fill in the form:
   - Full Name: Test User
   - Email: test@example.com
   - Phone: +91 98765 43210
   - Unit Type: Garden Villament
   - Message: This is a test inquiry
4. Click **"Send Enquiry"**
5. You should see: "Thank You! We've received your enquiry..."

---

## Step 5: Verify in Supabase

1. Go to Supabase Dashboard
2. Click **Table Editor** in left sidebar
3. Click **contact_inquiries** table
4. You should see your test submission! 🎉

---

## ✅ What's Working Now

- ✅ Database table created
- ✅ RLS policies enabled
- ✅ Contact form connected
- ✅ Data saves to Supabase
- ⏳ Just need to add anon key to .env

---

## 🔧 Troubleshooting

### "Missing Supabase environment variables"
- Make sure you saved the .env file
- Restart the dev server
- Check that variable names start with `VITE_`

### "Failed to submit enquiry"
- Check browser console (F12) for errors
- Verify anon key is correct (no extra spaces)
- Make sure you're connected to internet

### Form submits but no data in Supabase
- Check if RLS policies exist (they should!)
- Verify table name is `contact_inquiries`
- Check Supabase project is active

---

## 📊 View Your Submissions

Anytime you want to see form submissions:

1. Go to Supabase Dashboard
2. Click **Table Editor**
3. Click **contact_inquiries**
4. See all submissions with timestamps!

You can also:
- Export to CSV (click "..." menu → Download as CSV)
- Filter by date, status, etc.
- Update status (new → contacted → closed)

---

## 🎯 You're Almost Done!

Just add your anon key to `.env` and restart the server. That's it! 🚀
