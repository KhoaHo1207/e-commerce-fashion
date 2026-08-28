import ProductDetail from "@/components/product/product-detail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Detail",
  description: "Product Detail Page",
};

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  return <ProductDetail />;
}
