import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Locale } from "@/i18n";
import { BlogPostWithMeta, BlogFrontmatter } from "./types";

const BLOG_CONTENT_PATH = path.join(process.cwd(), "src/content/blog");

function calculateReadingTime(content: string): { minutes: number; words: number } {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return { minutes, words };
}

export function getBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_CONTENT_PATH)) return [];
  return fs.readdirSync(BLOG_CONTENT_PATH).filter((name) => {
    const fullPath = path.join(BLOG_CONTENT_PATH, name);
    return fs.statSync(fullPath).isDirectory();
  });
}

export function getBlogPost(slug: string, locale: Locale): BlogPostWithMeta | null {
  const filePath = path.join(BLOG_CONTENT_PATH, slug, `index.${locale}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const stats = calculateReadingTime(content);

  return {
    slug,
    locale,
    frontmatter: data as BlogFrontmatter,
    content,
    readingTime: stats.minutes,
    wordCount: stats.words,
  };
}

export function getAllBlogPosts(locale: Locale): BlogPostWithMeta[] {
  const slugs = getBlogSlugs();
  const posts = slugs
    .map((slug) => getBlogPost(slug, locale))
    .filter((post): post is BlogPostWithMeta => post !== null)
    .filter((post) => !post.frontmatter.draft)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );

  return posts;
}
