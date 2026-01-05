"use client";

import { useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n";
import { BlogCategory, BlogPostWithMeta } from "@/lib/blog/types";
import { BlogCard } from "./BlogCard";
import { BlogSearch } from "./BlogSearch";
import { BlogFilters } from "./BlogFilters";
import { Terminal } from "@/components/ui/Terminal";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

interface BlogListClientProps {
  initialData: {
    zh: { posts: BlogPostWithMeta[]; tags: string[] };
    en: { posts: BlogPostWithMeta[]; tags: string[] };
  };
  categories: BlogCategory[];
}

export function BlogListClient({
  initialData,
  categories,
}: BlogListClientProps) {
  const { t, locale } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory>();
  const [selectedTag, setSelectedTag] = useState<string>();

  const { posts: initialPosts, tags } = initialData[locale];

  const filteredPosts = useMemo(() => {
    let result = initialPosts;

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.frontmatter.title.toLowerCase().includes(query) ||
          p.frontmatter.excerpt.toLowerCase().includes(query) ||
          p.frontmatter.tags.some((tag) =>
            tag.toLowerCase().includes(query)
          )
      );
    }

    // Category filter
    if (selectedCategory) {
      result = result.filter(
        (p) => p.frontmatter.category === selectedCategory
      );
    }

    // Tag filter
    if (selectedTag) {
      result = result.filter((p) => p.frontmatter.tags.includes(selectedTag));
    }

    return result;
  }, [initialPosts, searchQuery, selectedCategory, selectedTag]);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />
      <main className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Page header */}
            <Terminal title="~/blog" className="mb-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[var(--success)]">$</span>
                  <span className="text-[var(--foreground)]">
                    {t.blog.title}
                  </span>
                </div>
                <p className="text-[var(--muted)] pl-4">{t.blog.subtitle}</p>
              </div>
            </Terminal>

            {/* Search */}
            <div className="mb-6">
              <BlogSearch onSearch={handleSearch} />
            </div>

            {/* Filters */}
            <div className="mb-8">
              <BlogFilters
                categories={categories}
                tags={tags}
                selectedCategory={selectedCategory}
                selectedTag={selectedTag}
                onCategoryChange={setSelectedCategory}
                onTagChange={setSelectedTag}
              />
            </div>

            {/* Posts grid */}
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPosts.map((post, index) => (
                  <BlogCard key={post.slug} post={post} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-[var(--muted)]">{t.blog.noResults}</p>
              </div>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
