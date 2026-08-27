import BestSeller from "@/components/home/best-seller";
import HeroSection from "@/components/home/hero-section";
import LastestCollection from "@/components/home/lastest-collection";
import ShopWithUs from "@/components/home/shop-with-us";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LastestCollection />
      <BestSeller />
      <ShopWithUs />
    </>
  );
}
