import Featured from "@/components/featured";
import Hero from "@/components/hero";
import { HomeCTA } from "@/components/home-cta";

export default function Home() {
  return (
    <div className="flex gap-8 flex-col">
      <Hero />
      <Featured />
      <HomeCTA />
    </div>
  );
}
