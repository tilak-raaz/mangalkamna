import NewsHero from "@/components/news/NewsHero";
import BlogList from "@/components/news/BlogList";

export const metadata = {
  title: "News & Health Blog - Hospital Name",
  description:
    "Stay informed with expert health advice, the latest medical breakthroughs, hospital announcements, and practical wellness tips.",
};

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-slate-50 relative pt-20 overflow-hidden">
      <NewsHero />
      <BlogList />
    </main>
  );
}
