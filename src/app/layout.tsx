import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "洪灵 | AI 研发效能与金融系统技术负责人",
  description: "10 年 Java 分布式系统经验，将 Codex、Agent Skills、TDD、独立审查与 CI 门禁用于真实金融系统交付。",
  keywords: ["洪灵", "研发效能", "质量工程", "Codex", "金融支付", "Java", "分布式系统"],
  authors: [{ name: "洪灵" }],
  openGraph: {
    title: "洪灵 | AI 研发效能与金融系统技术负责人",
    description: "AI 研发效能、质量工程与金融支付架构",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={`${jetbrainsMono.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
