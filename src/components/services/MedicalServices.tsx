import { Stethoscope, Scissors, Microscope, Baby } from "lucide-react";

const serviceCategories = [
  {
    id: "medical",
    title: "Medical Services",
    icon: Stethoscope,
    items: [
      "General Medicine & Internal Medicine",
      "Diabetology & Endocrinology",
      "Rheumatology & Immunology",
      "Infectious Disease Management",
      "Geriatric Care & Elder Health",
      "Preventive Health Check-up Packages",
    ],
  },
  {
    id: "surgical",
    title: "Surgical Services",
    icon: Scissors,
    items: [
      "General & Laparoscopic Surgery",
      "Cardiac & Thoracic Surgery",
      "Neurosurgery & Spine Surgery",
      "Plastic & Reconstructive Surgery",
      "Robotic-Assisted Surgery",
      "Bariatric (Weight Loss) Surgery",
      "Organ Transplant (Kidney, Liver)",
    ],
  },
  {
    id: "diagnostic",
    title: "Diagnostic Services",
    icon: Microscope,
    items: [
      "Pathology & Clinical Laboratory (NABL Certified)",
      "Radiology — MRI, CT Scan, X-Ray, Ultrasound",
      "4D / 3D Echocardiography",
      "Endoscopy & Colonoscopy",
      "Pulmonary Function Tests (PFT)",
      "Genetic Testing",
    ],
  },
  {
    id: "specialized",
    title: "Specialized Programmes",
    icon: Baby,
    items: [
      "Infertility Care & Reproductive Medicine",
      "Sexual Issue Management",
      "Cancer Screening & Early Detection",
      "Cardiac Wellness Programme",
      "Diabetes Management & Education",
      "Pain Management Clinic",
      "Mental Health & Counselling Services",
      "Physiotherapy & Rehabilitation Centre",
    ],
  },
];

export default function MedicalServices() {
  return (
    <section id="categories" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="flex items-center justify-center gap-3 text-[#cb1b1a] font-bold tracking-[0.2em] uppercase text-sm mb-4">
            <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
            Our Expertise
            <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Service Categories
          </h2>
          <p className="text-slate-600 font-medium text-lg">
            A comprehensive approach to health, delivering specialized
            treatments across multiple medical disciplines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {serviceCategories.map((category) => (
            <div
              key={category.id}
              className="group bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-100 hover:border-[#cb1b1a]/30 hover:shadow-[0_20px_50px_-15px_rgba(203,27,26,0.1)] transition-all duration-500 relative overflow-hidden"
            >
              {/* Decorative Background Icon */}
              <category.icon className="absolute -bottom-6 -right-6 w-48 h-48 text-slate-200/50 group-hover:text-[#cb1b1a]/5 -rotate-12 transition-colors duration-500 z-0" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500 border border-slate-100">
                  <category.icon
                    className="w-8 h-8 text-[#681412]"
                    strokeWidth={2}
                  />
                </div>

                <h3 className="text-2xl font-extrabold text-[#681412] mb-6">
                  {category.title}
                </h3>

                <ul className="space-y-4">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#cb1b1a] mt-2.5 shrink-0"></span>
                      <span className="text-slate-700 font-medium leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
