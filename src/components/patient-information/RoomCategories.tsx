import { Check } from "lucide-react";

export default function RoomCategories() {
  const rooms = [
    {
      type: "General Ward",
      amenities: "Basic nursing care, shared bathroom, standard hospital meals",
      occupancy: "6–8 patients",
      highlight: false,
    },
    {
      type: "Semi-Private",
      amenities: "Air conditioning, attached bathroom, TV, 1 attender bed",
      occupancy: "2 patients",
      highlight: false,
    },
    {
      type: "Private",
      amenities:
        "Air conditioning, attached bathroom, sofa-cum-bed, TV, mini fridge",
      occupancy: "Single occupancy",
      highlight: true,
    },
    {
      type: "Deluxe",
      amenities:
        "Premium furnishing, guest lounge area, dedicated nursing care",
      occupancy: "Single + attendant",
      highlight: false,
    },
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,#cb1b1a_0%,transparent_50%)] opacity-[0.03] blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <span className="flex items-center gap-3 text-[#cb1b1a] font-bold tracking-[0.2em] uppercase text-sm mb-4">
              <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
              Accommodation
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-900">
              Room Categories
            </h2>
            <p className="text-slate-600 font-medium text-lg leading-relaxed">
              We offer multiple tiers of accommodation to suit the personal
              preferences and financial requirements of our patients.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm md:hidden">
          {/* Mobile View: Cards */}
          <div className="divide-y divide-slate-100">
            {rooms.map((room, index) => (
              <div
                key={index}
                className={`p-6 ${room.highlight ? "bg-[#cb1b1a]/5" : ""}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3
                    className={`font-bold text-xl ${room.highlight ? "text-[#cb1b1a]" : "text-[#681412]"}`}
                  >
                    {room.type}
                  </h3>
                  <span className="text-xs font-bold bg-white border border-slate-200 px-3 py-1 rounded-full text-slate-600">
                    {room.occupancy}
                  </span>
                </div>
                <div className="flex items-start gap-2 mt-4">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-slate-600 font-medium text-sm">
                    {room.amenities}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop View: Table */}
        <div className="hidden md:block bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#681412] text-white">
                <th className="py-6 px-8 font-bold text-lg w-1/4">Room Type</th>
                <th className="py-6 px-8 font-bold text-lg w-1/2">
                  Amenities Included
                </th>
                <th className="py-6 px-8 font-bold text-lg w-1/4 rounded-tr-3xl">
                  Occupancy
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rooms.map((room, index) => (
                <tr
                  key={index}
                  className={`group transition-colors ${
                    room.highlight ? "bg-[#cb1b1a]/5" : "hover:bg-slate-50/50"
                  }`}
                >
                  <td className="py-6 px-8">
                    <span
                      className={`font-bold text-lg ${room.highlight ? "text-[#cb1b1a]" : "text-slate-900"}`}
                    >
                      {room.type}
                    </span>
                  </td>
                  <td className="py-6 px-8">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-slate-600 font-medium">
                        {room.amenities}
                      </span>
                    </div>
                  </td>
                  <td className="py-6 px-8">
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-bold shadow-sm">
                      {room.occupancy}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
