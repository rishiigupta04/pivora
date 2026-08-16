import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/**
 * Favicon: the logo's dot, inverted so it survives at 32px.
 *
 * The mark itself is a gold dot beside a blue wordmark. At favicon size
 * the wordmark is unreadable, so only the dot relationship is kept — gold
 * on brand blue, which stays legible against both light and dark browser
 * chrome.
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0022EE",
        }}
      >
        <div
          style={{
            width: 14,
            height: 14,
            borderRadius: 999,
            background: "#FFD700",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
