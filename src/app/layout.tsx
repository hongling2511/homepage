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
  title: "洪灵 | 资深服务端研发工程师",
  description: "10+ 年 Java 分布式系统研发&架构经验，擅长大型 SaaS 架构、云原生落地及团队技术治理。",
  keywords: ["洪灵", "后端工程师", "架构师", "Java", "分布式系统", "跨境支付"],
  authors: [{ name: "洪灵" }],
  openGraph: {
    title: "洪灵 | 资深服务端研发工程师",
    description: "10+ 年 Java 分布式系统研发&架构经验",
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
      <body className={`${jetbrainsMono.variable} font-mono antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
