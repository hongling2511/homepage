import { Locale } from "@/i18n";

export interface BlogFrontmatter {
  title: string;
  date: string;
  excerpt: string;
  category: BlogCategory;
  tags: string[];
  coverImage?: string;
  draft?: boolean;
}

export interface BlogPost {
  slug: string;
  locale: Locale;
  frontmatter: BlogFrontmatter;
  content: string;
}

export interface BlogPostWithMeta extends BlogPost {
  readingTime: number;
  wordCount: number;
}

export type BlogCategory =
  | "tech"
  | "architecture"
  | "career"
  | "life"
  | "tutorial";

export interface BlogListParams {
  locale: Locale;
  category?: BlogCategory;
  tag?: string;
  page?: number;
  pageSize?: number;
  searchQuery?: string;
}

export interface BlogListResult {
  posts: BlogPostWithMeta[];
  total: number;
  totalPages: number;
  currentPage: number;
}
