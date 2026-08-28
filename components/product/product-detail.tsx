"use client";

import { dummyProduct } from "@/constants/dummyProducts";
import { cn } from "@/lib/utils";
import { CarIcon, PlusSquare, RefreshCcw, Shield } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import BreadCrumb from "../bread-crumb";
import { Button } from "../ui/button";

export default function ProductDetail() {
  const [selectedImage, setSelectedImage] = useState<string>(
    dummyProduct.images[0],
  );
  const [selectedSize, setSelectedSize] = useState<string>(
    dummyProduct.sizes[0],
  );
  const [selectedColor, setSelectedColor] = useState<{
    name: string;
    value: string;
  }>({
    name: dummyProduct.colors[0].name,
    value: dummyProduct.colors[0].value,
  });
  return (
    <section className="py-12">
      <BreadCrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Shop", href: "/shop" },
          {
            label: dummyProduct.name,
            href: `/shop/${dummyProduct.id}`,
          },
        ]}
      />
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col-reverse gap-4 md:flex-row">
          {/* Images */}
          <div className="flex flex-col-reverse gap-4 md:flex-row">
            {/* Gallery Images */}
            <div className="flex gap-3 overflow-x-auto md:flex-col md:overflow-visible">
              {dummyProduct.images.map((image, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  aria-pressed={selectedImage === image}
                  aria-label={`View product image ${index + 1}`}
                  className={cn(
                    "relative aspect-4/5 h-auto w-20 shrink-0 overflow-hidden rounded-xl border-2 p-0 md:w-24",
                    selectedImage === image
                      ? "border-primary"
                      : "border-border",
                  )}
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image}
                    alt={`Product image ${index + 1}`}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </Button>
              ))}
            </div>
          </div>

          {/* Main Image */}
          <div className="bg-accent relative h-87.5 w-full overflow-hidden rounded-2xl sm:h-125">
            <Image
              src={selectedImage || ""}
              alt={dummyProduct.name}
              fill
              sizes="100%"
              className="object-cover"
            />
          </div>
        </div>
        {/* Product Details */}
        <div className="lg:sticky lg:top-24 lg:h-fit">
          <h2 className="text-3xl font-bold sm:text-4xl">
            {dummyProduct.name}
          </h2>

          <p className="mt-6 text-2xl font-bold sm:text-3xl">
            ${dummyProduct.price.toFixed(2)}
          </p>

          <p className="mt-4 font-medium text-green-700">
            {dummyProduct.inStock
              ? `In Stock (${dummyProduct.quantity} available)`
              : "Out of Stock"}
          </p>

          <p className="text-muted-foreground mt-6 leading-8">
            {dummyProduct.description}
          </p>

          {/* Size */}
          <div className="mt-8">
            <p className="mb-3 font-semibold">Select Size</p>

            <div className="flex flex-wrap gap-3">
              {dummyProduct.sizes.map((size, index) => (
                <Button
                  key={index}
                  className={`flex size-11 items-center justify-center rounded-lg border font-medium transition ${selectedSize === size ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary"}`}
                  onClick={() => setSelectedSize(size)}
                  aria-label={`Select size ${size}`}
                  aria-pressed={selectedSize === size}
                  variant="outline"
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>

          {/* Color */}
          <div className="mt-8">
            <p className="mb-3 font-semibold">Select Colors</p>

            <div className="flex gap-3">
              {dummyProduct.colors.map((color, index) => (
                <Button
                  key={index}
                  title={color.name}
                  className={cn(
                    "size-11 overflow-hidden rounded-full p-1",
                    selectedColor.name === color.name
                      ? "border-primary ring-primary ring-2"
                      : "border-border",
                  )}
                  onClick={() => setSelectedColor(color)}
                  aria-label={`Select color ${color.name}`}
                  aria-pressed={selectedColor.name === color.name}
                  variant="outline"
                >
                  <span
                    className="block size-full rounded-full"
                    style={{ backgroundColor: color.value }}
                  />
                </Button>
              ))}
            </div>
          </div>

          {/* Selected Values */}
          <div className="bg-accent mt-6 rounded-xl p-4">
            <p className="font-semibold">Selected Size:</p> {""} {selectedSize}
            <p className="font-semibold">Selected Color:</p> {""}{" "}
            {selectedColor.name}
          </div>

          {/* Add To Cart */}
          <div className="mt-8">
            <Button
              className={cn(
                "flex w-full items-center justify-center px-8 py-6 text-sm sm:w-fit sm:text-base",
                dummyProduct.inStock
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-muted text-muted-foreground hover:bg-muted/90 cursor-not-allowed",
              )}
            >
              <PlusSquare className="mr-2 size-4" />
              Add to Cart
            </Button>
          </div>

          {/* Benefits */}
          <div className="border-border mt-8 space-y-4 rounded-xl border p-6">
            <div className="flex items-center gap-2">
              <CarIcon className="text-primary size-5 shrink-0" />{" "}
              <p>Free shipping on orders over $100</p>
            </div>
            <div className="flex items-center gap-2">
              <RefreshCcw className="text-primary size-5 shrink-0" />{" "}
              <p>7-Day easy returns</p>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="text-primary size-5 shrink-0" />{" "}
              <p>100% secure checkout</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
