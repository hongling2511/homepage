import { ComponentProps, ReactNode, ReactElement } from "react";
import Link from "next/link";
import { Mermaid } from "./Mermaid";

// Helper to extract text content from React children
function getTextContent(children: ReactNode): string {
  if (typeof children === "string") return children;
  if (typeof children === "number") return String(children);
  if (Array.isArray(children)) return children.map(getTextContent).join("");
  if (children && typeof children === "object" && "props" in children) {
    const element = children as ReactElement<{ children?: ReactNode }>;
    return getTextContent(element.props.children);
  }
  return "";
}

export const mdxComponents = {
  h1: (props: ComponentProps<"h1">) => (
    <h1
      className="text-3xl font-bold mt-8 mb-4 text-[var(--foreground)]"
      {...props}
    />
  ),
  h2: (props: ComponentProps<"h2">) => (
    <h2
      className="text-2xl font-bold mt-8 mb-4 text-[var(--foreground)]"
      {...props}
    />
  ),
  h3: (props: ComponentProps<"h3">) => (
    <h3
      className="text-xl font-semibold mt-6 mb-3 text-[var(--foreground)]"
      {...props}
    />
  ),
  h4: (props: ComponentProps<"h4">) => (
    <h4
      className="text-lg font-semibold mt-4 mb-2 text-[var(--foreground)]"
      {...props}
    />
  ),
  p: (props: ComponentProps<"p">) => (
    <p className="mb-4 leading-relaxed text-[var(--muted)]" {...props} />
  ),
  a: ({ href, ...props }: ComponentProps<"a">) => {
    const isExternal = href?.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--accent)] hover:underline"
          {...props}
        />
      );
    }
    return (
      <Link
        href={href || "#"}
        className="text-[var(--accent)] hover:underline"
        {...props}
      />
    );
  },
  pre: ({ children, ...props }: ComponentProps<"pre">) => {
    // Check if this is a mermaid code block
    if (children && typeof children === "object" && "props" in children) {
      const codeElement = children as ReactElement<{
        className?: string;
        children?: ReactNode;
      }>;
      if (codeElement.props?.className?.includes("language-mermaid")) {
        const chartContent = getTextContent(codeElement.props.children);
        return <Mermaid chart={chartContent.trim()} />;
      }
    }

    return (
      <pre
        className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 overflow-x-auto my-4 text-sm"
        {...props}
      >
        {children}
      </pre>
    );
  },
  code: (props: ComponentProps<"code">) => {
    const isInline = !props.className?.includes("language-");
    if (isInline) {
      return (
        <code
          className="px-1.5 py-0.5 rounded bg-[var(--card)] text-[var(--accent)] text-sm"
          {...props}
        />
      );
    }
    return <code {...props} />;
  },
  ul: (props: ComponentProps<"ul">) => (
    <ul
      className="list-disc list-inside mb-4 space-y-2 text-[var(--muted)]"
      {...props}
    />
  ),
  ol: (props: ComponentProps<"ol">) => (
    <ol
      className="list-decimal list-inside mb-4 space-y-2 text-[var(--muted)]"
      {...props}
    />
  ),
  li: (props: ComponentProps<"li">) => (
    <li className="leading-relaxed" {...props} />
  ),
  blockquote: (props: ComponentProps<"blockquote">) => (
    <blockquote
      className="border-l-4 border-[var(--accent)] pl-4 my-4 italic text-[var(--muted)]"
      {...props}
    />
  ),
  hr: () => <hr className="border-[var(--border)] my-8" />,
  table: (props: ComponentProps<"table">) => (
    <div className="overflow-x-auto my-4">
      <table
        className="w-full border-collapse border border-[var(--border)]"
        {...props}
      />
    </div>
  ),
  th: (props: ComponentProps<"th">) => (
    <th
      className="border border-[var(--border)] px-4 py-2 bg-[var(--card)] text-left"
      {...props}
    />
  ),
  td: (props: ComponentProps<"td">) => (
    <td className="border border-[var(--border)] px-4 py-2" {...props} />
  ),
  strong: (props: ComponentProps<"strong">) => (
    <strong className="font-semibold text-[var(--foreground)]" {...props} />
  ),
  em: (props: ComponentProps<"em">) => (
    <em className="italic" {...props} />
  ),
};
