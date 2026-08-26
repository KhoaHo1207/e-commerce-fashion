import { Headphones, RefreshCw, RotateCcw } from "lucide-react";
import SectionHeader from "./section-header";

const features = [
  {
    icon: RefreshCw,
    title: "Easy Exchange",
    description: "Exchange your items quickly and hassle-free.",
  },
  {
    icon: RotateCcw,
    title: "7-Day Returns",
    description: "Not satisfied? Return your order within 7 days.",
  },
  {
    icon: Headphones,
    title: "Best Support",
    description: "Our support team is available whenever you need help.",
  },
];

export default function ShopWithUs() {
  return (
    <section className="py-12">
      <SectionHeader
        title="Why Shop With Us"
        subTitle="We're committed to providing a seamless shopping experience with premium products and exceptional customer service."
      />

      <div className="grid gap-3 py-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1"
          >
            <div className="bg-primary/10 mx-auto flex h-16 w-16 items-center justify-center rounded-full">
              <feature.icon className="text-primary h-6 w-6" />
            </div>

            <h3 className="text-foreground mt-6 text-xl font-semibold">
              {feature.title}
            </h3>

            <p className="text-muted-foreground mt-3 text-sm leading-6">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
