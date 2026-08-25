"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n";
import { BlogPostWithMeta } from "@/lib/blog/types";

interface BlogPreviewProps {
  posts: { zh: BlogPostWithMeta[]; en: BlogPostWithMeta[] };
}

export function BlogPreview({ posts }: BlogPreviewProps) {
  const { t, locale } = useLanguage();
  const localizedPosts = posts[locale];

  if (localizedPosts.length === 0) return null;

  return (
    <section id="blog" className="border-t border-[var(--border)] bg-[var(--surface-muted)] px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-[220px_1fr] md:gap-14">
          <div>
            <span className="font-mono text-xs tracking-[0.14em] text-[var(--accent)]">05 · WRITING</span>
            <h2 className="mt-4 font-serif text-3xl font-medium text-[var(--foreground)]">
              {locale === "zh" ? "把方法写到可以复用" : "Write methods so others can reuse them"}
            </h2>
            <Link href="/blog" className="mt-7 inline-flex min-h-10 items-center gap-2 text-sm font-medium text-[var(--accent)] transition-transform duration-200 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]">
              {t.blog.viewAllPosts}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="border-t border-[var(--border)]">
            {localizedPosts.slice(0, 3).map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group grid gap-4 border-b border-[var(--border)] py-7 sm:grid-cols-[50px_1fr_auto] sm:items-start sm:gap-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              >
                <span className="font-mono text-xs text-[var(--muted)]">{String(index + 1).padStart(2, "0")}</span>
                <span>
                  <span className="font-serif text-xl font-medium leading-snug text-[var(--foreground)] transition-colors duration-200 group-hover:text-[var(--accent)]">
                    {post.frontmatter.title}
                  </span>
                  <span className="mt-2 line-clamp-2 block text-sm leading-6 text-[var(--muted)]">{post.frontmatter.excerpt}</span>
                </span>
                <span className="font-mono text-xs text-[var(--muted)] sm:text-right">
                  {new Date(post.frontmatter.date).toLocaleDateString(locale === "zh" ? "zh-CN" : "en-US")}
                  <span className="mt-1 block">{post.readingTime} {t.blog.minutesRead}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
