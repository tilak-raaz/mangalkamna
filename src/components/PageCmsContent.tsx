import type { PageRecord } from "@/lib/pageData";

export default function PageCmsContent({
  page,
  title = "Page Content",
}: {
  page: PageRecord | null;
  title?: string;
}) {
  if (!page?.content) {
    return null;
  }

  return (
    <section className="py-10 md:py-14 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-1.5 w-10 rounded-full bg-[#cb1b1a]" />
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#cb1b1a]">
            {title}
          </h2>
        </div>

        <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-[#cb1b1a] prose-blockquote:border-l-[#cb1b1a] prose-img:rounded-3xl">
          <div dangerouslySetInnerHTML={{ __html: page.content }} />
        </div>
      </div>
    </section>
  );
}
