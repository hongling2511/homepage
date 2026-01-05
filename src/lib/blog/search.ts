import Fuse from "fuse.js";
import { BlogPostWithMeta } from "./types";
import { Locale } from "@/i18n";
import { getAllBlogPosts } from "./parser";

const fuseInstances: Partial<Record<Locale, Fuse<BlogPostWithMeta>>> = {};

export function getSearchInstance(locale: Locale): Fuse<BlogPostWithMeta> {
  if (!fuseInstances[locale]) {
    const posts = getAllBlogPosts(locale);
    fuseInstances[locale] = new Fuse(posts, {
      keys: [
        { name: "frontmatter.title", weight: 0.4 },
        { name: "frontmatter.excerpt", weight: 0.3 },
        { name: "frontmatter.tags", weight: 0.2 },
        { name: "content", weight: 0.1 },
      ],
      threshold: 0.3,
      includeScore: true,
      minMatchCharLength: 2,
    });
  }
  return fuseInstances[locale]!;
}

export function searchBlogPosts(
  query: string,
  locale: Locale
): BlogPostWithMeta[] {
  if (!query.trim()) return [];
  const fuse = getSearchInstance(locale);
  return fuse.search(query).map((result) => result.item);
}
