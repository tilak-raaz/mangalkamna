import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock3 } from "lucide-react";

import { getPageBySlug, listPublishedPages } from "@/lib/pageData";

export async function generateStaticParams() {
  const pages = await listPublishedPages();

  return pages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const page = await getPageBySlug(params.slug);

  if (!page || !page.isPublished) {
    return {
      title: "Page not found | Mangalkamna Hospital",
    };
  }

  return {
    title: page.metaTitle || page.title,
    description: page.metaDescription || page.excerpt,
  };
}

export default async function PublicPage({
  params,
}: {
  params: { slug: string };
}) {
  const page = await getPageBySlug(params.slug);

  if (!page || !page.isPublished) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-20">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/pages"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-[#cb1b1a] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Pages
        </Link>

        <article className="overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
          <div className="relative bg-slate-900 px-6 py-14 sm:px-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(203,27,26,0.38),transparent_40%),linear-gradient(135deg,rgba(255,255,255,0.05),transparent_45%)]" />
            <div className="relative z-10 max-w-3xl">
              <div className="flex flex-wrap items-center gap-3 mb-6 text-white/80 text-sm font-medium">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5">
                  <Clock3 className="w-4 h-4" />
                  Recently updated
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5">
                  <CalendarDays className="w-4 h-4" />
                  {new Date(page.updatedAt).toLocaleDateString()}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
                {page.title}
              </h1>

              <p className="text-lg text-slate-300 max-w-2xl">
                {page.excerpt ||
                  page.metaDescription ||
                  "Hospital content page"}
              </p>
            </div>
          </div>

          {page.coverImageUrl ? (
            <div className="relative aspect-21/9 w-full bg-slate-100">
              <Image
                src={page.coverImageUrl}
                alt={page.title}
                fill
                className="object-cover"
              />
            </div>
          ) : null}

          <div className="px-6 py-10 sm:px-10 lg:px-14">
            <div
              className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-[#cb1b1a] prose-blockquote:border-l-[#cb1b1a] prose-img:rounded-3xl"
              dangerouslySetInnerHTML={{ __html: page.content }}
            />
          </div>
        </article>
      </section>
    </main>
  );
}
