import Link from "next/link";

import Logo from "./logo";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const shop = [
  {
    label: "New Arrivals",
    href: "/shop?category=new",
  },
  {
    label: "Best Sellers",
    href: "/shop?sort=best-selling",
  },
  {
    label: "Men",
    href: "/shop?category=men",
  },
  {
    label: "Women",
    href: "/shop?category=women",
  },
];

const company = [
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
  {
    label: "FAQs",
    href: "/faqs",
  },
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
];

export default function Footer() {
  return (
    <footer className="border-border bg-background border-t">
      <div className="mx-auto w-full max-w-7xl px-4 pt-10 sm:px-6 sm:pt-12 lg:px-8 lg:pt-16">
        <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-4">
          <div className="col-span-2 min-w-0 lg:col-span-1">
            <Logo />
            <p className="text-muted-foreground mt-4 text-sm leading-7 sm:text-base sm:leading-8">
              Discover premium fashion designed for comfort, confidence, and
              everyday style. Quality pieces you&apos;ll love season after
              season.
            </p>
          </div>

          <div className="min-w-0">
            <h3 className="text-foreground text-base font-semibold sm:text-lg">
              Shop
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              {shop.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <h3 className="text-foreground text-base font-semibold sm:text-lg">
              Company
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              {company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 min-w-0 lg:col-span-1">
            <h3 className="text-foreground text-base font-semibold sm:text-lg">
              Stay Updated
            </h3>

            <p className="text-muted-foreground mt-4 text-sm leading-7 sm:text-base sm:leading-8">
              Subscribe to receive exclusive offers, new arrivals, and fashion
              inspiration.
            </p>

            <div className="mt-4 flex w-full min-w-0 flex-col gap-3">
              <Input
                type="email"
                placeholder="Email"
                className="h-11"
                autoComplete="email"
                aria-label="Email address"
              />
              <Button className="h-11 w-full">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-border text-muted-foreground mt-10 flex flex-col items-center justify-between gap-4 border-t py-6 text-center text-sm sm:mt-12 sm:py-8 md:flex-row md:text-left lg:mt-16">
          <p>
            &copy; {new Date().getFullYear()} Fashion Store. All rights
            reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:justify-end md:gap-6">
            <Link
              href="/terms"
              className="hover:text-foreground transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/privacy-policy"
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookies"
              className="hover:text-foreground transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
