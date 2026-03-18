import { MapPin, Phone, Activity, Navigation } from "lucide-react";

export default function MultipleLocations() {
  const locations = [
    {
      id: "main-campus",
      name: "Main Campus & Research Center",
      address:
        "Plot no.38P/40/47P/48P/48, Rajeev Nagar Colony, Agra, Uttar Pradesh 282002",
      phone: "+91-XXXX-XXXXXX",
      services:
        "24/7 Emergency, Cardiology, Neurology, Orthopedics, General Surgery, ICU",
      directions:
        "Situated opposite Bombay wali bagichi, via Sheetla road and Kendriya Hindi Sansthan Rd.",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14197.697241285227!2d77.99406059522956!3d27.174418652610738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974776b6d511ea9%3A0xea1a72d3e43033f7!2sMahanandan%20Super%20Speciality%20Hospital!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
    },
    {
      id: "city-clinic",
      name: "City Center OPD Clinic",
      address: "[Building Name], [Commercial Street], City Center - [PIN Code]",
      phone: "+91-XXXX-XXXXXX",
      services:
        "General Physician, Pediatrics, Dental, Routine Checkups, Pharmacy",
      directions:
        "Located near the central historic monument, 5 mins from the main square.",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.400502181515!2d78.006935!3d27.182245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDEwJzU2LjEiTiA3OMKwMDAnMjUuMCJF!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
    },
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="flex items-center justify-center gap-3 text-[#cb1b1a] font-bold tracking-[0.2em] uppercase text-sm mb-4">
            <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
            Our Network
            <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Our Hospital Locations
          </h2>
          <p className="text-lg text-slate-600">
            Find the nearest facility to you. We operate multiple branches to
            ensure quality healthcare is always within your reach.
          </p>
        </div>

        <div className="space-y-12">
          {locations.map((loc, index) => (
            <div
              key={loc.id}
              className={`flex flex-col ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-12 bg-slate-50 p-6 lg:p-8 rounded-[2.5rem] border border-slate-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-shadow duration-300`}
            >
              {/* Map Embed */}
              <div className="w-full lg:w-1/2 h-80 lg:h-auto min-h-[350px] rounded-3xl overflow-hidden relative border-4 border-white shadow-lg bg-slate-200">
                <iframe
                  src={loc.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                ></iframe>
              </div>

              {/* Details */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
                  {loc.name}
                </h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-red-50 text-[#cb1b1a] rounded-xl flex-shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Address
                      </p>
                      <p className="font-medium text-slate-700">
                        {loc.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-red-50 text-[#cb1b1a] rounded-xl flex-shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Phone Number
                      </p>
                      <p className="font-medium text-slate-700">{loc.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-red-50 text-[#cb1b1a] rounded-xl flex-shrink-0 mt-0.5">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Services Available
                      </p>
                      <p className="font-medium text-slate-700">
                        {loc.services}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-red-50 text-[#cb1b1a] rounded-xl flex-shrink-0 mt-0.5">
                      <Navigation className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Directions
                      </p>
                      <p className="font-medium text-slate-700">
                        {loc.directions}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(loc.name + " " + loc.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#cb1b1a] hover:text-rose-700 transition-colors group"
                  >
                    Open in Google Maps
                    <Navigation className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
