import { Sparkle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section>
      <div className="mx-auto mt-6 flex flex-col-reverse items-center gap-12 lg:mt-0 lg:grid lg:min-h-[calc(100vh-64px)] lg:grid-cols-2 lg:px-8">
        {/* Content */}
        <div className="max-w-xl text-center lg:text-left">
          <span className="bg-accent text-muted-foreground inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
            <Sparkle className="size-4 text-yellow-400" fill="yellow" />
            New Collection 2026
          </span>
          <h2 className="text-foreground mt-6 text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
            Elevate Your Style With Premium Fashion
          </h2>

          <p className="text-muted-foreground mt-6 text-base leading-7 sm:text-lg sm:leading-8">
            Discover timeless essentials and the latest trends for men and
            women. Crafted with premium materials to keep you looking your best
            every season.
          </p>

          <div className="m-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              href={"/shop"}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-8 py-4 text-center font-semibold transition"
            >
              Shop Now
            </Link>
            <Link
              href={"/about"}
              className="border-border text-foreground hover:bg-accent rounded-lg border px-8 py-4 text-center font-semibold transition"
            >
              Learn More
            </Link>
          </div>
        </div>
        {/* Hero Image */}
        <div className="relative w-full max-w-md lg:max-w-none">
          <div className="bg-accent absolute inset-0 rounded-3xl"></div>

          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src={"/hero.png"}
              alt="Fashion Hero Image"
              width={700}
              height={800}
              priority
              className="h-auto w-full object-cover lg:h-130"
            />

            {/* Floating Card */}
            <div className="bg-background absolute bottom-4 left-4 rounded-2xl p-4 shadow-xl sm:bottom-6 sm:left-6 sm:p-5">
              <p className="text-muted-foreground text-sm">Starting From</p>
              <h3 className="text-foreground mt-1 text-xl font-bold sm:text-2xl">
                $9.99
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
