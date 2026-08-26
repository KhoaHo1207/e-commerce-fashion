import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="text-foreground text-3xl font-bold tracking-tight"
    >
      Fashion.
    </Link>
  );
}
