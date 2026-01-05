"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n";
import { BlogPostWithMeta } from "@/lib/blog/types";
import { BlogCard } from "@/components/blog/BlogCard";

interface BlogPreviewProps {
  posts: {
    zh: BlogPostWithMeta[];
    en: BlogPostWithMeta[];
  };
}

export function BlogPreview({ posts }: BlogPreviewProps) {
  const { t, locale } = useLanguage();
  const localizedPosts = posts[locale];

  if (localizedPosts.length === 0) {
    return null;
  }

  return (
    <section id="blog" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section title */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <span className="text-[var(--success)]">$</span>
              <h2 className="text-2xl font-bold text-[var(--foreground)]">
                {t.blog.title}
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-[var(--accent)] hover:gap-3 transition-all"
            >
              {t.blog.viewAllPosts}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Latest posts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {localizedPosts.slice(0, 3).map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
