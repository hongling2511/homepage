"use client";

import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

interface MermaidProps {
  chart: string;
}

// Theme configurations
const darkTheme = {
  theme: "dark" as const,
  themeVariables: {
    // General
    primaryColor: "#3b82f6",
    primaryTextColor: "#f8fafc",
    primaryBorderColor: "#3b82f6",
    lineColor: "#64748b",
    secondaryColor: "#1e293b",
    tertiaryColor: "#0f172a",
    background: "#0f172a",
    mainBkg: "#1e293b",
    nodeBorder: "#3b82f6",
    clusterBkg: "#1e293b",
    titleColor: "#f8fafc",
    edgeLabelBackground: "#1e293b",
    // Text
    textColor: "#f8fafc",
    // Flowchart
    nodeTextColor: "#f8fafc",
    // Mindmap specific
    nodeBkg: "#1e293b",
    // Pie chart
    pie1: "#3b82f6",
    pie2: "#8b5cf6",
    pie3: "#06b6d4",
    pie4: "#10b981",
    pie5: "#f59e0b",
    pieTextColor: "#f8fafc",
    pieSectionTextColor: "#f8fafc",
    pieLegendTextColor: "#f8fafc",
  },
};

const lightTheme = {
  theme: "base" as const,
  themeVariables: {
    // General
    primaryColor: "#3b82f6",
    primaryTextColor: "#0f172a",
    primaryBorderColor: "#3b82f6",
    lineColor: "#64748b",
    secondaryColor: "#dbeafe",
    tertiaryColor: "#eff6ff",
    background: "#ffffff",
    mainBkg: "#eff6ff",
    nodeBorder: "#3b82f6",
    clusterBkg: "#f1f5f9",
    titleColor: "#0f172a",
    edgeLabelBackground: "#ffffff",
    // Text - ensure dark text on light background
    textColor: "#0f172a",
    // Flowchart
    nodeTextColor: "#0f172a",
    // Mindmap specific - use blue tones for better visibility
    nodeBkg: "#dbeafe",
    // Pie chart
    pie1: "#3b82f6",
    pie2: "#8b5cf6",
    pie3: "#06b6d4",
    pie4: "#10b981",
    pie5: "#f59e0b",
    pieTextColor: "#0f172a",
    pieSectionTextColor: "#ffffff",
    pieLegendTextColor: "#0f172a",
  },
};

export function Mermaid({ chart }: MermaidProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isDark, setIsDark] = useState(true);

  // Detect theme changes
  useEffect(() => {
    const checkTheme = () => {
      const isDarkMode = document.documentElement.classList.contains("dark");
      setIsDark(isDarkMode);
    };

    // Initial check
    checkTheme();

    // Watch for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          checkTheme();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const renderChart = async () => {
      if (!containerRef.current || !chart) return;

      try {
        // Re-initialize mermaid with current theme
        const themeConfig = isDark ? darkTheme : lightTheme;
        mermaid.initialize({
          startOnLoad: false,
          ...themeConfig,
          fontFamily: "JetBrains Mono, monospace",
        });

        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
        const { svg } = await mermaid.render(id, chart);
        setSvg(svg);
        setError("");
      } catch (err) {
        console.error("Mermaid render error:", err);
        setError("Failed to render diagram");
      }
    };

    renderChart();
  }, [chart, isDark]);

  if (error) {
    return (
      <div className="my-4 p-4 rounded-lg border border-red-500/50 bg-red-500/10 text-red-400 text-sm">
        {error}
        <pre className="mt-2 text-xs overflow-x-auto">{chart}</pre>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="my-6 flex justify-center overflow-x-auto rounded-lg border border-[var(--border)] bg-[var(--card)] p-4"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
