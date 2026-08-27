import ProductCard from "@/components/product/product-card";
import FilterOptions from "@/components/shop/filter-options";
import { dummyProducts } from "@/constants/dummyProducts";

export default function ShopPage() {
  return (
    <div className="my-10 flex flex-col gap-5 sm:flex-row">
      <FilterOptions />

      <div className="flex-1">
        <div className="mb-4 flex items-center justify-between text-base sm:text-2xl">
          <h2 className="text-primary font-semibold">Shop</h2>

          <select
            name="sort"
            id="sort"
            className="border-border rounded border p-3 text-sm"
          >
            <option value="low-high">Sort By: Price (Low to High)</option>
            <option value="high-low">Sort By: Price (High to Low)</option>
            <option value="newest">Sort By: Newest</option>
            <option value="oldest">Sort By: Oldest</option>
          </select>
        </div>

        <div className="text-muted-foreground mb-4 text-sm">
          Showing {dummyProducts.length} products
        </div>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {dummyProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
