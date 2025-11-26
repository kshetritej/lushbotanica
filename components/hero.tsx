import { bbhSansHegarty } from "@/lib/font";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-around space-y-12 items-center p-4">
      <div className="max-w-md space-y-4 py-12">
        <h1
          className={`${bbhSansHegarty.className} font-bold text-5xl md:text-6xl leading-16`}
        >
          Blooming Fresh Bright, Delivered
        </h1>
        <p>We craft beautiful arrangements that speaks from heart.</p>
        <Button className="cursor-pointer">Order Now</Button>
      </div>
      <div>
        <Image
          width={500}
          height={700}
          alt="vibrant Lily"
          src={"/vibrant-lily.png"}
          className="rounded-md"
        />
      </div>
    </div>
  );
}
