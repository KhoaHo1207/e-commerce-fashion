import type { ReactNode } from "react";

import AppLayout from "@/components/layouts/app-layout";

export default function MainLayout({ children }: { children: ReactNode }) {
  return <AppLayout>{children}</AppLayout>;
}
