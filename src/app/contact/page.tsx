import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import MultipleLocations from "@/components/contact/MultipleLocations";
import HowToReach from "@/components/contact/HowToReach";
import SocialMediaLinks from "@/components/contact/SocialMediaLinks";

export const metadata = {
  title: "Contact Us - Hospital Name",
  description:
    "Get in touch with us. View our contact details, location, and reach out through our contact form.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 relative pt-20 overflow-hidden">
      <ContactHero />

      <section className="py-20 bg-slate-50 relative z-10">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] xl:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-start">
            {/* Contact Details */}
            <ContactInfo />

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>
      <MultipleLocations />
      <HowToReach />
      <SocialMediaLinks />
    </main>
  );
}
