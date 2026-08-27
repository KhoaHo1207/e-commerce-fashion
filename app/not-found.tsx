import Logo from "@/components/logo";
import { Sparkle } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-1 flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative w-full max-w-xl text-center">
        <div className="bg-accent absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full sm:h-80 sm:w-80" />

        <div className="relative">
          <div className="flex justify-center">
            <Logo />
          </div>

          <span className="bg-accent text-muted-foreground mt-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
            <Sparkle className="size-4 text-yellow-400" fill="yellow" />
            Error 404
          </span>

          <p className="text-foreground/10 mt-6 text-8xl font-bold tracking-tight sm:text-9xl">
            404
          </p>

          <h1 className="text-foreground mt-2 text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
            This look isn&apos;t in season
          </h1>

          <p className="text-muted-foreground mx-auto mt-6 max-w-md text-base leading-7 sm:text-lg sm:leading-8">
            The page you&apos;re looking for has been moved, sold out, or never
            existed. Let&apos;s get you back to something you&apos;ll love.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-8 py-4 text-center font-semibold transition"
            >
              Back Home
            </Link>
            <Link
              href="/shop"
              className="border-border text-foreground hover:bg-accent rounded-lg border px-8 py-4 text-center font-semibold transition"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
