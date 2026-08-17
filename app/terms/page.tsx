import type { Metadata } from "next";
import LegalPage, { Clause } from "@/components/LegalPage";
import { LEGAL_ENTITY } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms governing use of the Pivora Consulting website, ownership of its content, and the basis on which published market data is provided.",
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms"
      title="The basis on which this site is published."
      intro="Short, because the site does very little: it publishes what Pivora does and offers two ways to get in touch. These terms cover the content, the market data on it, and what an enquiry does and does not create."
      updated="August 2026"
    >
      <Clause n="01" head="Who publishes this">
        <p>
          This site is published by {LEGAL_ENTITY}. Using it means accepting
          the terms below.
        </p>
      </Clause>

      <Clause n="02" head="Ownership of content">
        <p>
          The text, diagrams, models and design of this site belong to{" "}
          {LEGAL_ENTITY}. The Built–Operate–Sustain model, the platform ramp,
          the partner maturity ladder and the delivery model are Pivora&apos;s
          own frameworks.
        </p>
        <p>
          You are welcome to quote from the site with attribution. You may
          not reproduce it wholesale, or present its frameworks as your own.
          Third-party names appearing on the site — research houses,
          publications and former employers — belong to their owners and are
          used to attribute a source or describe a career history, not to
          imply endorsement.
        </p>
      </Clause>

      <Clause n="03" head="Market data and no warranty">
        <p>
          Every statistic on this site carries a named source and a date, and
          each one was checked against the research house named beside it.
          Figures we could not verify were removed and are listed openly on
          the market evidence page.
        </p>
        <p>
          That said, the underlying research belongs to its publishers, may
          be revised by them, and is provided here for information rather
          than as advice. Pivora gives no warranty that a third-party figure
          remains current, and nothing on this site should be relied on as
          the sole basis for an investment or market-entry decision.
        </p>
      </Clause>

      <Clause n="04" head="Forward-looking statements">
        <p>
          Projections — market sizes, growth rates, economy rankings — are
          the projections of the organisations named alongside them. They
          describe an expectation, not a commitment, and Pivora does not
          adopt them as its own forecast.
        </p>
      </Clause>

      <Clause n="05" head="Enquiries create no engagement">
        <p>
          Submitting the contact or careers form starts a conversation. It
          does not create a client relationship, a contract, an offer of
          employment, or any obligation on either side. An engagement begins
          only when a written agreement is signed.
        </p>
        <p>
          Please do not send confidential information through the forms. If
          something needs to be shared in confidence, say so and we will put
          a non-disclosure agreement in place first.
        </p>
      </Clause>

      <Clause n="06" head="Case studies and references">
        <p>
          No client is named on this site without written permission, and no
          metric is published without client approval. If you believe
          anything here misrepresents an engagement you were part of, tell us
          and we will correct it.
        </p>
      </Clause>

      <Clause n="07" head="Availability and changes">
        <p>
          The site is provided as it is, without a guarantee of uninterrupted
          availability. Content may be updated at any time — the date at the
          top of each legal page shows when it last changed.
        </p>
      </Clause>

      <Clause n="08" head="Governing law">
        <p>
          These terms are governed by the laws of India, and the courts of
          India have jurisdiction over any dispute arising from them.
        </p>
      </Clause>
    </LegalPage>
  );
}
