"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { BlogPostWithMeta } from "@/lib/blog/types";
import { useLanguage } from "@/i18n";

interface BlogCardProps {
  post: BlogPostWithMeta;
  index?: number;
}

export function BlogCard({ post, index = 0 }: BlogCardProps) {
  const { t, locale } = useLanguage();
  const categoryLabel = t.blog.categories[post.frontmatter.category];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group p-6 rounded-lg border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)] transition-colors"
    >
      <Link href={`/blog/${post.slug}`}>
        {/* Category badge */}
        <span className="inline-block px-2 py-1 text-xs rounded bg-[var(--accent)]/10 text-[var(--accent)] mb-3">
          {categoryLabel}
        </span>

        {/* Title */}
        <h3 className="text-lg font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors mb-2">
          {post.frontmatter.title}
        </h3>

        {/* Meta info */}
        <div className="flex items-center gap-4 text-sm text-[var(--muted)] mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {new Date(post.frontmatter.date).toLocaleDateString(
              locale === "zh" ? "zh-CN" : "en-US"
            )}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.readingTime}{" "}
            {post.readingTime === 1 ? t.blog.minuteRead : t.blog.minutesRead}
          </span>
        </div>

        {/* Excerpt */}
        <p className="text-sm text-[var(--muted)] mb-4 line-clamp-2">
          {post.frontmatter.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.frontmatter.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded bg-[var(--background)] text-[var(--muted)]"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Read more */}
        <span className="inline-flex items-center gap-1 text-sm text-[var(--accent)] group-hover:gap-2 transition-all">
          {t.blog.readMore}
          <ArrowRight className="w-4 h-4" />
        </span>
      </Link>
    </motion.article>
  );
}
