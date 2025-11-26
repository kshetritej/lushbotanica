import Link from "next/link";
import Logo from "./logo";

export default function Navbar() {
  const navItems = [
    {
      title: "Flowers",
      url: "/flowers",
    },
    {
      title: "Greenery",
      url: "/greenery",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "FAQs",
      url: "/faqs",
    },
  ];
  return (
    <nav className="flex flex-col items-center justify-center gap-4 container mx-auto p-4 border-b mb-4">
      <Logo />
      <div className="flex gap-4 font-medium justify-around w-full uppercase flex-wrap">
        {navItems.map((item) => {
          return <Link className="hover:text-green-800 font-semibold" key={item.title} href={item.url}>{item.title}</Link>;
        })}
      </div>
    </nav>
  );
}
