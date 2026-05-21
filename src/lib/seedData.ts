// Sample data for seeding the admin system
export const initialDoctors = [
  {
    id: "1",
    name: "Dr. Rajesh Sharma",
    specialization: "Cardiology",
    experience: "15 years",
    image:
      "https://images.unsplash.com/photo-1622902046580-2b47f47f019d?w=400&h=400&fit=crop",
    bio: "Expert in cardiovascular health and preventive cardiology with extensive experience in interventional procedures.",
  },
  {
    id: "2",
    name: "Dr. Priya Mehta",
    specialization: "Orthopedic Surgery",
    experience: "12 years",
    image:
      "https://images.unsplash.com/photo-1559839734033-6461ffad8d80?w=400&h=400&fit=crop",
    bio: "Specialized in sports medicine, joint replacement, and orthopedic trauma with a patient-focused approach.",
  },
  {
    id: "3",
    name: "Dr. Amit Patel",
    specialization: "Neurology",
    experience: "10 years",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Expertise in neurological disorders, stroke management, and neuroimaging interpretation.",
  },
  {
    id: "4",
    name: "Dr. Neha Gupta",
    specialization: "General Medicine",
    experience: "8 years",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    bio: "Comprehensive internal medicine with focus on holistic patient care and preventive medicine.",
  },
];

export const initialGalleryImages = [
  {
    id: "1",
    title: "Hospital Entrance",
    url: "https://images.unsplash.com/photo-1576091160550-112173e7f1c0?w=500&h=400&fit=crop",
    uploadedAt: "May 20, 2026",
  },
  {
    id: "2",
    title: "Modern OPD",
    url: "https://images.unsplash.com/photo-1576091160399-112ce8c36e94?w=500&h=400&fit=crop",
    uploadedAt: "May 20, 2026",
  },
  {
    id: "3",
    title: "ICU Ward",
    url: "https://images.unsplash.com/photo-1578496966848-d452f396af31?w=500&h=400&fit=crop",
    uploadedAt: "May 20, 2026",
  },
  {
    id: "4",
    title: "Operation Theatre",
    url: "https://images.unsplash.com/photo-1576091160550-112173e7f1c0?w=500&h=400&fit=crop",
    uploadedAt: "May 20, 2026",
  },
  {
    id: "5",
    title: "Emergency Room",
    url: "https://images.unsplash.com/photo-1591357814050-52fc6cf67b19?w=500&h=400&fit=crop",
    uploadedAt: "May 19, 2026",
  },
  {
    id: "6",
    title: "Patient Room",
    url: "https://images.unsplash.com/photo-1576091160730-b8f5daa89f23?w=500&h=400&fit=crop",
    uploadedAt: "May 19, 2026",
  },
  {
    id: "7",
    title: "Laboratory",
    url: "https://images.unsplash.com/photo-1576091160550-112173e7f1c0?w=500&h=400&fit=crop",
    uploadedAt: "May 19, 2026",
  },
  {
    id: "8",
    title: "Pharmacy",
    url: "https://images.unsplash.com/photo-1587854692152-cbe660dbde36?w=500&h=400&fit=crop",
    uploadedAt: "May 18, 2026",
  },
  {
    id: "9",
    title: "Waiting Area",
    url: "https://images.unsplash.com/photo-1576091160550-112173e7f1c0?w=500&h=400&fit=crop",
    uploadedAt: "May 18, 2026",
  },
  {
    id: "10",
    title: "Cafeteria",
    url: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=500&h=400&fit=crop",
    uploadedAt: "May 17, 2026",
  },
  {
    id: "11",
    title: "Conference Room",
    url: "https://images.unsplash.com/photo-1576091160550-112173e7f1c0?w=500&h=400&fit=crop",
    uploadedAt: "May 17, 2026",
  },
  {
    id: "12",
    title: "Outdoor View",
    url: "https://images.unsplash.com/photo-1567526491496-b76d6dfe41ac?w=500&h=400&fit=crop",
    uploadedAt: "May 16, 2026",
  },
];

export const initialVideos = [
  {
    id: "1",
    title: "Patient Success Story - Recovery Journey",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "testimonials",
    uploadedAt: "May 21, 2026",
  },
  {
    id: "2",
    title: "Hospital Facilities Tour",
    url: "https://www.youtube.com/embed/jNQXAC9IVRw",
    category: "facilities",
    uploadedAt: "May 20, 2026",
  },
];

export function seedInitialData() {
  // Check if data already exists
  if (!localStorage.getItem("doctors")) {
    localStorage.setItem("doctors", JSON.stringify(initialDoctors));
  }

  if (!localStorage.getItem("galleryImages")) {
    localStorage.setItem("galleryImages", JSON.stringify(initialGalleryImages));
  }

  if (!localStorage.getItem("videos")) {
    localStorage.setItem("videos", JSON.stringify(initialVideos));
  }
}
