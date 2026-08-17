import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { Clause } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Notice",
  description:
    "This site sets no cookies and runs no analytics or tracking. What that means, and what would change if that ever does.",
};

export default function CookiesPage() {
  return (
    <LegalPage
      eyebrow="Cookies"
      title="This site sets no cookies."
      intro="No analytics, no advertising pixels, no session recording, no consent banner — because there is nothing to consent to. That is unusual enough to be worth stating plainly rather than burying in a policy."
      updated="August 2026"
    >
      <Clause n="01" head="What is actually running">
        <p>
          Nothing that stores or reads data on your device. The site sets no
          first-party cookies, embeds no third-party scripts, and loads no
          tracking pixels. No consent banner appears because there is no
          non-essential storage to ask you about.
        </p>
        <p>
          Typefaces are served with the site itself rather than fetched from
          a font network, so no request leaves for a third party when you
          load a page.
        </p>
      </Clause>

      <Clause n="02" head="Server logs">
        <p>
          The hosting provider keeps standard server logs — IP address,
          timestamp, requested URL, browser user agent — as every web server
          does. These are used for security and to keep the site running,
          are not linked to any individual, and are not used to profile
          visitors or to build an audience.
        </p>
      </Clause>

      <Clause n="03" head="Forms">
        <p>
          The contact and careers forms send only what you type, at the
          moment you press send. Nothing is stored on your device while you
          fill them in, and nothing is transmitted before you submit.
        </p>
      </Clause>

      <Clause n="04" head="If this changes">
        <p>
          Analytics may be added later. If it is, this notice will name the
          tool, say what it collects and how long it retains it, and — where
          your jurisdiction requires it — a consent mechanism will be in
          place before the tool goes live, not after.
        </p>
        <p>
          Any change will be reflected in the date at the top of this page
          and in the{" "}
          <Link href="/privacy" className="text-blue underline">
            privacy policy
          </Link>
          .
        </p>
      </Clause>

      <Clause n="05" head="Blocking anything anyway">
        <p>
          Your browser&apos;s privacy settings will not break this site.
          There is nothing here for a tracker blocker to block, and the site
          works identically with third-party storage disabled entirely.
        </p>
      </Clause>
    </LegalPage>
  );
}
