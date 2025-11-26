"use client";

import { bbhSansHegarty } from "@/lib/font";
import { myWixClient } from "@/wix/wixClient";
import { useEffect, useState } from "react";
import { ProductCard } from "./product-card";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Featured() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const productList = await myWixClient.products.queryProducts().find();
    setProductList(productList.items);
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-12 py-4">
      <div className="max-w-3xl text-center">
        <h2
          className={`${bbhSansHegarty.className} font-bold text-2xl  md:text-4xl leading-normal`}
        >
          Flowers are more than just <br /> gifts - they are expressions <br />{" "}
          of love, gratitude and joy.
        </h2>
        <p>
          From vibrant bouquets to elegant centerpieces, we make your floral
          vision blooms to life.
        </p>
      </div>
      <div className="flex items-baseline gap-8 justify-center p-4">
        {productList.map((product) => {
          return (
            <ProductCard
              key={product.slug}
              price={product.price.price}
              slug={product.slug}
              name={product.name}
              currency={product.price.currency}
              image={product.media.mainMedia.image.url}
            />
          );
        })}
      </div>
      <Link href={"/flowers"}>
        <Button>Explore More</Button>
      </Link>
    </div>
  );
}
