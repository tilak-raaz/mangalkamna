import Image from "next/image";

export default function OurStory() {
  return (
    <>
      {/* SECTION 2 — OUR STORY */}
      <section className="relative w-full py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column: Text Content */}
            <div className="flex flex-col space-y-6 md:space-y-8">
              <div className="space-y-4">
                <span className="flex items-center gap-4 text-[#cb1b1a] font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
                  <span className="w-8 h-0.5 bg-[#cb1b1a]/50"></span>
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.2] tracking-tight">
                  A vision of <br className="hidden lg:block" />
                  compassionate, <br />
                  <span className="text-[#681412]">accessible healthcare.</span>
                </h2>
              </div>

              <div className="space-y-6 text-slate-600 text-[1rem] md:text-[1.1rem] leading-[1.8] font-medium max-w-lg lg:pr-6">
                <p>
                  Founded in{" "}
                  <span className="font-bold text-slate-900">2009</span>,
                  Mangalkamna Hospital began as a modest clinic with a singular
                  vision: to bring compassionate, accessible, and affordable
                  healthcare to our community. Over the decades, we have grown
                  into a multi-specialty hospital — a centre of excellence
                  housing state-of-the-art infrastructure, renowned specialists,
                  and a patient-first philosophy that touches every corner of
                  our work.
                </p>
                <p>
                  Today, we proudly serve thousands of patients each year, from
                  routine wellness check-ups to complex surgeries. Our journey
                  is defined not by the buildings we have built, but by the{" "}
                  <span className="text-[#cb1b1a] font-bold">
                    lives we have transformed
                  </span>
                  .
                </p>
              </div>
            </div>

            {/* Right Column: Visual & Stats */}
            <div className="w-full flex flex-col gap-6 mt-4 lg:mt-0">
              {/* Hero Image (Wide Top Image) */}
              <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2906&auto=format&fit=crop"
                  alt="Mangalkamna Hospital Overview"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {/* Stat 1 */}
                <div className="flex flex-col items-center justify-center p-6 md:p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#cb1b1a]/20 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(203,27,26,0.1)] transition-all duration-300 group text-center">
                  <div className="text-3xl lg:text-4xl font-extrabold text-[#cb1b1a] mb-1">
                    15+
                  </div>
                  <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Years Experience
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="flex flex-col items-center justify-center p-6 md:p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#cb1b1a]/20 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(203,27,26,0.1)] transition-all duration-300 group text-center">
                  <div className="text-3xl lg:text-4xl font-extrabold text-[#cb1b1a] mb-1">
                    30+
                  </div>
                  <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Medical Departments
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="flex flex-col items-center justify-center p-6 md:p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#cb1b1a]/20 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(203,27,26,0.1)] transition-all duration-300 group text-center">
                  <div className="text-3xl lg:text-4xl font-extrabold text-[#cb1b1a] mb-1">
                    10k+
                  </div>
                  <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Positive Reviews
                  </div>
                </div>

                {/* Stat 4 */}
                <div className="flex flex-col items-center justify-center p-6 md:p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#cb1b1a]/20 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(203,27,26,0.1)] transition-all duration-300 group text-center">
                  <div className="text-3xl lg:text-4xl font-extrabold text-[#cb1b1a] mb-1">
                    100K+
                  </div>
                  <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Trusted Patients
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
