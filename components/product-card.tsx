import Image from "next/image";
import Link from "next/link";
type TProduct = {
  image: string;
  name: string;
  price: string;
  slug: string;
  currency: string;
};
export function ProductCard(product: TProduct) {
  return (
    <Link
      href={`/${product.slug}`}
      className="flex items-center flex-col gap-2"
    >
      <Image
        alt={product.name}
        height={200}
        width={200}
        src={product.image}
        className="rounded-md object-cover hover:scale-110 transition-all delay-150 ease-linear"
      />
      <h3 className="mt-4 font-semibold text-lg">{product.name}</h3>
      <p>
        {product.currency} {product.price}
      </p>
    </Link>
  );
}
