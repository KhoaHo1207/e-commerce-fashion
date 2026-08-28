import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how we collect, uses, and protects your personal information.",
};

const sections = [
  {
    title: "1. Who we are",
    paragraphs: [
      "Fashion. (“we”, “us”, or “our”) operates this online store to offer premium clothing and accessories. This Privacy Policy explains how we collect, use, share, and protect information when you visit Fashion., create an account, place an order, or contact us.",
    ],
  },
  {
    title: "2. Information we collect",
    paragraphs: [
      "We collect information you provide directly and information that is generated when you use our site.",
    ],
    bullets: [
      "Account and contact details, such as your name, email address, phone number, and shipping address.",
      "Order information, including items purchased, payment confirmation, and delivery updates.",
      "Messages you send through our contact channels, including support requests.",
      "Technical data such as browser type, device, pages visited, and approximate location derived from IP address.",
    ],
  },
  {
    title: "3. How we use your information",
    paragraphs: [
      "We use your information to operate the store, fulfill orders, and improve your shopping experience.",
    ],
    bullets: [
      "Process, ship, and provide updates on your orders.",
      "Respond to questions, returns, exchanges, and support requests.",
      "Send order confirmations and, if you opt in, new arrivals or exclusive offers.",
      "Keep our site secure, prevent fraud, and understand how our collections are used.",
    ],
  },
  {
    title: "4. How we share information",
    paragraphs: [
      "We do not sell your personal information. We only share it with trusted partners who help us run the store, such as payment processors, shipping carriers, and hosting providers. These partners may only use your information to perform services for us.",
      "We may also disclose information if required by law, to protect our rights, or in connection with a business transfer.",
    ],
  },
  {
    title: "5. Cookies and similar technologies",
    paragraphs: [
      "We use cookies and similar technologies to keep you signed in, remember bag contents, measure site performance, and understand which products you browse. You can control cookies through your browser settings. Disabling some cookies may affect checkout or saved preferences.",
    ],
  },
  {
    title: "6. Data retention",
    paragraphs: [
      "We keep personal information only as long as needed for the purposes described in this policy, including order fulfillment, legal and accounting requirements, and resolving disputes. When information is no longer needed, we delete or anonymize it.",
    ],
  },
  {
    title: "7. Your choices",
    paragraphs: [
      "Depending on where you live, you may have the right to access, update, correct, or delete your personal information, or to opt out of marketing emails. You can unsubscribe from promotional messages at any time using the link in those emails. To make a privacy request, contact us using the details below.",
    ],
  },
  {
    title: "8. Children’s privacy",
    paragraphs: [
      "Fashion. is intended for shoppers who are 16 years of age or older. We do not knowingly collect personal information from children. If you believe a child has provided information to us, please contact us and we will take appropriate steps to delete it.",
    ],
  },
  {
    title: "9. Changes to this policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time to reflect changes to our practices or for legal reasons. When we do, we will revise the “Last updated” date at the top of this page. Continued use of Fashion. after an update means you acknowledge the revised policy.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl">
        <span className="text-primary text-sm font-semibold tracking-widest uppercase">
          Privacy Policy
        </span>

        <h1 className="text-foreground mt-4 text-4xl font-bold sm:text-5xl">
          Your privacy, treated with care
        </h1>

        <p className="text-muted-foreground mt-6 leading-8">
          We collect only what we need to deliver your order, support your
          experience, and keep Fashion. running smoothly.
        </p>

        <p className="text-muted-foreground mt-4 text-sm">
          Last updated: August 27, 2026
        </p>

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <article key={section.title}>
              <h2 className="text-foreground text-xl font-semibold sm:text-2xl">
                {section.title}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-muted-foreground mt-4 leading-8"
                >
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className="text-muted-foreground mt-4 list-disc space-y-2 pl-5 leading-8">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}

          <article>
            <h2 className="text-foreground text-xl font-semibold sm:text-2xl">
              10. Contact us
            </h2>
            <p className="text-muted-foreground mt-4 leading-8">
              If you have questions about this policy or how we handle your
              information, reach us at{" "}
              <a
                href="mailto:support@fashion.com"
                className="text-foreground font-medium underline underline-offset-4"
              >
                support@fashion.com
              </a>
              , call (+84) 909 090 909, or visit our{" "}
              <Link
                href="/contact"
                className="text-foreground font-medium underline underline-offset-4"
              >
                Contact
              </Link>{" "}
              page. Our store is located at 123 Fashion Avenue, New York, NY
              10001.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
