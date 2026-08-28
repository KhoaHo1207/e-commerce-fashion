import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface BreadCrumbItem {
  label: string;
  href?: string;
}

interface BreadCrumProps {
  items: BreadCrumbItem[];
}

export default function BreadCrumb({ items }: BreadCrumProps) {
  return (
    <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div key={item.label} className="flex items-center gap-2">
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="text-muted-foreground hover:text-primary transition"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={cn(
                  "",
                  isLast
                    ? "text-foreground font-medium"
                    : "text-muted-foreground",
                )}
              >
                {item.label}
              </span>
            )}

            {!isLast && (
              <ChevronRight className="text-muted-foreground size-4" />
            )}
          </div>
        );
      })}
    </nav>
  );
}
