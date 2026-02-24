# Admin Panel Quick Start

## How to Access the Admin Panel

### Step 1: Start the Development Server
```bash
cd task1-A
npm run dev
```

### Step 2: Open Admin Panel
1. Open your browser
2. Go to: `http://localhost:5175/admin/login`
3. Enter credentials:
   - **Username**: `admin`
   - **Password**: `admin123`

### Step 3: Navigate the Dashboard
After login, you'll see the admin dashboard with 6 main sections:

1. **🏠 Hero Section** - Manage main banner content
2. **📋 Project Details** - Edit about section and highlights  
3. **🖼️ Gallery** - Upload and manage images
4. **📐 Floor Plans** - Manage floor plan images
5. **💬 WhatsApp Settings** - Configure WhatsApp button
6. **🔒 Privacy Policy** - Manage privacy settings

## Quick Actions

### Upload Images
1. Go to Gallery or Floor Plans section
2. Click "Upload Images" button
3. Select multiple files
4. Click "Save" to persist changes

### Edit Hero Content
1. Click "Hero Section" in sidebar
2. Update title, tagline, or background
3. Click "Save Changes"

### Configure WhatsApp
1. Go to "WhatsApp Settings"
2. Update phone number and message
3. Click "Test WhatsApp" to verify
4. Save settings

## Important Notes

- All changes are saved to browser localStorage
- Data persists between sessions
- Use "Save" buttons to store changes
- Hard refresh browser (Ctrl+Shift+R) if styles don't update

## Troubleshooting

**Can't access admin panel?**
- Make sure dev server is running on port 5175
- Try: `http://localhost:5175/admin/login`

**Login not working?**
- Use exact credentials: `admin` / `admin123`
- Clear browser cache if needed

**Changes not visible?**
- Click save buttons in admin panel
- Hard refresh main website (Ctrl+Shift+R)
- Check browser console for errors