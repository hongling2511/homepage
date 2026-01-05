import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getBlogSlugs } from "@/lib/blog/api";
import { BlogDetailPage } from "@/components/blog/BlogDetailPage";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug, "zh") || getBlogPostBySlug(slug, "en");

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.frontmatter.title}`,
    description: post.frontmatter.excerpt,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.excerpt,
      type: "article",
      publishedTime: post.frontmatter.date,
      tags: post.frontmatter.tags,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  const zhPost = getBlogPostBySlug(slug, "zh");
  const enPost = getBlogPostBySlug(slug, "en");

  if (!zhPost && !enPost) {
    notFound();
  }

  return (
    <BlogDetailPage
      posts={{
        zh: zhPost,
        en: enPost,
      }}
    />
  );
}
