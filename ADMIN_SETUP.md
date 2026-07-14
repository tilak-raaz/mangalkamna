# Mangalkamna Hospital Admin Dashboard

## Overview

A complete admin panel for managing hospital content including doctors, gallery images, videos, and custom pages. Built with Next.js, TypeScript, and Appwrite.

## Features

- **Admin Authentication**: Secure login with admin credentials
- **Doctors Management**: Add, edit, and delete doctors
- **Gallery Management**: Upload and manage hospital gallery images
- **Videos Management**: Manage testimonials and promotional videos
- **Pages Management**: Add, edit, publish, and delete custom site pages
- **SEO Settings**: Manage global SEO metadata, social media, and analytics
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

1. Create an Appwrite account at [appwrite.io](https://appwrite.io)
2. Create a project in your Appwrite console
3. Get the endpoint from Project Settings → API → Endpoint
4. Get the project ID from Project Settings
5. Create an API key with the required database permissions

### 3. Database Setup

Create these collections in the same Appwrite database:

#### Doctors Collection

```txt
Database: hospital_db
Collection: doctors
Fields:
- name (String, Required)
- speciality (String, Required)
- doctorImage (String, Required)
- experience (String, Required)
- description (String, Required)
```

#### Gallery Collection

```txt
Database: hospital_db
Collection: gallery
Fields:
- imageURL (String, Required)
```

#### Videos Collection

```txt
Database: hospital_db
Collection: videos
Fields:
- title (String, Required)
- url (String, Required)
- category (String)
- uploadedAt (String)
```

#### Pages Collection

```txt
Database: hospital_db
Collection: pages
Fields:
- title (String, Required)
- slug (String, Required, unique)
- excerpt (String)
- content (String, Required)
- coverImageUrl (String)
- metaTitle (String)
- metaDescription (String)
- isPublished (Boolean)
```

#### SEO Details Collection

```txt
Database ID: 6a3d9eb6002096f75ef1
Collection: seo_details
Fields:
- pageTitle (String, Required)
- metaDescription (String, Required)
- metaKeywords (String, Required)
- $createdAt (Datetime, system field)
- $updatedAt (Datetime, system field)
```

### 4. File Uploads (Optional)

To enable file uploads to Appwrite:

1. Create a Storage bucket in Appwrite: `Settings → Storage → Create Bucket`
2. Set bucket name: `hospital_media`
3. Update the upload handlers in the respective components

## File Structure

```txt
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
│   │   ├── content/
│   │   │   └── page.tsx (Pages Management)
│   │   └── seo/
│   │       └── page.tsx (SEO Details)
│   ├── api/
│   │   └── seo/
│   │       └── route.ts (SEO API Endpoints)
│   └── layout.tsx (Updated with AdminProvider)
├── components/
│   └── admin/
│       ├── AdminSidebar.tsx (Navigation)
│       ├── ProtectedRoute.tsx (Auth Protection)
│       └── SEOSettings.tsx (SEO Form Component)
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
3. Fill in doctor details
4. Click "Add Doctor" to save
5. Edit or delete existing doctors using action buttons

### Manage Gallery

1. Click "Gallery Images" in sidebar
2. Select or upload an image
3. Click "Upload and Save"
4. Delete images as needed

### Manage Videos

1. Click "Videos" in sidebar
2. Enter video title, category, and URL
3. Select category
4. Click "Add Video"

### Manage Pages

1. Click "Pages" in sidebar
2. Click "New Page"
3. Enter title, slug, SEO fields, and content
4. Publish or save as draft
5. Use the public preview link to check the page

### Manage SEO Details

1. Click "SEO Settings" in sidebar
2. Configure page title, meta description, and meta keywords
3. Click "Save SEO Settings" to apply changes
4. Success message confirms the settings have been saved

## API Reference

### SEO Details Endpoints

**GET `/api/seo`**

- Retrieves current SEO details from the database
- Returns: SEO details object or default values if none exist

**PUT `/api/seo`**

- Updates SEO details in the database
- Body: JSON object with `pageTitle`, `metaDescription`, and `metaKeywords`
- Returns: Updated SEO details object

Example usage:

```javascript
// Get SEO settings
const response = await fetch("/api/seo");
const { seoSettings } = await response.json();

// Update SEO settings
await fetch("/api/seo", {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    pageTitle: "My Hospital",
    metaDescription: "Best hospital services...",
    metaKeywords: "hospital, healthcare, medical services",
  }),
});
```

## Data Storage

The app uses Appwrite for doctors, gallery images, pages, and SEO details. Videos currently use browser localStorage.

## Security Considerations

⚠️ **Current Implementation Notes:**

- Authentication is client-side only for demo purposes
- In production, implement server-side authentication
- Use environment variables for sensitive data
- Add role-based access control
- Implement audit logging
- Use HTTPS only
- Validate all uploads
- Rate limit API calls

## Production Deployment

1. Update admin credentials
2. Configure Appwrite for production
3. Set all environment variables on the hosting platform
4. Enable HTTPS
5. Set up backups and monitoring

## Troubleshooting

### Can't access admin panel

- Check credentials
- Clear browser cache
- Verify localStorage is enabled

### Data not persisting

- Verify Appwrite configuration
- Check browser console for errors
- Confirm the Appwrite collections exist

### Upload failures

- Verify file size limits
- Check Appwrite storage bucket permissions
- Verify file types are allowed
