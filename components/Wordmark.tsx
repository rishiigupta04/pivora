/**
 * Wordmark. The dot is the ownership signal from the logo —
 * blue (Pivora) on paper, gold (client) on carbon.
 */
export default function Wordmark({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <span className="inline-flex items-baseline gap-2.5">
      <span
        aria-hidden
        className={`inline-block size-2.5 shrink-0 translate-y-[-0.05em] rounded-full ${
          dark ? "bg-gold" : "bg-blue"
        }`}
      />
      <span
        className={`text-[1.375rem] font-bold leading-none tracking-[-0.035em] ${
          dark ? "text-bone" : "text-ink"
        }`}
      >
        pivora
      </span>
      <span
        className={`ev text-[0.5625rem] leading-none ${
          dark ? "text-bone-2" : "text-ink-2"
        }`}
      >
        Consulting
      </span>
    </span>
  );
}
