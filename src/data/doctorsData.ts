export type Review = {
  text: string;
  author: string;
  rating: number;
};

export type Doctor = {
  id: string;
  name: string;
  slug: string;
  photo: string;
  designation: string;
  specialization: string;
  qualifications: string;
  experience: number;
  languages: string[];
  opdSchedule: string; // Deprecated, keep for backwards compat
  opdDays: string;
  opdTimings: string;
  isAvailableToday: boolean;
  specialInterests: string[];
  publications: string;
  memberships: string;
  reviews: Review[];
};

export const doctorsData: Doctor[] = [
  {
    id: "d1",
    name: "Dr. Shekhar Vajpeyi",
    slug: "shekhar-vajpeyi",
    photo:
      "https://res.cloudinary.com/du5qoczcn/image/upload/a_-90/ar_1:1,c_auto/0D5A8851_a6tvgn.jpg",
    designation: "Senior Consultant – Urology, Andrology & Uro-Oncology",
    specialization: "Urology",
    qualifications: "MS, MCh, Urology",
    experience: 20,
    languages: ["English", "Hindi"],
    opdSchedule: "Mon–Sat: 9:00 AM – 3:00 PM, Sun: 9:00 AM – 2:00 PM",
    opdDays: "Monday to Saturday, Sunday",
    opdTimings: "Mon–Sat: 9:00 AM – 3:00 PM | Sun: 9:00 AM – 2:00 PM",
    isAvailableToday: true,
    specialInterests: [
      "Laser Prostate Surgery",
      "Stone Surgery",
      "Minimally Invasive Uro-Oncology",
      "Endourology",
      "Reconstructive Urology",
    ],
    publications: "Expert with extensive surgical experience",
    memberships: "",
    reviews: [],
  },
  {
    id: "d2",
    name: "Dr. Vinayak Vajpeyi",
    slug: "vinayak-vajpeyi",
    photo:
      "https://res.cloudinary.com/du5qoczcn/image/upload/a_-90/ar_1:1,c_auto/0D5A8848_wp5brx.jpg",
    designation: "Consultant – Urology & Minimally Invasive Surgery",
    specialization: "Urology",
    qualifications: "MS, MCh, Urology",
    experience: 10,
    languages: ["English", "Hindi"],
    opdSchedule: "Mon–Sat: 9:00 AM – 3:00 PM, Sun: 9:00 AM – 2:00 PM",
    opdDays: "Monday to Saturday, Sunday",
    opdTimings: "Mon–Sat: 9:00 AM – 3:00 PM | Sun: 9:00 AM – 2:00 PM",
    isAvailableToday: true,
    specialInterests: [
      "Advanced Endourology",
      "Laparoscopic Procedures",
      "Modern Prostate Treatments",
    ],
    publications: "Specialist in minimally invasive surgery",
    memberships: "",
    reviews: [],
  },
];

export const getUniqueDepartments = () => {
  const departments = doctorsData.map((doc) => doc.specialization);
  return Array.from(new Set(departments)).sort();
};

export function getDoctorBySlug(slug: string) {
  return doctorsData.find((doc) => doc.slug === slug);
}
