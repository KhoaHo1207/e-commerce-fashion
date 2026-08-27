"use client";

import { Menu, Search, ShoppingBag, User2, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import Logo from "./logo";
import { Button } from "./ui/button";

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/shop",
    label: "Shop",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          aria-hidden="true"
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <header className="border-border bg-background fixed top-0 right-0 left-0 z-50 border-b">
        <nav className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo />

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  href={item.href}
                  key={item.href}
                  className={cn(
                    "relative text-sm font-medium uppercase transition-colors",
                    isActive
                      ? "text-foreground underline underline-offset-8"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <Button
                className="text-foreground rounded-full p-2"
                variant="ghost"
                size="icon"
                aria-label="Search"
              >
                <Search className="size-4" />
              </Button>
              <Button
                className="text-foreground rounded-full p-2"
                variant="ghost"
                size="icon"
                aria-label="Account"
              >
                <User2 className="size-4" />
              </Button>
              <Button
                className="text-foreground rounded-full p-2"
                variant="ghost"
                size="icon"
                aria-label="Cart"
              >
                <ShoppingBag className="size-4" />
              </Button>
            </div>

            <Button
              className="text-foreground md:hidden"
              variant="ghost"
              size="icon"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsOpen((open) => !open)}
            >
              {isOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </Button>
          </div>
        </nav>

        {isOpen && (
          <div
            id="mobile-menu"
            className="border-border bg-popover text-popover-foreground absolute top-full right-0 left-0 border-t shadow-lg md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col p-4">
              {navLinks.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    href={item.href}
                    key={item.href}
                    className={cn(
                      "rounded px-2 py-3 text-sm font-medium uppercase transition-colors",
                      isActive
                        ? "bg-accent text-foreground"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <Button
                className="mt-4 w-full"
                variant="default"
                size="lg"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
