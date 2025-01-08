import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

type Category = {
  title: string;
  slug: string;
};

const categoriesData: Category[] = [
  {
    title: "Tubercules",
    slug: "/shop?category=tubercules",
  },
  {
    title: "Fruits",
    slug: "/shop?category=fruits",
  },
  {
    title: "Legumes",
    slug: "/shop?category=legumes",
  },
  {
    title: "Céréales",
    slug: "/shop?category=cereals",
  },
  
];

const CategoriesSection = () => {
  return (
    <div className="flex flex-col space-y-0.5 text-black/60">
      {categoriesData.map((category, idx) => (
        <Link
          key={idx}
          href={category.slug}
          className="flex items-center justify-between py-2"
        >
          {category.title} <MdKeyboardArrowRight />
        </Link>
      ))}
    </div>
  );
};

export default CategoriesSection;
