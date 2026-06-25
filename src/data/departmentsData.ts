export const departmentsData = [
  {
    slug: "urology",
    name: "Urology",
    iconName: "Activity",
    intro:
      "The Department of Urology provides comprehensive medical and surgical management of genitourinary disorders across all age groups. We focus on organ preservation, minimal blood loss, faster recovery, and long-term functional outcomes.",
    conditions: [
      "Genitourinary Disorders",
      "Urinary Stones (Kidney, Ureter, Bladder)",
      "Prostate Enlargement",
      "Urological Cancers",
      "Male Infertility",
      "Erectile Dysfunction",
      "Urethral Strictures",
    ],
    procedures: [
      "RIRS, PCNL / Mini PCNL, URSL, Laser Lithotripsy",
      "TURP / Bipolar TURP",
      "HoLEP, ThuLEP, Rezum",
      "Laparoscopic Nephrectomy, Pyeloplasty, Adrenal Surgery",
      "Radical Prostatectomy, Radical Cystectomy",
      "Bladder Tumor Resection (TURBT)",
      "Urethroplasty, Bladder Reconstruction",
      "Varicocele Surgery, Micro-surgical Procedures",
    ],
    doctors: [
      {
        name: "Dr. Shekhar Vajpeyi",
        role: "Senior Consultant – Urology, Andrology & Uro-Oncology",
        image:
          "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2670&auto=format&fit=crop",
      },
      {
        name: "Dr. Vinayak Vajpeyi",
        role: "Consultant – Urology & Minimally Invasive Surgery",
        image:
          "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2670&auto=format&fit=crop",
      },
    ],
  },
  {
    slug: "critical-care-and-anesthesia",
    name: "Critical Care & Anesthesia",
    iconName: "HeartPulse",
    intro:
      "The Department of Critical Care and Anesthesia offers round-the-clock intensive care and comprehensive perioperative anesthetic management. We are equipped with state-of-the-art life support systems and advanced monitoring to handle complex medical and surgical emergencies with precision.",
    conditions: [
      "Sepsis and Septic Shock",
      "Severe Respiratory Distress (ARDS)",
      "Multiorgan Dysfunction Syndrome (MODS)",
      "Post-operative Complications",
      "Trauma and Polytrauma",
      "Neurological Emergencies & Stroke",
      "Acute and Chronic Pain Conditions",
    ],
    procedures: [
      "Advanced Hemodynamic Monitoring",
      "Mechanical Ventilation (Invasive & Non-invasive)",
      "General, Regional, and Local Anesthesia",
      "Ultrasound-guided Nerve Blocks",
      "Continuous Renal Replacement Therapy (CRRT)",
      "Percutaneous Tracheostomy",
      "Epidural Analgesia and Pain Management",
      "Resuscitation & Advanced Life Support",
    ],
    doctors: [
      {
        name: "Dr. Rajesh Kumar",
        role: "Head of Intensive Care Unit (ICU) & Critical Care",
        image:
          "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2670&auto=format&fit=crop",
      },
      {
        name: "Dr. Anjali Desai",
        role: "Senior Consultant – Anesthesiology & Pain Management",
        image:
          "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2670&auto=format&fit=crop",
      },
    ],
  },
];

export function getDepartmentBySlug(slug: string) {
  return departmentsData.find((dept) => dept.slug === slug);
}