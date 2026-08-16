import { ImageResponse } from "next/og";

export const alt = "Pivora Consulting — Don't just enter India. Build an India business.";
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
 */
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F5F2EC",
          padding: "72px 80px",
        }}
      >
        {/* wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: 999,
              background: "#0022EE",
            }}
          />
          <div
            style={{
              fontSize: 40,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              color: "#14120E",
            }}
          >
            pivora
          </div>
          <div
            style={{
              fontSize: 17,
              letterSpacing: "0.18em",
              color: "#4A463E",
              paddingTop: 8,
            }}
          >
            CONSULTING
          </div>
        </div>

        {/* the statement */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 78,
              lineHeight: 1.03,
              letterSpacing: "-0.035em",
              color: "#14120E",
            }}
          >
            Don&apos;t just enter India.
          </div>
          <div
            style={{
              fontSize: 78,
              lineHeight: 1.03,
              letterSpacing: "-0.035em",
              color: "#0022EE",
            }}
          >
            Build an India business.
          </div>
          <div
            style={{
              marginTop: 30,
              fontSize: 26,
              lineHeight: 1.4,
              color: "#4A463E",
              maxWidth: 780,
            }}
          >
            An operating partner for global B2B software companies — inside
            the work, accountable for the number, built to hand it over.
          </div>
        </div>

        {/* the handover bar: our share falling into yours */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", width: "100%", height: 12 }}>
            <div style={{ width: "34%", background: "#0022EE" }} />
            <div style={{ flex: 1, background: "#FFD700" }} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 16,
              letterSpacing: "0.18em",
              color: "#4A463E",
            }}
          >
            <div>INDIA GTM — OPERATING PARTNER</div>
            <div>BUILD · OPERATE · SUSTAIN · TRANSFER</div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
