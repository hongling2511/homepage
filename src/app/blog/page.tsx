import { Metadata } from "next";
import { BlogListClient } from "@/components/blog/BlogListClient";
import { getAllCategories, getAllTags, getBlogList } from "@/lib/blog/api";

export const metadata: Metadata = {
  title: "博客 | Blog",
  description: "技术博客与思考 | Tech Blog & Thoughts",
};

export default async function BlogPage() {
  const zhResult = getBlogList({ locale: "zh" });
  const enResult = getBlogList({ locale: "en" });

  const categories = getAllCategories();
  const zhTags = getAllTags("zh");
  const enTags = getAllTags("en");

  return (
    <BlogListClient
      initialData={{
        zh: { posts: zhResult.posts, tags: zhTags },
        en: { posts: enResult.posts, tags: enTags },
      }}
      categories={categories}
    />
  );
}
