# Quick Start - Supabase Integration

## 🚀 Fast Setup (5 Minutes)

### 1. Install Package
```cmd
cd task1-A
npm install @supabase/supabase-js
```

### 2. Get Credentials from Supabase
- Go to: https://supabase.com → Your Project
- Click: **Settings** → **API**
- Copy: **Project URL** and **anon public key**

### 3. Add to .env File
Open `task1-A/.env` and paste:
```env
VITE_SUPABASE_URL=your_project_url_here
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

### 4. Create Table in Supabase
Go to **SQL Editor** and run:
```sql
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

ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public inserts" ON contact_inquiries
  FOR INSERT TO anon WITH CHECK (true);
```

### 5. Restart Server
```cmd
npm run dev
```

### 6. Test It!
- Fill contact form on website
- Check Supabase **Table Editor** → **contact_inquiries**
- See your submission! ✅

---

## 📖 Need Detailed Instructions?
See **SUPABASE_SETUP_GUIDE.md** for complete step-by-step guide.

---

## ⚠️ Important Notes
- Never commit `.env` file to Git
- Keep your anon key private
- Test with dummy data first
