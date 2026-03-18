import Image from "next/image";

export default function Leadership() {
  return (
    <>
      {/* SECTION 6 — LEADERSHIP TEAM */}
      <section className="relative w-full py-20 lg:py-32 bg-white overflow-hidden">
        {/* Background elements */}
        <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-slate-50 to-transparent"></div>
        <div className="absolute top-40 left-0 w-72 h-72 bg-[#cb1b1a]/5 rounded-full blur-3xl -translate-x-1/2"></div>
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-[#681412]/5 rounded-full blur-3xl translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="text-center mb-16 lg:mb-24">
            <span className="flex items-center justify-center gap-4 text-[#cb1b1a] font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
              <span className="w-8 h-0.5 bg-[#cb1b1a]/50"></span>
              Our Backbone
              <span className="w-8 h-0.5 bg-[#cb1b1a]/50"></span>
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.2] tracking-tight mt-4">
              Leadership <span className="text-[#cb1b1a]">Team</span>
            </h2>
            <p className="mt-6 text-slate-600 text-[1.05rem] leading-relaxed max-w-2xl mx-auto font-medium">
              Guided by experienced professionals who combine medical excellence
              with visionary management.
            </p>
          </div>

          <div className="flex flex-col gap-8 md:gap-10 relative z-10 w-full max-w-5xl mx-auto">
            {[
              {
                name: "Dr. [Name]",
                role: "Chairman & Managing Director",
                bio: "Visionary leader with 35+ years in healthcare management. Under his leadership, the hospital has achieved national-level accreditations and expanded to serve the entire region.",
                image:
                  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop",
              },
              {
                name: "Dr. [Name]",
                role: "Medical Director",
                bio: "A renowned surgeon with expertise in minimally invasive procedures. Leads the hospital's clinical excellence initiatives and medical quality assurance.",
                image:
                  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop",
              },
              {
                name: "Mr./Ms. [Name]",
                role: "Chief Executive Officer",
                bio: "Strategic business leader driving the hospital's growth, patient experience improvements, and digital transformation initiatives.",
                image:
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
              },
            ].map((leader, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 border border-slate-100 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(203,27,26,0.15)] hover:border-[#cb1b1a]/20 transition-all duration-300 w-full"
              >
                {/* Image Container - Left Side */}
                <div className="relative w-48 h-48 md:w-56 md:h-56 shrink-0 rounded-[1.5rem] overflow-hidden shadow-md group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-500 bg-slate-50 border-[6px] border-white">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-[#681412]/0 group-hover:bg-[#681412]/10 transition-colors duration-500 pointer-events-none"></div>
                </div>

                {/* Content - Right Side */}
                <div className="flex flex-col flex-grow text-center md:text-left justify-center h-full pt-2 md:pt-4">
                  <div className="mb-4 flex justify-center md:justify-start">
                    <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#cb1b1a]/10 text-[#cb1b1a] text-xs font-bold uppercase tracking-[0.1em] border border-[#cb1b1a]/10 shadow-sm">
                      {leader.role}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4 group-hover:text-[#cb1b1a] transition-colors">
                    {leader.name}
                  </h3>

                  <p className="text-slate-600 font-medium leading-relaxed md:text-[1.05rem]">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
