import HeroSection from "@/components/home/hero-section";
import LastestCollection from "@/components/home/lastest-collection";
import AppLayout from "@/components/layouts/app-layout";

export default function Home() {
  return (
    <AppLayout>
      <HeroSection />
      <LastestCollection />
    </AppLayout>
  );
}
