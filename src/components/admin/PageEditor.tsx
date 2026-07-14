"use client";

import { useEffect, useState } from "react";
import type { ChangeEvent, ReactNode } from "react";
import Link from "next/link";
import {
  Bold,
  Code2,
  Eye,
  FileText,
  Heading1,
  Heading2,
  Heading3,
  Italic,
  Link2,
  List,
  ListOrdered,
  Plus,
  Quote,
  Save,
  Trash2,
  X,
} from "lucide-react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import LinkExtension from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";

import { ProtectedRoute } from "@/components/admin/ProtectedRoute";
import { AdminSidebar } from "@/components/admin/AdminSidebar";

export interface PageRecord {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImageUrl: string;
  metaTitle: string;
  metaDescription: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

interface PageFormState {
  title: string;
  slug: string;
  excerpt: string;
  coverImageUrl: string;
  metaTitle: string;
  metaDescription: string;
  isPublished: boolean;
}

const emptyForm: PageFormState = {
  title: "",
  slug: "",
  excerpt: "",
  coverImageUrl: "",
  metaTitle: "",
  metaDescription: "",
  isPublished: true,
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getReadableDate(value: string) {
  return new Date(value).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function PageEditor() {
  const [pages, setPages] = useState<PageRecord[]>([]);
  const [formData, setFormData] = useState<PageFormState>(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
      }),
      LinkExtension.configure({
        openOnClick: false,
        autolink: true,
        linkOnPaste: true,
      }),
      Placeholder.configure({
        placeholder: "Write your page content here...",
      }),
    ],
    content: "<p></p>",
  });

  const isEditing = editingId !== null;
  const currentPage = pages.find((page) => page.id === editingId) || null;

  const loadPages = async () => {
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/pages", { cache: "no-store" });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to load pages.");
      }

      setPages(data.pages || []);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to load pages.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void loadPages();
  }, []);

  useEffect(() => {
    if (!editor) {
      return;
    }

    if (currentPage) {
      setFormData({
        title: currentPage.title,
        slug: currentPage.slug,
        excerpt: currentPage.excerpt,
        coverImageUrl: currentPage.coverImageUrl,
        metaTitle: currentPage.metaTitle,
        metaDescription: currentPage.metaDescription,
        isPublished: currentPage.isPublished,
      });
      editor.commands.setContent(currentPage.content || "<p></p>");
      return;
    }

    editor.commands.setContent("<p></p>");
  }, [currentPage, editor]);

  const resetForm = () => {
    setFormData(emptyForm);
    setEditingId(null);
    setError("");

    if (editor) {
      editor.commands.setContent("<p></p>");
    }
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const target = event.currentTarget;
    const { name, value } = target;
    const checked =
      target instanceof HTMLInputElement && target.type === "checkbox"
        ? target.checked
        : false;

    setFormData((current) => {
      const next = {
        ...current,
        [name]:
          target instanceof HTMLInputElement && target.type === "checkbox"
            ? checked
            : value,
      } as PageFormState;

      if (name === "title" && !editingId && !current.slug) {
        next.slug = slugify(value);
      }

      return next;
    });
  };

  const handleGenerateSlug = () => {
    setFormData((current) => ({
      ...current,
      slug: slugify(current.title),
    }));
  };

  const handleEditPage = (page: PageRecord) => {
    setEditingId(page.id);
    setError("");

    if (editor) {
      editor.commands.setContent(page.content || "<p></p>");
    }
  };

  const handleCancel = () => {
    resetForm();
  };

  const handleDeletePage = async (id: string) => {
    if (!confirm("Delete this page?")) {
      return;
    }

    setError("");

    try {
      const response = await fetch("/api/pages", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to delete page.");
      }

      setPages((current) => current.filter((page) => page.id !== id));

      if (editingId === id) {
        resetForm();
      }
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to delete page.";
      setError(message);
    }
  };

  const applyLink = () => {
    const previousUrl = editor?.getAttributes("link").href || "";
    const url = window.prompt("Enter link URL", previousUrl);

    if (!editor || url === null) {
      return;
    }

    if (!url) {
      editor.chain().focus().unsetLink().run();
      return;
    }

    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };

  const handleSubmit = async () => {
    if (!editor) {
      return;
    }

    const content = editor.getHTML();
    const resolvedSlug = slugify(formData.slug || formData.title);

    if (!formData.title || !resolvedSlug || !content || content === "<p></p>") {
      setError("Title, slug, and page content are required.");
      return;
    }

    setIsSaving(true);
    setError("");

    try {
      const response = await fetch("/api/pages", {
        method: editingId ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: editingId,
          title: formData.title,
          slug: resolvedSlug,
          excerpt: formData.excerpt,
          content,
          coverImageUrl: formData.coverImageUrl,
          metaTitle: formData.metaTitle,
          metaDescription: formData.metaDescription,
          isPublished: formData.isPublished,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to save page.");
      }

      if (editingId) {
        setPages((current) =>
          current.map((page) => (page.id === editingId ? data.page : page)),
        );
      } else {
        setPages((current) => [data.page, ...current]);
      }

      resetForm();
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to save page.";
      setError(message);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <ProtectedRoute>
      <div className="flex min-h-screen bg-slate-50">
        <AdminSidebar />

        <main className="flex-1 ml-0 md:ml-64">
          <div className="p-4 md:p-8 min-h-screen">
            <div className="mb-8 mt-12 md:mt-0 pb-6 border-b border-slate-200 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-[#cb1b1a] mb-3">
                  <FileText className="w-4 h-4" />
                  Pages CMS
                </p>
                <h1 className="text-4xl font-bold text-slate-900">
                  Manage Pages
                </h1>
                <p className="text-slate-600 mt-2 max-w-2xl">
                  Create and edit custom site pages with a WordPress-style rich
                  text editor.
                </p>
              </div>

              <button
                onClick={resetForm}
                className="inline-flex items-center justify-center gap-2 bg-[#cb1b1a] text-white px-5 py-3 rounded-xl font-semibold hover:bg-[#a51615] transition-colors shadow-lg shadow-[#cb1b1a]/20"
              >
                <Plus className="w-5 h-5" />
                New Page
              </button>
            </div>

            {error ? (
              <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                {error}
              </div>
            ) : null}

            <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_0.8fr] gap-8">
              <section className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">
                      Page Library
                    </h2>
                    <p className="text-sm text-slate-500">
                      {pages.length} total page{pages.length === 1 ? "" : "s"}
                    </p>
                  </div>
                  <button
                    onClick={() => void loadPages()}
                    className="text-sm font-semibold text-[#cb1b1a] hover:text-[#a51615]"
                  >
                    Refresh
                  </button>
                </div>

                <div className="divide-y divide-slate-100">
                  {isLoading ? (
                    <div className="p-10 text-center text-slate-500">
                      Loading pages...
                    </div>
                  ) : pages.length === 0 ? (
                    <div className="p-10 text-center text-slate-500">
                      No pages created yet.
                    </div>
                  ) : (
                    pages.map((page) => (
                      <article
                        key={page.id}
                        className="p-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between hover:bg-slate-50 transition-colors"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center gap-3 flex-wrap">
                            <h3 className="text-lg font-bold text-slate-900">
                              {page.title}
                            </h3>
                            <span
                              className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-wide ${page.isPublished ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}
                            >
                              {page.isPublished ? "Published" : "Draft"}
                            </span>
                          </div>
                          <p className="text-sm text-slate-500">
                            /pages/{page.slug} · Updated{" "}
                            {getReadableDate(page.updatedAt)}
                          </p>
                          <p className="text-sm text-slate-600 max-w-2xl line-clamp-2">
                            {page.excerpt || "No excerpt provided."}
                          </p>
                        </div>

                        <div className="flex items-center gap-2 flex-wrap">
                          <Link
                            href={`/pages/${page.slug}`}
                            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-slate-300 hover:bg-slate-100 transition-colors"
                          >
                            <Eye className="w-4 h-4" />
                            View
                          </Link>
                          <button
                            onClick={() => handleEditPage(page)}
                            className="inline-flex items-center gap-2 rounded-xl border border-[#cb1b1a]/20 bg-[#cb1b1a]/5 px-4 py-2 text-sm font-semibold text-[#cb1b1a] hover:bg-[#cb1b1a]/10 transition-colors"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeletePage(page.id)}
                            className="inline-flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-100 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                            Delete
                          </button>
                        </div>
                      </article>
                    ))
                  )}
                </div>
              </section>

              <section className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">
                      {isEditing ? "Edit Page" : "Add New Page"}
                    </h2>
                    <p className="text-sm text-slate-500">
                      {isEditing
                        ? "Update content and publish settings."
                        : "Fill out the form and publish a new page."}
                    </p>
                  </div>
                  {isEditing ? (
                    <button
                      onClick={handleCancel}
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
                    >
                      <X className="w-4 h-4" />
                      Cancel
                    </button>
                  ) : null}
                </div>

                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-1 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Page Title *
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        placeholder="Patient Information"
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#cb1b1a]"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <label className="block text-sm font-semibold text-slate-700">
                          Page Slug *
                        </label>
                        <button
                          type="button"
                          onClick={handleGenerateSlug}
                          className="text-xs font-semibold text-[#cb1b1a] hover:text-[#a51615]"
                        >
                          Generate from title
                        </button>
                      </div>
                      <input
                        type="text"
                        name="slug"
                        value={formData.slug}
                        onChange={handleInputChange}
                        placeholder="patient-information"
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#cb1b1a]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Excerpt
                      </label>
                      <textarea
                        name="excerpt"
                        value={formData.excerpt}
                        onChange={handleInputChange}
                        rows={3}
                        placeholder="A short summary shown in listings and search previews."
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#cb1b1a]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Cover Image URL
                      </label>
                      <input
                        type="text"
                        name="coverImageUrl"
                        value={formData.coverImageUrl}
                        onChange={handleInputChange}
                        placeholder="https://example.com/page-cover.jpg"
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#cb1b1a]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Meta Title
                      </label>
                      <input
                        type="text"
                        name="metaTitle"
                        value={formData.metaTitle}
                        onChange={handleInputChange}
                        placeholder="Patient Information | Mangalkamna Hospital"
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#cb1b1a]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Meta Description
                      </label>
                      <textarea
                        name="metaDescription"
                        value={formData.metaDescription}
                        onChange={handleInputChange}
                        rows={3}
                        placeholder="SEO description for search engines and previews."
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#cb1b1a]"
                      />
                    </div>

                    <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                      <input
                        type="checkbox"
                        name="isPublished"
                        checked={formData.isPublished}
                        onChange={handleInputChange}
                        className="h-4 w-4 rounded border-slate-300 text-[#cb1b1a] focus:ring-[#cb1b1a]"
                      />
                      <span className="text-sm font-semibold text-slate-700">
                        Publish page immediately
                      </span>
                    </label>
                  </div>

                  <div>
                    <div className="mb-3 flex flex-wrap gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-3">
                      <ToolbarButton
                        label="Bold"
                        active={Boolean(editor?.isActive("bold"))}
                        onClick={() =>
                          editor?.chain().focus().toggleBold().run()
                        }
                      >
                        <Bold className="w-4 h-4" />
                      </ToolbarButton>
                      <ToolbarButton
                        label="Italic"
                        active={Boolean(editor?.isActive("italic"))}
                        onClick={() =>
                          editor?.chain().focus().toggleItalic().run()
                        }
                      >
                        <Italic className="w-4 h-4" />
                      </ToolbarButton>
                      <ToolbarButton
                        label="H1"
                        active={Boolean(
                          editor?.isActive("heading", { level: 1 }),
                        )}
                        onClick={() =>
                          editor
                            ?.chain()
                            .focus()
                            .toggleHeading({ level: 1 })
                            .run()
                        }
                      >
                        <Heading1 className="w-4 h-4" />
                      </ToolbarButton>
                      <ToolbarButton
                        label="H2"
                        active={Boolean(
                          editor?.isActive("heading", { level: 2 }),
                        )}
                        onClick={() =>
                          editor
                            ?.chain()
                            .focus()
                            .toggleHeading({ level: 2 })
                            .run()
                        }
                      >
                        <Heading2 className="w-4 h-4" />
                      </ToolbarButton>
                      <ToolbarButton
                        label="H3"
                        active={Boolean(
                          editor?.isActive("heading", { level: 3 }),
                        )}
                        onClick={() =>
                          editor
                            ?.chain()
                            .focus()
                            .toggleHeading({ level: 3 })
                            .run()
                        }
                      >
                        <Heading3 className="w-4 h-4" />
                      </ToolbarButton>
                      <ToolbarButton
                        label="Bulleted list"
                        active={Boolean(editor?.isActive("bulletList"))}
                        onClick={() =>
                          editor?.chain().focus().toggleBulletList().run()
                        }
                      >
                        <List className="w-4 h-4" />
                      </ToolbarButton>
                      <ToolbarButton
                        label="Numbered list"
                        active={Boolean(editor?.isActive("orderedList"))}
                        onClick={() =>
                          editor?.chain().focus().toggleOrderedList().run()
                        }
                      >
                        <ListOrdered className="w-4 h-4" />
                      </ToolbarButton>
                      <ToolbarButton
                        label="Quote"
                        active={Boolean(editor?.isActive("blockquote"))}
                        onClick={() =>
                          editor?.chain().focus().toggleBlockquote().run()
                        }
                      >
                        <Quote className="w-4 h-4" />
                      </ToolbarButton>
                      <ToolbarButton
                        label="Inline code"
                        active={Boolean(editor?.isActive("code"))}
                        onClick={() =>
                          editor?.chain().focus().toggleCode().run()
                        }
                      >
                        <Code2 className="w-4 h-4" />
                      </ToolbarButton>
                      <ToolbarButton label="Link" onClick={applyLink}>
                        <Link2 className="w-4 h-4" />
                      </ToolbarButton>
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-white p-4 min-h-90 prose prose-slate max-w-none prose-headings:font-bold prose-a:text-[#cb1b1a] prose-blockquote:border-l-[#cb1b1a] prose-blockquote:text-slate-600">
                      <EditorContent editor={editor} />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                    <button
                      onClick={handleSubmit}
                      disabled={isSaving}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#cb1b1a] px-6 py-3 font-semibold text-white hover:bg-[#a51615] disabled:cursor-not-allowed disabled:opacity-60 transition-colors"
                    >
                      <Save className="w-5 h-5" />
                      {isSaving
                        ? "Saving..."
                        : isEditing
                          ? "Update Page"
                          : "Save Page"}
                    </button>

                    {currentPage ? (
                      <Link
                        href={`/pages/${currentPage.slug}`}
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
                      >
                        <Eye className="w-5 h-5" />
                        Preview Public Page
                      </Link>
                    ) : null}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}

function ToolbarButton({
  children,
  label,
  onClick,
  active = false,
}: {
  children: ReactNode;
  label: string;
  onClick: () => void;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border text-slate-700 transition-colors ${active ? "border-[#cb1b1a] bg-white text-[#cb1b1a] shadow-sm" : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"}`}
    >
      {children}
    </button>
  );
}
