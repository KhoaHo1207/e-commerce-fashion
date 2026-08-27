import { Product } from "@/types/product.type";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group border-border bg-background overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <Link href={`/products/${product.id}`}>
        <div className="bg-accent relative aspect-4/5 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      {/* Product Name */}
      <div className="p-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="text-foreground group-hover:text-muted-foreground line-clamp-1 text-base font-semibold transition-colors">
            {product.name}
          </h3>

          {/* Price */}
          <p className="text-foreground mt-4 text-lg font-bold">
            ${product.price.toFixed(2)}
          </p>
        </Link>
      </div>
    </div>
  );
}
