"use client";

import { BlogCategory } from "@/lib/blog/types";
import { useLanguage } from "@/i18n";

interface BlogFiltersProps {
  categories: BlogCategory[];
  tags: string[];
  selectedCategory?: BlogCategory;
  selectedTag?: string;
  onCategoryChange: (category?: BlogCategory) => void;
  onTagChange: (tag?: string) => void;
}

export function BlogFilters({
  categories,
  tags,
  selectedCategory,
  selectedTag,
  onCategoryChange,
  onTagChange,
}: BlogFiltersProps) {
  const { t } = useLanguage();

  return (
    <div className="space-y-4">
      {/* Categories */}
      <div>
        <h4 className="text-sm font-medium text-[var(--foreground)] mb-2">
          <span className="text-[var(--success)]">$</span> categories
        </h4>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onCategoryChange(undefined)}
            className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${
              !selectedCategory
                ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)]"
                : "border-[var(--border)] text-[var(--muted)] hover:border-[var(--accent)]"
            }`}
          >
            {t.blog.allCategories}
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${
                selectedCategory === cat
                  ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)]"
                  : "border-[var(--border)] text-[var(--muted)] hover:border-[var(--accent)]"
              }`}
            >
              {t.blog.categories[cat]}
            </button>
          ))}
        </div>
      </div>

      {/* Tags */}
      {tags.length > 0 && (
        <div>
          <h4 className="text-sm font-medium text-[var(--foreground)] mb-2">
            <span className="text-[var(--success)]">$</span> tags
          </h4>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onTagChange(undefined)}
              className={`px-2 py-1 text-xs rounded transition-colors ${
                !selectedTag
                  ? "bg-[var(--accent)]/10 text-[var(--accent)]"
                  : "bg-[var(--background)] text-[var(--muted)] hover:text-[var(--foreground)]"
              }`}
            >
              {t.blog.allTags}
            </button>
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => onTagChange(tag)}
                className={`px-2 py-1 text-xs rounded transition-colors ${
                  selectedTag === tag
                    ? "bg-[var(--accent)]/10 text-[var(--accent)]"
                    : "bg-[var(--background)] text-[var(--muted)] hover:text-[var(--foreground)]"
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
