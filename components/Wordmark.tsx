import Image from "next/image";

/**
 * The approved Pivora Consulting lock-up, used as supplied.
 *
 * Extracted from the master brief (§14.1) and prepared, not redrawn: the
 * solid white field it shipped on was knocked out to alpha and the artwork
 * trimmed to its own bounding box, so clear space is controlled here in CSS
 * rather than baked into the file. The glyphs, colours and proportions are
 * untouched, and nothing stretches it — width is derived from height at the
 * artwork's own 4.4:1 ratio.
 *
 * DARK GROUND. The wordmark is Deep Navy, which is invisible on the carbon
 * footer — navy on carbon measures about 1.2:1. §14.1 supplies no reversed
 * or knockout version and forbids recolouring the mark, so on dark the
 * lock-up sits on its own paper plate instead. That is also §14.1's clear
 * space rule made literal: the logo never touches a ground it cannot be
 * read against. A proper one-colour reversed lock-up from the brand owner
 * would let the plate go away — tracked in OPEN_ITEMS.
 */

/** Intrinsic size of public/pivora-logo.png after trimming. */
const RATIO = 1153 / 262;

export default function Wordmark({
  tone = "light",
  height = 34,
}: {
  tone?: "light" | "dark";
  height?: number;
}) {
  const logo = (
    <Image
      src="/pivora-logo.png"
      alt="Pivora Consulting"
      width={Math.round(height * RATIO)}
      height={height}
      priority
      style={{ height, width: "auto" }}
    />
  );

  if (tone === "dark") {
    return (
      <span
        className="inline-flex bg-paper"
        // Clear space equal to roughly the height of the P stem, per §14.1.
        style={{ padding: `${Math.round(height * 0.34)}px ${Math.round(height * 0.4)}px` }}
      >
        {logo}
      </span>
    );
  }

  return <span className="inline-flex">{logo}</span>;
}
