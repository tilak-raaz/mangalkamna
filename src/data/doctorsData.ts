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
        name: "Dr. Alok Sharma",
        slug: "alok-sharma",
        photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2670&auto=format&fit=crop",
        designation: "Senior Consultant & Head of Department",
        specialization: "Cardiology",
        qualifications: "MBBS, MD (Internal Medicine), DM (Cardiology)",
        experience: 22,
        languages: ["English", "Hindi"],
        opdSchedule: "Mon, Wed, Fri (10:00 AM - 01:00 PM)",
        opdDays: "Monday, Wednesday, Friday",
        opdTimings: "10:00 AM – 1:00 PM  |  5:00 PM – 7:00 PM",
        isAvailableToday: true,
        specialInterests: ["Interventional Cardiology", "Electrophysiology", "Heart Failure Management"],
        publications: "Author of 30+ research papers in peer-reviewed journals",
        memberships: "Cardiological Society of India (CSI), European Society of Cardiology (ESC)",
        reviews: [
            {
                rating: 5,
                author: "Sunil K.",
                text: "Extremely professional and empathetic doctor. Explained everything clearly.",
            },
            {
                rating: 5,
                author: "Anita V.",
                text: "My father had a complex heart procedure and the doctor's expertise made all the difference.",
            }
        ]
    },
    {
        id: "d2",
        name: "Dr. Meera Patel",
        slug: "meera-patel",
        photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2670&auto=format&fit=crop",
        designation: "Interventional Cardiologist",
        specialization: "Cardiology",
        qualifications: "MBBS, MD, DNB (Cardiology)",
        experience: 15,
        languages: ["English", "Hindi", "Gujarati"],
        opdSchedule: "Tue, Thu, Sat (11:00 AM - 04:00 PM)",
        opdDays: "Tuesday, Thursday, Saturday",
        opdTimings: "11:00 AM – 4:00 PM",
        isAvailableToday: false,
        specialInterests: ["Coronary Angiography", "Preventive Cardiology"],
        publications: "Published 15+ articles in national medical journals",
        memberships: "Indian Medical Association (IMA), CSI",
        reviews: [
            {
                rating: 5,
                author: "Rajesh P.",
                text: "Very thorough in her examination. Made me feel completely at ease.",
            }
        ]
    },
    {
        id: "d3",
        name: "Dr. Sanjay Gupta",
        slug: "sanjay-gupta",
        photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2670&auto=format&fit=crop",
        designation: "Senior Orthopedic Surgeon",
        specialization: "Orthopedics",
        qualifications: "MBBS, MS (Orthopedics), FRCS",
        experience: 20,
        languages: ["English", "Hindi"],
        opdSchedule: "Mon to Sat (09:00 AM - 01:00 PM)",
        opdDays: "Monday to Saturday",
        opdTimings: "9:00 AM – 1:00 PM",
        isAvailableToday: true,
        specialInterests: ["Joint Replacement", "Spine Surgery", "Trauma Care"],
        publications: "Authored textbook chapters on modern joint replacement techniques",
        memberships: "Indian Orthopaedic Association (IOA), AO Trauma",
        reviews: [
            {
                rating: 5,
                author: "Vikram M.",
                text: "My knee replacement was a complete success thanks to Dr. Gupta.",
            }
        ]
    },
    {
        id: "d4",
        name: "Dr. Neha Verma",
        slug: "neha-verma",
        photo: "https://images.unsplash.com/photo-1594824432463-5d51cb541a7e?q=80&w=2574&auto=format&fit=crop",
        designation: "Sports Medicine Specialist",
        specialization: "Orthopedics",
        qualifications: "MBBS, MS, Fellowship in Sports Medicine",
        experience: 12,
        languages: ["English", "Hindi"],
        opdSchedule: "Mon, Wed, Fri (02:00 PM - 06:00 PM)",
        opdDays: "Monday, Wednesday, Friday",
        opdTimings: "2:00 PM – 6:00 PM",
        isAvailableToday: true,
        specialInterests: ["Arthroscopic Surgery", "Ligament Reconstruction", "Sports Injuries"],
        publications: "Lead researcher on ACL recovery protocols",
        memberships: "Indian Arthroscopy Society",
        reviews: []
    },
    {
        id: "d5",
        name: "Dr. Vikram Iyer",
        slug: "vikram-iyer",
        photo: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2670&auto=format&fit=crop",
        designation: "Head Neurologist",
        specialization: "Neurology",
        qualifications: "MBBS, MD, DM (Neurology)",
        experience: 25,
        languages: ["English", "Hindi", "Tamil"],
        opdSchedule: "Tue, Thu (10:00 AM - 03:00 PM)",
        opdDays: "Tuesday, Thursday",
        opdTimings: "10:00 AM – 3:00 PM",
        isAvailableToday: false,
        specialInterests: ["Stroke Management", "Epilepsy", "Movement Disorders"],
        publications: "Pioneering clinical trials in Parkinson's disease",
        memberships: "Neurological Society of India (NSI), World Federation of Neurology",
        reviews: [
            {
                rating: 5,
                author: "Sowmya N.",
                text: "Exceptional neuro physician. Very patient with elderly patients.",
            }
        ]
    },
    {
        id: "d6",
        name: "Dr. Anjali Desai",
        slug: "anjali-desai",
        photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2670&auto=format&fit=crop",
        designation: "Senior Pediatrician",
        specialization: "Paediatrics",
        qualifications: "MBBS, MD (Pediatrics)",
        experience: 18,
        languages: ["English", "Hindi", "Marathi"],
        opdSchedule: "Mon to Sat (09:00 AM - 05:00 PM)",
        opdDays: "Monday to Saturday",
        opdTimings: "9:00 AM – 5:00 PM",
        isAvailableToday: true,
        specialInterests: ["Neonatology", "Childhood Asthma", "Preventive Care"],
        publications: "Articles on early childhood nutrition",
        memberships: "Indian Academy of Pediatrics (IAP)",
        reviews: []
    },
    {
        id: "d7",
        name: "Dr. Rakesh Singh",
        slug: "rakesh-singh",
        photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2670&auto=format&fit=crop",
        designation: "Chief Oncologist",
        specialization: "Oncology",
        qualifications: "MBBS, MD, DM (Medical Oncology)",
        experience: 22,
        languages: ["English", "Hindi"],
        opdSchedule: "Mon, Wed, Fri (09:00 AM - 01:00 PM)",
        opdDays: "Monday, Wednesday, Friday",
        opdTimings: "9:00 AM – 1:00 PM",
        isAvailableToday: true,
        specialInterests: ["Targeted Therapy", "Immunotherapy", "Solid Tumors"],
        publications: "Lead author of national oncology guidelines",
        memberships: "Indian Society of Medical and Paediatric Oncology (ISMPO)",
        reviews: []
    },
    {
        id: "d8",
        name: "Dr. Suman Rathore",
        slug: "suman-rathore",
        photo: "https://images.unsplash.com/photo-1594824432463-5d51cb541a7e?q=80&w=2574&auto=format&fit=crop",
        designation: "Lead Gynecologist",
        specialization: "Gynaecology",
        qualifications: "MBBS, MD (Obstetrics & Gynecology)",
        experience: 19,
        languages: ["English", "Hindi", "Punjabi"],
        opdSchedule: "Tue, Thu, Sat (10:00 AM - 02:00 PM)",
        opdDays: "Tuesday, Thursday, Saturday",
        opdTimings: "10:00 AM – 2:00 PM",
        isAvailableToday: false,
        specialInterests: ["High-Risk Pregnancy", "Laparoscopic Surgery", "Infertility Assessment"],
        publications: "Over 20 papers on maternal-fetal medicine",
        memberships: "Federation of Obstetric and Gynaecological Societies of India (FOGSI)",
        reviews: []
    },
];

export const getUniqueDepartments = () => {
    const departments = doctorsData.map((doc) => doc.specialization);
    return Array.from(new Set(departments)).sort();
};

export function getDoctorBySlug(slug: string) {
    return doctorsData.find((doc) => doc.slug === slug);
}
