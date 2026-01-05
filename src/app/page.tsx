import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { getLatestPosts } from "@/lib/blog/api";

export default function Home() {
  const zhPosts = getLatestPosts("zh", 3);
  const enPosts = getLatestPosts("en", 3);

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <BlogPreview posts={{ zh: zhPosts, en: enPosts }} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
