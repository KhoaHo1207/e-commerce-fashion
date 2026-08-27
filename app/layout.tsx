import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "Fashion Ecommerce Website",
  description: "Fashion Ecommerce Website",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", poppins.variable, "font-poppins")}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
