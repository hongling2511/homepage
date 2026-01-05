"use client";

import { useState, useEffect, useCallback } from "react";
import { Search, X } from "lucide-react";
import { useLanguage } from "@/i18n";
import { useDebounce } from "@/hooks/useDebounce";

interface BlogSearchProps {
  onSearch: (query: string) => void;
  initialValue?: string;
}

export function BlogSearch({ onSearch, initialValue = "" }: BlogSearchProps) {
  const { t } = useLanguage();
  const [query, setQuery] = useState(initialValue);
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    onSearch(debouncedQuery);
  }, [debouncedQuery, onSearch]);

  const handleClear = useCallback(() => {
    setQuery("");
    onSearch("");
  }, [onSearch]);

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted)]" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={t.blog.searchPlaceholder}
        className="w-full pl-10 pr-10 py-2 rounded-lg border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
      />
      {query && (
        <button
          onClick={handleClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--muted)] hover:text-[var(--foreground)]"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
