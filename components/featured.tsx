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
    // @ts-expect-error something wrong
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
              // @ts-expect-error something wrong
              key={product.slug}
              // @ts-expect-error something wrong
              price={product.price.price}
              // @ts-expect-error something wrong
              slug={product.slug}
              // @ts-expect-error something wrong
              name={product.name}
              // @ts-expect-error something wrong
              currency={product.price.currency}
              // @ts-expect-error something wrong
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
