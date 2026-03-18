import TestimonialsHero from "@/components/testimonials/TestimonialsHero";
import WrittenTestimonials from "@/components/testimonials/WrittenTestimonials";
import VideoTestimonials from "@/components/testimonials/VideoTestimonials";
import RatingsSummary from "@/components/testimonials/RatingsSummary";

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-slate-50 relative pt-20 overflow-hidden">
      <TestimonialsHero />
      <WrittenTestimonials />
      <VideoTestimonials />
      <RatingsSummary />
    </main>
  );
}
