"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/i18n";
import { BlogPostWithMeta } from "@/lib/blog/types";
import { mdxComponents } from "./MDXComponents";
import { Terminal } from "@/components/ui/Terminal";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

interface BlogDetailClientProps {
  posts: {
    zh: BlogPostWithMeta | null;
    en: BlogPostWithMeta | null;
  };
  compiledContent: {
    zh: MDXRemoteSerializeResult | null;
    en: MDXRemoteSerializeResult | null;
  };
}

export function BlogDetailClient({
  posts,
  compiledContent,
}: BlogDetailClientProps) {
  const { t, locale } = useLanguage();
  const post = posts[locale];
  const content = compiledContent[locale];

  // Fallback to other locale if current not available
  const displayPost = post || posts[locale === "zh" ? "en" : "zh"];
  const displayContent = content || compiledContent[locale === "zh" ? "en" : "zh"];

  if (!displayPost || !displayContent) {
    return null;
  }

  const { frontmatter, readingTime, slug } = displayPost;
  const categoryLabel = t.blog.categories[frontmatter.category];

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />
      <main className="pt-24 pb-20 px-4">
        <article className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--foreground)] mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {t.blog.backToBlog}
            </Link>

            {/* Article header */}
            <Terminal title={`~/blog/${slug}`} className="mb-8">
              <div className="space-y-4">
                {/* Category */}
                <span className="inline-block px-2 py-1 text-xs rounded bg-[var(--accent)]/10 text-[var(--accent)]">
                  {categoryLabel}
                </span>

                {/* Title */}
                <h1 className="text-2xl md:text-3xl font-bold text-[var(--foreground)]">
                  {frontmatter.title}
                </h1>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--muted)]">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {t.blog.publishedOn}{" "}
                    {new Date(frontmatter.date).toLocaleDateString(
                      locale === "zh" ? "zh-CN" : "en-US"
                    )}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {readingTime}{" "}
                    {readingTime === 1
                      ? t.blog.minuteRead
                      : t.blog.minutesRead}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {frontmatter.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded bg-[var(--background)] text-[var(--muted)]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </Terminal>

            {/* Article content */}
            <div className="prose prose-invert max-w-none">
              <MDXRemote {...displayContent} components={mdxComponents} />
            </div>
          </motion.div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
