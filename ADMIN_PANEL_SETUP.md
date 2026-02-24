# Admin Panel Setup Guide

## Overview
The Deansgate Admin Panel is a comprehensive dashboard for managing website content. It provides a clean, professional interface for updating various sections of the landing page.

## Access Information
- **URL**: `http://localhost:5175/admin/login`
- **Username**: `admin`
- **Password**: `admin123`

## Features

### 1. Hero Section Management
- Upload and change hero background images
- Edit project title and tagline
- Real-time preview of changes

### 2. Project Details Management
- Update project description
- Manage key highlights (3 main points)
- Save changes to localStorage

### 3. Gallery Management
- Upload multiple images at once
- Preview uploaded images
- Delete unwanted images
- Drag and drop support

### 4. Floor Plan Management
- Upload floor plan images
- Add custom names to each floor plan
- Delete floor plans
- Preview functionality

### 5. WhatsApp Settings
- Configure WhatsApp phone number
- Set predefined message text
- Test WhatsApp functionality
- Preview generated URLs

### 6. Privacy Policy Settings
- Set privacy policy URL
- Store privacy policy content
- Quick access to privacy page

## Technical Details

### Authentication
- Simple localStorage-based authentication
- Session persists until logout
- Protected routes redirect to login

### Data Storage
- All data stored in browser localStorage
- Automatic saving and loading
- Data persists between sessions

### File Structure
```
src/pages/admin/
├── AdminLogin.jsx          # Login page
├── AdminDashboard.jsx      # Main dashboard layout
├── DashboardHome.jsx       # Welcome/overview page
├── HeroManagement.jsx      # Hero section editor
├── ProjectManagement.jsx   # Project details editor
├── GalleryManagement.jsx   # Image gallery manager
├── FloorPlanManagement.jsx # Floor plans manager
├── WhatsAppSettings.jsx    # WhatsApp configuration
└── PrivacySettings.jsx     # Privacy policy settings
```

### Styling
- Inline styles for maximum compatibility
- Professional color scheme
- Responsive design
- Hover effects and animations

## Usage Instructions

1. **Login**: Navigate to `/admin/login` and use the demo credentials
2. **Navigation**: Use the sidebar to switch between different management sections
3. **Editing**: Make changes in any section and click "Save" to persist data
4. **Testing**: Use test buttons where available to verify functionality
5. **Logout**: Click the logout button in the sidebar to end session

## Data Integration

The admin panel stores data in localStorage with these keys:
- `adminAuth`: Authentication status
- `heroData`: Hero section content
- `projectData`: Project details and highlights
- `galleryImages`: Gallery image data
- `floorPlans`: Floor plan images and names
- `whatsappSettings`: WhatsApp configuration
- `privacySettings`: Privacy policy settings

## Browser Compatibility
- Modern browsers with localStorage support
- Chrome, Firefox, Safari, Edge
- Mobile responsive design

## Security Notes
- Demo authentication for development only
- Replace with proper authentication in production
- Validate all user inputs
- Implement proper file upload security

## Troubleshooting

### Common Issues
1. **Login not working**: Clear localStorage and try again
2. **Images not uploading**: Check file size and format
3. **Changes not saving**: Check browser console for errors
4. **Styling issues**: Hard refresh the browser (Ctrl+Shift+R)

### Development
- Run `npm run dev` to start development server
- Admin panel available at `/admin/login`
- Hot reload enabled for development

## Future Enhancements
- Database integration
- User management
- File upload to cloud storage
- Advanced image editing
- Content scheduling
- Analytics integration