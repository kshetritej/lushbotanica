import { bbhSansHegarty } from "@/lib/font";
import { Button } from "./ui/button";
import Image from "next/image";

export function HomeCTA() {
  return (
    <div className="flex gap-4 justify-around space-y-12 items-center p-4 flex-col md:flex-row">
      <div className="space-y-4 max-w-md">
        <h2
          className={`${bbhSansHegarty.className} font-bold text-2xl md:text-4xl leading-normal`}
        >
          From Garden to Vase <br />Fresh Flowers Always
        </h2>
        <p>
          Flowers have the power to transform spaces and uplift sprits. Let us
          help you create moments of joy and wonder with premium floral
          arrangements.
        </p>
        <Button>Shop Now</Button>
      </div>
      <div>
        <Image
          width={500}
          height={700}
          alt="graceful-floral-potrait"
          src={"/graceful-floral-potrait.png"}
          className="rounded-md"
        />
      </div>
    </div>
  );
}
