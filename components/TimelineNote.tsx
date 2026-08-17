/**
 * An info affordance on a timeline entry. Brief §19.1, engineering note.
 *
 * The requirement is "tooltip on desktop, tap-to-expand on mobile". Both are
 * the same behaviour with different input devices, and `<details>` gives
 * exactly that for free: click or tap or Enter, no JavaScript, keyboard
 * reachable, and it still renders as readable text if anything fails.
 *
 * A hover tooltip would have been the wrong call — the note it carries is
 * a factual clarification about a career step, not decoration, so it has to
 * survive a touch screen and a screen reader.
 */
export default function TimelineNote({
  note,
  tone = "light",
}: {
  note: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <details className="group/note mt-2.5 max-w-[42ch]">
      <summary
        className={`ev inline-flex cursor-pointer list-none items-center gap-2 py-1 text-[0.5rem] transition-colors ${
          dark
            ? "text-bone-2 hover:text-gold"
            : "text-ink-2 hover:text-blue"
        }`}
      >
        <span
          aria-hidden
          className={`inline-flex size-3.5 shrink-0 items-center justify-center rounded-full border text-[0.5rem] leading-none ${
            dark ? "border-bone-2" : "border-ink-2"
          }`}
        >
          i
        </span>
        <span className="group-open/note:hidden">Why two stints</span>
        <span className="hidden group-open/note:inline">Close</span>
      </summary>
      <p
        className={`mt-3 border-l pl-4 text-[0.9375rem] leading-relaxed ${
          dark ? "border-rule-dark text-bone-2" : "border-rule text-ink-2"
        }`}
      >
        {note}
      </p>
    </details>
  );
}
