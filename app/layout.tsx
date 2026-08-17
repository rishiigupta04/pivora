import type { Metadata } from "next";
import { Newsreader, Schibsted_Grotesk, Martian_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import PageTransition from "@/components/PageTransition";
import SmoothScroll from "@/components/SmoothScroll";
import StrikeOnView from "@/components/StrikeOnView";
import { SITE_URL } from "@/lib/site";

/* The argument. Broadsheet authority — optical sizing, not display fashion. */
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
  // Italic is loaded deliberately: it carries the editorial asides.
  style: ["normal", "italic"],
});

/* The interface. Newspaper grotesque — neutral, with more spine than Inter. */
const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
  display: "swap",
});

/* The evidence. Rationed: figures, labels, citations, gates. */
const martian = Martian_Mono({
  variable: "--font-martian",
  subsets: ["latin"],
  display: "swap",
});

/* §14.11 — the approved home title and meta description, verbatim. */
const TITLE =
  "Pivora Consulting | Enterprise B2B Platform GTM | India to Global";

const DESCRIPTION =
  "Pivora Consulting helps high-value Enterprise B2B platform companies enter and scale in India through Enterprises, GCCs and GSIs, and use India as a launchpad for global growth.";

export const metadata: Metadata = {
  // Absolute URLs for OG tags and canonicals are resolved against this.
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · Pivora Consulting",
  },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Pivora Consulting",
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${schibsted.variable} ${martian.variable} h-full antialiased`}
    >
      <head>
        {/* Framer server-renders its `initial` variant as inline opacity:0.
            Without this, a visitor with JavaScript disabled gets a page of
            invisible copy. Motion is a finish, never a precondition for
            reading the site. */}
        <noscript>
          <style>{`[data-m]{opacity:1!important;transform:none!important;clip-path:none!important}`}</style>
        </noscript>
      </head>
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-blue focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        {/* Reading progress. Pure CSS scroll timeline — no listener. */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-x-0 top-0 z-50 h-0.5"
        >
          <div className="scroll-progress h-full w-full bg-primary" />
        </div>
        <SmoothScroll />
        <StrikeOnView />
        <Cursor />
        <div aria-hidden className="grain" />
        <Nav />
        <main id="main" className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
