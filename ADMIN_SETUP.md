# Mangalkamna Hospital Admin Dashboard

## Overview

A complete admin panel for managing hospital content including doctors, gallery images, videos, and page content. Built with Next.js, TypeScript, and Appwrite.

## Features

- **Admin Authentication**: Secure login with admin credentials
- **Doctors Management**: Add, edit, and delete doctors
- **Gallery Management**: Upload and manage hospital gallery images
- **Videos Management**: Manage testimonials and promotional videos
- **Content Management**: Edit page content and media across all pages
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Credentials

**Default Admin Credentials:**

- **ID**: `admin`
- **Password**: `admin123`

⚠️ **IMPORTANT**: Change these credentials in production!

## Access

Navigate to: `http://localhost:3000/admin`

## Setup Instructions

### 1. Install Dependencies

```bash
npm install appwrite
```

### 2. Configure Appwrite

Create a `.env.local` file in the root directory with your Appwrite credentials:

```env
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://your-appwrite-instance.com/v1
NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
APPWRITE_API_KEY=your_api_key
```

#### Getting Appwrite Credentials:

1. **Create an Appwrite Account**: Visit [appwrite.io](https://appwrite.io)
2. **Create a Project**: Set up a new project in your Appwrite console
3. **Get Endpoint**: Found in Project Settings → API → Endpoint
4. **Get Project ID**: Found in Project Settings
5. **Create API Key**: Go to Settings → API Keys → Create new key with necessary permissions

### 3. Database Setup

The system currently uses localStorage for demo purposes. To enable Appwrite:

**Create Collections in Appwrite:**

#### Doctors Collection

```
Database: hospital_db
Collection: doctors
Fields:
- name (String, Required)
- specialization (String, Required)
- experience (String)
- image (String)
- bio (String)
```

#### Gallery Collection

```
Database: hospital_db
Collection: gallery
Fields:
- title (String, Required)
- url (String, Required)
- uploadedAt (String)
```

#### Videos Collection

```
Database: hospital_db
Collection: videos
Fields:
- title (String, Required)
- url (String, Required)
- category (String)
- uploadedAt (String)
```

#### Content Collection

```
Database: hospital_db
Collection: page_content
Fields:
- pageName (String, Required)
- sectionName (String, Required)
- content (String, Required)
- imageUrl (String)
```

### 4. File Uploads (Optional)

To enable file uploads to Appwrite:

1. Create a Storage bucket in Appwrite: `Settings → Storage → Create Bucket`
2. Set bucket name: `hospital_media`
3. Update the upload handlers in the respective components

## File Structure

```
src/
├── app/
│   ├── admin/
│   │   ├── page.tsx (Login Page)
│   │   ├── dashboard/
│   │   │   └── page.tsx (Dashboard)
│   │   ├── doctors/
│   │   │   └── page.tsx (Doctors Management)
│   │   ├── gallery/
│   │   │   └── page.tsx (Gallery Management)
│   │   ├── videos/
│   │   │   └── page.tsx (Videos Management)
│   │   └── content/
│   │       └── page.tsx (Content Management)
│   └── layout.tsx (Updated with AdminProvider)
├── components/
│   └── admin/
│       ├── AdminSidebar.tsx (Navigation)
│       └── ProtectedRoute.tsx (Auth Protection)
├── lib/
│   ├── adminContext.tsx (Admin Context)
│   └── appwrite.ts (Appwrite Client Config)
```

## Usage Guide

### Login

1. Navigate to `/admin`
2. Enter credentials:
   - ID: `admin`
   - Password: `admin123`
3. Click "Login"

### Manage Doctors

1. Click "Doctors" in sidebar
2. Click "Add Doctor"
3. Fill in doctor details:
   - Name
   - Specialization
   - Experience
   - Image URL
   - Bio
4. Click "Add Doctor" to save
5. Edit or delete existing doctors using action buttons

### Manage Gallery

1. Click "Gallery Images" in sidebar
2. Enter image title and URL
3. Click "Add Image"
4. Delete images as needed

### Manage Videos

1. Click "Videos" in sidebar
2. Enter video title, category, and URL
3. Select category (Testimonials, Procedures, etc.)
4. Click "Add Video"

### Manage Content

1. Click "Content Management" in sidebar
2. Select page and section
3. Enter content and optional image
4. Save changes

## Data Storage

Currently, the system uses browser localStorage for demo purposes. Data persists locally but will be cleared if browser cache is cleared.

### Migrate to Appwrite:

To switch to Appwrite database:

1. Update each management page to use Appwrite queries instead of localStorage
2. Install Appwrite SDK (already done)
3. Import and use Appwrite client from `src/lib/appwrite.ts`
4. Replace localStorage calls with Appwrite database calls

Example (in doctors management):

```typescript
import { databases } from "@/lib/appwrite";

// Add doctor
await databases.createDocument("hospital_db", "doctors", "unique()", formData);

// Get doctors
const response = await databases.listDocuments("hospital_db", "doctors");
```

## Security Considerations

⚠️ **Current Implementation Notes:**

- Authentication is client-side only (for demo)
- In production, implement server-side authentication
- Use environment variables for sensitive data
- Add role-based access control
- Implement audit logging
- Use HTTPS only
- Validate all uploads
- Rate limit API calls

## Production Deployment

1. **Update Credentials**: Change admin ID and password
2. **Implement Server Auth**: Add server-side authentication
3. **Configure Appwrite**: Set up production Appwrite instance
4. **Enable HTTPS**: Force HTTPS connections
5. **Environment Variables**: Set all credentials in hosting platform
6. **Database Backups**: Enable Appwrite auto-backups
7. **Monitoring**: Set up error tracking and monitoring

## Troubleshooting

### Can't access admin panel

- Check credentials
- Clear browser cache
- Verify localStorage is enabled

### Data not persisting

- Check localStorage is enabled
- Verify Appwrite connection if using Appwrite
- Check browser console for errors

### Upload failures

- Verify file size limits
- Check Appwrite storage bucket permissions
- Verify file types are allowed

### Authentication issues

- Clear localStorage: `localStorage.clear()`
- Try incognito/private browsing mode
- Check browser console for errors

## Support

For issues or questions:

1. Check the troubleshooting section
2. Review Appwrite documentation: [docs.appwrite.io](https://docs.appwrite.io)
3. Check console logs for error messages

## Next Steps

1. Provide Appwrite credentials
2. Configure `.env.local` with Appwrite details
3. Test admin functionality
4. Customize as needed
5. Deploy to production

---

**Admin Panel Version**: 1.0.0
**Last Updated**: May 2026
