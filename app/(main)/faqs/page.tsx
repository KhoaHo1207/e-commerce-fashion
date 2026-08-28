import type { Metadata } from "next";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Find answers about orders, shipping, returns, sizing, and support.",
};

const faqs = [
  {
    value: "orders",
    question: "How do I place an order?",
    answer:
      "Browse the Shop, choose your size, and add items to your bag. When you're ready, go to checkout, enter your shipping details, and complete payment. You'll receive an order confirmation by email.",
  },
  {
    value: "payment",
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit and debit cards, as well as selected digital wallets at checkout. All payments are processed securely, and we never store your full card details on our servers.",
  },
  {
    value: "shipping",
    question: "How long does shipping take?",
    answer:
      "Standard shipping typically arrives within 3–7 business days after your order is confirmed. Delivery times can vary by location and during peak seasons. You'll receive tracking details as soon as your order ships.",
  },
  {
    value: "free-shipping",
    question: "Do you offer free shipping?",
    answer:
      "Yes. Complimentary standard shipping is available on qualifying orders. Shipping options and any applicable fees are shown at checkout before you confirm your purchase.",
  },
  {
    value: "sizing",
    question: "How do I find the right size?",
    answer:
      "Each product page includes fit notes to help you choose. If you're between sizes, we recommend sizing up for a more relaxed look. Need a second opinion? Our support team is happy to help.",
  },
  {
    value: "returns",
    question: "What is your return policy?",
    answer:
      "Not satisfied? Return eligible items within 7 days of delivery in original condition with tags attached. Once we receive your return, refunds are issued to your original payment method.",
  },
  {
    value: "exchanges",
    question: "Can I exchange an item?",
    answer:
      "Yes. You can exchange eligible items quickly for a different size or color, subject to availability. Start an exchange from your order confirmation email or by contacting support.",
  },
  {
    value: "tracking",
    question: "How can I track my order?",
    answer:
      "When your order ships, we send a tracking link to the email used at checkout. Use that link for the latest delivery status. If you haven't received it, check spam or contact support with your order number.",
  },
  {
    value: "international",
    question: "Do you ship internationally?",
    answer:
      "We currently focus on domestic delivery. If international shipping becomes available, it will appear as an option at checkout along with estimated duties, taxes, and delivery times.",
  },
  {
    value: "support",
    question: "How can I contact customer support?",
    answer:
      "Our team is here Monday–Friday, 9:00 AM – 6:00 PM. Email support@fashion.com, call (+84) 909 090 909, or visit the Contact page. We typically respond within one business day.",
  },
];

export default function FaqsPage() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl">
        <span className="text-primary text-sm font-semibold tracking-widest uppercase">
          FAQs
        </span>

        <h1 className="text-foreground mt-4 text-4xl font-bold sm:text-5xl">
          Answers for a smoother shop
        </h1>

        <p className="text-muted-foreground mt-6 leading-8">
          Everything you need to know about orders, shipping, returns, and
          support. If you still need a hand, our team is ready to help.
        </p>

        <div className="border-border mt-12 rounded-3xl border px-4 sm:px-6">
          <Accordion defaultValue={["orders"]}>
            {faqs.map((item) => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionTrigger className="py-4 text-base sm:text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 text-sm leading-7 sm:text-base sm:leading-8">
                  <p>{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="bg-accent mt-16 rounded-3xl p-8 text-center sm:p-12">
          <h2 className="text-foreground text-2xl font-bold sm:text-3xl">
            Still have questions?
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-md leading-8">
            Can&apos;t find what you&apos;re looking for? Reach out and
            we&apos;ll get back to you as soon as we can.
          </p>
          <Link
            href="/contact"
            className="bg-primary text-primary-foreground hover:bg-primary/90 mt-8 inline-flex rounded-lg px-8 py-4 font-semibold transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
