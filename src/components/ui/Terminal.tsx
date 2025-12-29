import { ReactNode } from "react";

interface TerminalProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Terminal({ title = "terminal", children, className = "" }: TerminalProps) {
  return (
    <div className={`rounded-lg border border-[var(--border)] bg-[var(--card)] overflow-hidden ${className}`}>
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[var(--card)] border-b border-[var(--border)]">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-sm text-[var(--muted)] ml-2">{title}</span>
      </div>
      {/* Terminal content */}
      <div className="p-4">
        {children}
      </div>
    </div>
  );
}
