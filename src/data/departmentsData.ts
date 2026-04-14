export const departmentsData = [
    {
        slug: "urology",
        name: "Urology",
        iconName: "Activity",
        intro: "The Department of Urology provides comprehensive medical and surgical management of genitourinary disorders across all age groups. We focus on organ preservation, minimal blood loss, faster recovery, and long-term functional outcomes.",
        conditions: [
            "Genitourinary Disorders",
            "Urinary Stones (Kidney, Ureter, Bladder)",
            "Prostate Enlargement",
            "Urological Cancers",
            "Male Infertility",
            "Erectile Dysfunction",
            "Urethral Strictures"
        ],
        procedures: [
            "RIRS, PCNL / Mini PCNL, URSL, Laser Lithotripsy",
            "TURP / Bipolar TURP",
            "Laparoscopic Nephrectomy, Pyeloplasty, Adrenal Surgery",
            "Radical Prostatectomy, Radical Cystectomy",
            "Bladder Tumor Resection (TURBT)",
            "Urethroplasty, Bladder Reconstruction",
            "Varicocele Surgery, Micro-surgical Procedures"
        ],
        doctors: [
            {
                name: "Dr. Shekhar Vajpeyi",
                role: "Senior Consultant – Urology, Andrology & Uro-Oncology",
                image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2670&auto=format&fit=crop"
            },
            {
                name: "Dr. Vinayak Vajpeyi",
                role: "Consultant – Urology & Minimally Invasive Surgery",
                image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2670&auto=format&fit=crop"
            }
        ]
    },
    {
        slug: "nephrology",
        name: "Nephrology",
        iconName: "Droplet",
        intro: "The Nephrology Department delivers comprehensive kidney care, from early diagnosis to advanced renal replacement therapy. Strict infection control and dialysis quality protocols are maintained.",
        conditions: [
            "Chronic Kidney Disease (CKD)",
            "Acute Kidney Injury (AKI)",
            "Diabetic Kidney Disease",
            "Glomerular Disease",
            "Hypertension"
        ],
        procedures: [
            "Hemodialysis Services",
            "Pre- and Post-Transplant Care Coordination",
            "Hypertension Clinic Management",
            "CKD Management",
            "Glomerular Disease Evaluation"
        ],
        doctors: []
    },
    {
        slug: "cardiology",
        name: "Cardiology",
        iconName: "Heart",
        intro: "The Department of Cardiology focuses on early detection, intervention, and long-term management of heart diseases.",
        conditions: [
            "Heart Failure",
            "Coronary Artery Disease",
            "Hypertension",
            "Lipid Disorders"
        ],
        procedures: [
            "ECG & 2D Echo",
            "Stress Testing",
            "Coronary Angiography",
            "Angioplasty (PTCA)",
            "Preventive Cardiology",
            "Hypertension & Lipid Clinics"
        ],
        doctors: []
    },
    {
        slug: "cardiac-surgery",
        name: "Cardiac Surgery",
        iconName: "HeartPulse",
        intro: "Our cardiac surgery unit provides advanced surgical care supported by a dedicated cardiac ICU.",
        conditions: [
            "Coronary Artery Blockages",
            "Heart Valve Disorders",
            "Congenital Heart Diseases",
            "Cardiac Emergencies"
        ],
        procedures: [
            "CABG (Coronary Artery Bypass Grafting)",
            "Valve Repair & Replacement",
            "Congenital Cardiac Surgery",
            "Emergency Cardiac Surgery",
            "Post-operative Cardiac Critical Care"
        ],
        doctors: []
    },
    {
        slug: "critical-care-icu",
        name: "Critical Care & Intensive Care Unit",
        iconName: "Stethoscope",
        intro: "Our ICU and HDU units are equipped with advanced ventilators, multiparameter monitors, central monitoring systems, infusion pumps, defibrillators, and isolation facilities.",
        conditions: [
            "Post-operative cases",
            "Cardiac emergencies",
            "Renal failure",
            "Sepsis",
            "Trauma & multi-organ dysfunction"
        ],
        procedures: [
            "Advanced Ventilation",
            "Central Monitoring",
            "Infusion Pump Management",
            "Defibrillation",
            "Isolation Facility Care",
            "Trained Critical Care Recovery"
        ],
        doctors: []
    }
];

export function getDepartmentBySlug(slug: string) {
    return departmentsData.find((dept) => dept.slug === slug);
}
