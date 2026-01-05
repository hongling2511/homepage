"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/i18n";
import { BlogPostWithMeta } from "@/lib/blog/types";
import { Terminal } from "@/components/ui/Terminal";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useEffect, useState } from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { mdxComponents } from "./MDXComponents";
import remarkGfm from "remark-gfm";

interface BlogDetailPageProps {
  posts: {
    zh: BlogPostWithMeta | null;
    en: BlogPostWithMeta | null;
  };
}

export function BlogDetailPage({ posts }: BlogDetailPageProps) {
  const { t, locale } = useLanguage();
  const [compiledContent, setCompiledContent] =
    useState<MDXRemoteSerializeResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const post = posts[locale];
  const displayPost = post || posts[locale === "zh" ? "en" : "zh"];

  useEffect(() => {
    async function compileContent() {
      if (!displayPost) return;

      setIsLoading(true);
      try {
        const result = await serialize(displayPost.content, {
          mdxOptions: {
            remarkPlugins: [remarkGfm],
          },
        });
        setCompiledContent(result);
      } catch (error) {
        console.error("Failed to compile MDX:", error);
      } finally {
        setIsLoading(false);
      }
    }

    compileContent();
  }, [displayPost]);

  if (!displayPost) {
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
                    {readingTime === 1 ? t.blog.minuteRead : t.blog.minutesRead}
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
              {isLoading ? (
                <div className="flex items-center justify-center py-12">
                  <div className="animate-pulse text-[var(--muted)]">
                    Loading...
                  </div>
                </div>
              ) : compiledContent ? (
                <MDXRemote {...compiledContent} components={mdxComponents} />
              ) : (
                <div className="text-[var(--muted)]">
                  Failed to load content
                </div>
              )}
            </div>
          </motion.div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
