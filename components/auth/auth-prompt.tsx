import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  message: string;
  linkText: string;
  href: string;
  className?: string;
}

export default function AuthPrompt({
  message,
  linkText,
  href,
  className,
}: Props) {
  return (
    <div className={cn("text-center text-sm text-gray-500", className)}>
      {message}
      <Link
        href={href}
        className="text-primary ml-1 font-medium hover:underline"
      >
        {linkText}
      </Link>
    </div>
  );
}
