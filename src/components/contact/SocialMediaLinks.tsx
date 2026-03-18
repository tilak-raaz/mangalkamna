import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
  MessageCircle,
} from "lucide-react";

export default function SocialMediaLinks() {
  const socials = [
    {
      name: "Facebook",
      icon: Facebook,
      handle: "facebook.com/HospitalHandle",
      url: "#",
      // Optional brand hover colors or stick to primary red. We stick to the consistent #cb1b1a red on hover.
    },
    {
      name: "Instagram",
      icon: Instagram,
      handle: "instagram.com/HospitalHandle",
      url: "#",
    },
    {
      name: "YouTube",
      icon: Youtube,
      handle: "youtube.com/@HospitalHandle",
      url: "#",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      handle: "linkedin.com/company/HospitalHandle",
      url: "#",
    },
    {
      name: "Twitter / X",
      icon: Twitter,
      handle: "x.com/HospitalHandle",
      url: "#",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle, // MessageCircle acts as a universally recognized chat/whatsapp alternative in lucide
      handle: "+91-XXXX-XXXXXX",
      subHandle: "(for non-emergency queries)",
      url: "#",
    },
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="flex items-center justify-center gap-3 text-[#cb1b1a] font-bold tracking-[0.2em] uppercase text-sm mb-4">
            <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
            Get Social
            <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Connect With Us
          </h2>
          <p className="text-lg text-slate-600">
            Follow us on our social channels for daily health tips, hospital
            updates, and community stories.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:border-red-100 hover:bg-white hover:shadow-[0_20px_40px_rgb(203,27,26,0.06)] hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-slate-100 group-hover:bg-[#cb1b1a] group-hover:border-[#cb1b1a] group-hover:text-white transition-colors text-slate-500 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#cb1b1a] transition-colors">
                    {social.name}
                  </h3>
                  <p className="text-sm font-medium text-slate-500 mt-0.5 line-clamp-1">
                    {social.handle}
                  </p>
                  {social.subHandle && (
                    <p className="text-xs text-slate-400 mt-1">
                      {social.subHandle}
                    </p>
                  )}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
