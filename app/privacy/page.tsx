import type { Metadata } from "next";
import LegalPage, { Clause } from "@/components/LegalPage";
import { LEGAL_ENTITY } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "What Pivora Consulting collects through the contact and careers forms, why, how long it is kept, and how to have it deleted.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="What we collect, and what we do with it."
      intro="Two forms on this site collect personal data, and nothing else on it does. This page says exactly what each one takes, why, and how to get it removed."
      updated="August 2026"
    >
      <Clause n="01" head="Who is responsible">
        <p>
          {LEGAL_ENTITY} is the data controller for anything submitted
          through this site.
        </p>
      </Clause>

      <Clause n="02" head="What the contact form collects">
        <p>
          Your name, your role, your company, your work email, a description
          of what you are building in India, and anything you add in the
          optional message field. All of it is information you type
          deliberately — nothing is inferred, enriched or bought in.
        </p>
        <p>
          The purpose is to prepare for and hold a commercial conversation.
          The legal basis is your consent, given by submitting the form, and
          our legitimate interest in responding to a business enquiry.
        </p>
      </Clause>

      <Clause n="03" head="What the careers form collects">
        <p>
          Your name, your email, any links you choose to share, and what you
          write about the work you would want to do. It is kept separate from
          the contact form and is read by the hiring team.
        </p>
        <p>
          If you would rather not leave anything on file, say so in the
          message and we will delete it once we have replied.
        </p>
      </Clause>

      <Clause n="04" head="What we do not collect">
        <p>
          This site runs no analytics, no advertising pixels, no
          session-recording and no third-party trackers. It sets no cookies.
          We do not build a profile of your visit, and we cannot tell you
          which pages you read, because we do not know.
        </p>
        <p>
          If analytics is added later, this page and the cookie notice will
          be updated before it goes live rather than after.
        </p>
      </Clause>

      <Clause n="05" head="Who else sees it">
        <p>
          Submissions are delivered to Pivora and are not sold, rented or
          shared for marketing. Where a customer relationship management
          system or email provider is used to receive and store them, that
          provider processes the data on our instructions only.
        </p>
        <p>
          At the time of writing, neither form has a delivery destination
          configured — both validate your input and then tell you plainly
          that they could not send it, rather than accepting a message that
          goes nowhere. When routing is switched on, the named provider will
          be listed here.
        </p>
      </Clause>

      <Clause n="06" head="How long it is kept">
        <p>
          Enquiries are kept for as long as the commercial conversation is
          live, and for up to twenty-four months afterwards so that we can
          pick a thread back up. Candidate submissions are kept for up to
          twelve months. Anything past those points is deleted.
        </p>
      </Clause>

      <Clause n="07" head="Your rights">
        <p>
          You can ask what we hold about you, ask for it to be corrected, ask
          for a copy, or ask for it to be erased — and we will act on it
          within thirty days. Withdrawing consent is as easy as giving it:
          one message asking us to delete your record is enough, and you do
          not have to give a reason.
        </p>
      </Clause>

      <Clause n="08" head="Security">
        <p>
          The site is served over HTTPS. Submissions are transmitted
          encrypted. Access to enquiries is limited to the people who need to
          act on them.
        </p>
      </Clause>
    </LegalPage>
  );
}
