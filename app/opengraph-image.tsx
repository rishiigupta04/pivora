import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Pivora Consulting — Enterprise B2B platforms. India to global.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * The social card.
 *
 * Deliberately built from the site's own furniture rather than a logo on a
 * plain field: the paper ground, the blue statement line, and the
 * blue→gold ownership bar that runs through the whole site. Someone who
 * has seen the card should recognise the page when they land on it.
 *
 * No webfont is fetched. Pulling Newsreader at build time would add a
 * network dependency to every build for a 1200×630 image nobody reads
 * closely — composition and colour carry the brand here instead.
 *
 * The lock-up is the approved artwork, as §18 requires of the social
 * preview, read off disk and inlined so the render has no network
 * dependency either.
 */
export default async function Image() {
  const logo = await readFile(
    join(process.cwd(), "public", "pivora-logo.png")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F4F1EA",
          padding: "72px 80px",
        }}
      >
        {/* the approved lock-up */}
        <div style={{ display: "flex" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            width={352}
            height={80}
            alt=""
            src={`data:image/png;base64,${logo.toString("base64")}`}
          />
        </div>

        {/* the statement */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 78,
              lineHeight: 1.03,
              letterSpacing: "-0.035em",
              color: "#00173E",
            }}
          >
            Enterprise B2B platforms.
          </div>
          <div
            style={{
              fontSize: 78,
              lineHeight: 1.03,
              letterSpacing: "-0.035em",
              color: "#2C5C96",
            }}
          >
            India to global.
          </div>
          <div
            style={{
              marginTop: 30,
              fontSize: 26,
              lineHeight: 1.4,
              color: "#55617A",
              maxWidth: 800,
            }}
          >
            A specialist GTM and growth firm for high-value Enterprise B2B
            platforms — one firm, two directions of value.
          </div>
        </div>

        {/* the handover bar: our share falling into yours */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", width: "100%", height: 12 }}>
            <div style={{ width: "34%", background: "#2C5C96" }} />
            <div style={{ flex: 1, background: "#B88741" }} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 16,
              letterSpacing: "0.18em",
              color: "#55617A",
            }}
          >
            <div>GLOBAL → INDIA · INDIA → GLOBAL</div>
            <div>BUILT · OPERATE · SUSTAIN</div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
