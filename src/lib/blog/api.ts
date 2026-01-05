import { Locale } from "@/i18n";
import {
  BlogListParams,
  BlogListResult,
  BlogPostWithMeta,
  BlogCategory,
} from "./types";
import { getAllBlogPosts, getBlogPost, getBlogSlugs } from "./parser";

const DEFAULT_PAGE_SIZE = 10;

export function getBlogList(params: BlogListParams): BlogListResult {
  const {
    locale,
    category,
    tag,
    page = 1,
    pageSize = DEFAULT_PAGE_SIZE,
    searchQuery,
  } = params;

  let posts = getAllBlogPosts(locale);

  // Filter by category
  if (category) {
    posts = posts.filter((p) => p.frontmatter.category === category);
  }

  // Filter by tag
  if (tag) {
    posts = posts.filter((p) => p.frontmatter.tags.includes(tag));
  }

  // Simple search
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    posts = posts.filter(
      (p) =>
        p.frontmatter.title.toLowerCase().includes(query) ||
        p.frontmatter.excerpt.toLowerCase().includes(query) ||
        p.content.toLowerCase().includes(query)
    );
  }

  const total = posts.length;
  const totalPages = Math.ceil(total / pageSize);
  const start = (page - 1) * pageSize;
  const paginatedPosts = posts.slice(start, start + pageSize);

  return {
    posts: paginatedPosts,
    total,
    totalPages,
    currentPage: page,
  };
}

export function getLatestPosts(
  locale: Locale,
  count: number = 3
): BlogPostWithMeta[] {
  return getAllBlogPosts(locale).slice(0, count);
}

export function getBlogPostBySlug(
  slug: string,
  locale: Locale
): BlogPostWithMeta | null {
  return getBlogPost(slug, locale);
}

export function getAllCategories(): BlogCategory[] {
  return ["tech", "architecture", "career", "life", "tutorial"];
}

export function getAllTags(locale: Locale): string[] {
  const posts = getAllBlogPosts(locale);
  const tagsSet = new Set<string>();
  posts.forEach((p) => p.frontmatter.tags.forEach((t) => tagsSet.add(t)));
  return Array.from(tagsSet).sort();
}

export { getBlogSlugs };
