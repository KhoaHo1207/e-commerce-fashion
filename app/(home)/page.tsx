import BestSeller from "@/components/home/best-seller";
import HeroSection from "@/components/home/hero-section";
import LastestCollection from "@/components/home/lastest-collection";
import ShopWithUs from "@/components/home/shop-with-us";
import AppLayout from "@/components/layouts/app-layout";

export default function Home() {
  return (
    <AppLayout>
      <HeroSection />
      <LastestCollection />
      <BestSeller />
      <ShopWithUs />
    </AppLayout>
  );
}
