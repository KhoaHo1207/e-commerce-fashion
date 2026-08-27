import { dummyLatestCollections } from "@/constants/dummyProducts";
import ProductCard from "../product/product-card";
import SectionHeader from "./section-header";

export default function LastestCollection() {
  return (
    <>
      <SectionHeader
        title="Latest Collections"
        subTitle="New Arrivals added weekly. "
      />

      <div className="my-10">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {dummyLatestCollections.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
