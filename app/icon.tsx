import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/**
 * Favicon: the P-in-circle, alone.
 *
 * §14.1 is explicit — the P monogram is the mark for the favicon, the social
 * avatar and every small application. It is the approved artwork isolated
 * from the lock-up, not a redraw.
 *
 * Rendered at 64 rather than 32: the split ring is a hairline, and at 32 it
 * broke up. Browsers downscale a larger icon cleanly, so the extra pixels
 * cost nothing and the ring survives.
 *
 * The mark is navy and gold on transparent, which disappears against dark
 * browser chrome — so it sits on its own paper tile, the same treatment the
 * dark-ground wordmark gets.
 */
export default async function Icon() {
  const mark = await readFile(
    join(process.cwd(), "public", "pivora-mark.png")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F4F1EA",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          width={54}
          height={54}
          alt=""
          src={`data:image/png;base64,${mark.toString("base64")}`}
        />
      </div>
    ),
    { ...size }
  );
}
