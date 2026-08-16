import Image from "next/image";

/**
 * The supplied logo mockup, cropped in CSS.
 *
 * The source file is a 1000×600 presentation board: the mark sits in the
 * upper-left with a tagline underneath and colour bars along the bottom.
 * Rather than ship the whole board, the visible window is cropped to just
 * the dot + wordmark by sizing a container and offsetting the image inside
 * it — no re-encoding, and the original file stays untouched.
 *
 * `mix-blend-multiply` drops the white background out against the warm
 * paper ground. That only works on a light ground: on carbon, multiply
 * would take the blue down to near-black and the mark would vanish, which
 * is why the footer keeps the typographic wordmark for now.
 *
 * Replacing this with a transparent SVG would remove both compromises.
 */

/**
 * Crop window into the 1000×600 source, in source pixels.
 *
 * Reverted to the original tighter framing at the user's preference. The
 * lockup ink runs x 130–478, y 174–285, so this window still contains all
 * of it with a little breathing room; the tagline below (which extends to
 * x 572, y 353) stays outside the frame.
 */
const CROP = { x: 122, y: 165, w: 366, h: 125 };

export default function Logo({ height = 30 }: { height?: number }) {
  const s = height / CROP.h;

  return (
    <span
      className="relative block shrink-0 overflow-hidden mix-blend-multiply"
      style={{ width: CROP.w * s, height }}
    >
      <Image
        src="/pivora-logo.png"
        alt="Pivora Consulting"
        width={1000}
        height={600}
        priority
        style={{
          position: "absolute",
          left: -CROP.x * s,
          top: -CROP.y * s,
          width: 1000 * s,
          height: 600 * s,
          maxWidth: "none",
        }}
      />
    </span>
  );
}
