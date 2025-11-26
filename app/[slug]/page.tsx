import Image from "next/image";
import { products } from "@wix/stores";

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  return (
    <div>
      <div className="border-b mb-4">breadcrumb</div>
      <div>
        <div>
          <Image src={"/vibrant-lily.png"} width={200} height={200} alt="" />
        </div>
      </div>
      <div>
        <h1>Yellow Red Roses</h1>
      </div>
    </div>
  );
}
