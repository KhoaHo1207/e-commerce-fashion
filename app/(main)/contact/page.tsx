import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact us for any questions or inquiries.",
};

export default function ContactPage() {
  return (
    <section className="py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Left Contents */}
        <div className="overflow-hidden rounded-3xl">
          <Image
            src={"/contact.png"}
            alt="Contact Fashion"
            width={800}
            height={700}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Contents */}
        <div>
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Contact Us
          </span>

          <h2 className="text-foreground mt-4 text-4xl font-bold sm:text-5xl">
            We&apos;d Love to Hear From You
          </h2>

          <p className="text-muted-foreground mt-6 leading-8">
            Whether you have a question about an order, need help finding the
            perfect outfit, or simply want to say hello, our team is always
            ready to assist you.
          </p>

          <h4 className="text-primary mt-6 font-semibold">Our Store</h4>
          <p className="text-muted-foreground mt-2 leading-8">
            123 Fashion Avenue New York, NY 10001
          </p>

          <h4 className="text-primary mt-6 font-semibold">Email</h4>
          <p className="text-muted-foreground mt-2 leading-8">
            support@fashion.com
          </p>

          <h4 className="text-primary mt-6 font-semibold">Phone</h4>
          <p className="text-muted-foreground mt-2 leading-8">
            (+84) 909 090 909
          </p>

          <h4 className="text-primary mt-6 font-semibold">Business Hours</h4>
          <p className="text-muted-foreground mt-2 leading-8">
            Monday – Friday 9:00 AM – 6:00 PM
          </p>
        </div>
      </div>
    </section>
  );
}
