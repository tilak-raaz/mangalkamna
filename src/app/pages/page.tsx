import Link from "next/link";
import { ArrowRight, FileText, Sparkles } from "lucide-react";
import { listPublishedPages } from "@/lib/pageData";

export const metadata = {
  title: "Pages | Mangalkamna Hospital",
  description:
    "Browse custom pages published by the Mangalkamna Hospital admin team.",
};

export default async function PagesIndexPage() {
  const pages = await listPublishedPages();

  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-slate-900 px-6 py-14 sm:px-10 shadow-2xl shadow-slate-200/40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(203,27,26,0.35),_transparent_38%),radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.08),_transparent_40%)]" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-white/80 mb-5">
              <Sparkles className="w-4 h-4 text-[#ff7a78]" />
              Custom Pages
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
              Hospital pages published from the admin panel.
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl">
              Every page added in the CMS is available here with its own slug,
              SEO metadata, and rich text content.
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {pages.length === 0 ? (
            <div className="col-span-full rounded-3xl border border-slate-200 bg-white p-12 text-center">
              <FileText className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                No published pages yet
              </h2>
              <p className="text-slate-600">
                Publish a page from the admin panel and it will appear here.
              </p>
            </div>
          ) : (
            pages.map((page) => (
              <Link
                key={page.id}
                href={`/pages/${page.slug}`}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)]"
              >
                <div className="mb-4 inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#cb1b1a]">
                  Published Page
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#cb1b1a] transition-colors">
                  {page.title}
                </h2>
                <p className="text-sm text-slate-500 mb-5">/{page.slug}</p>
                <p className="text-slate-600 line-clamp-3 mb-6">
                  {page.excerpt || "Read the full page content."}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-[#cb1b1a]">
                  Read page
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))
          )}
        </div>
      </section>
    </main>
  );
}
