"use client";

import { ChevronsRight } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function FilterOptions() {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <aside className="w-full sm:max-w-60 sm:min-w-60">
      <Button
        className={
          "mb-4 flex items-center gap-2 text-xl font-semibold hover:bg-transparent sm:cursor-auto"
        }
        onClick={() => setShowFilter((prev) => !prev)}
        variant={"ghost"}
      >
        FILTERS
        <ChevronsRight
          className={`transition-transform duration-300 sm:hidden ${showFilter ? "rotate-90" : ""}`}
        />
      </Button>
      {/* Filters */}
      <div className={`space-y-6 sm:block ${showFilter ? "block" : "hidden"}`}>
        {/* Categories */}
        <div className="border-border rounded-xl border p-5">
          <h3 className="mb-4 text-sm font-semibold tracking-wide">
            CATEGORIES
          </h3>

          <div className="text-muted-foreground space-y-4 text-sm">
            <Label htmlFor="Men" className="flex items-center gap-3">
              <Input type="checkbox" id="Men" className="h-4 w-4" />
              <span>Men</span>
            </Label>
            <Label htmlFor="Women" className="flex items-center gap-3">
              <Input type="checkbox" id="Women" className="h-4 w-4" />
              <span>Women</span>
            </Label>
            <Label htmlFor="Children" className="flex items-center gap-3">
              <Input type="checkbox" id="Children" className="h-4 w-4" />
              <span>Children</span>
            </Label>
          </div>
        </div>

        {/* Product Types */}
        <div className="border-border rounded-xl border p-5">
          <h3 className="mb-4 text-sm font-semibold tracking-wide">
            PRODUCT TYPE
          </h3>

          <div className="text-muted-foreground space-y-4 text-sm">
            <Label htmlFor="T-Shirts" className="flex items-center gap-3">
              <Input type="checkbox" id="T-Shirts" className="h-4 w-4" />
              <span>T-Shirts</span>
            </Label>
            <Label htmlFor="Shirts" className="flex items-center gap-3">
              <Input type="checkbox" id="Shirts" className="h-4 w-4" />
              <span>Shirts</span>
            </Label>
            <Label htmlFor="Hoodies" className="flex items-center gap-3">
              <Input type="checkbox" id="Hoodies" className="h-4 w-4" />
              <span>Hoodies</span>
            </Label>
            <Label htmlFor="Jackets" className="flex items-center gap-3">
              <Input type="checkbox" id="Jackets" className="h-4 w-4" />
              <span>Jackets</span>
            </Label>
            <Label htmlFor="Jeans" className="flex items-center gap-3">
              <Input type="checkbox" id="Jeans" className="h-4 w-4" />
              <span>Jeans</span>
            </Label>
            <Label htmlFor="Trousers" className="flex items-center gap-3">
              <Input type="checkbox" id="Trousers" className="h-4 w-4" />
              <span>Trousers</span>
            </Label>
            <Label htmlFor="Shorts" className="flex items-center gap-3">
              <Input type="checkbox" id="Shorts" className="h-4 w-4" />
              <span>Shorts</span>
            </Label>
            <Label htmlFor="Shoes" className="flex items-center gap-3">
              <Input type="checkbox" id="Shoes" className="h-4 w-4" />
              <span>Shoes</span>
            </Label>
          </div>
        </div>
      </div>
    </aside>
  );
}
