import React from "react";
import Footer from "../footer";
import Navbar from "../navbar";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <Navbar />
      <div className="mx-auto w-full max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        {children}
      </div>
      <Footer />
    </>
  );
}
