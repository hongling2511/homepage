export function PulseIndicator({ status = "online" }: { status?: "online" | "busy" | "offline" }) {
  const colors = {
    online: "bg-[var(--success)]",
    busy: "bg-yellow-500",
    offline: "bg-red-500",
  };

  return (
    <span className="relative flex h-3 w-3">
      <span
        className={`animate-ping absolute inline-flex h-full w-full rounded-full ${colors[status]} opacity-75`}
      />
      <span
        className={`relative inline-flex rounded-full h-3 w-3 ${colors[status]}`}
      />
    </span>
  );
}
