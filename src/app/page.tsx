import ProductListSec from "@/components/common/ProductListSec";
import Brands from "@/components/homepage/Brands";
import DressStyle from "@/components/homepage/DressStyle";
import Header from "@/components/homepage/Header";
import Reviews from "@/components/homepage/Reviews";
import { Product } from "@/types/product.types";
import { Review } from "@/types/review.types";

export const newArrivalsData: Product[] = [
  {
    id: 1,
    title: "Miel pur du Fazao",
    srcUrl: "/images/pic1.jpg",
    gallery: ["/images/pic1.jpg", "/images/pic10.jpg", "/images/pic11.png"],
    price: 120,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 2,
    title: "Patate douce ",
    srcUrl: "/images/pic2.jpg",
    gallery: ["/images/pic2.jpg"],
    price: 260,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 3.5,
  },
  {
    id: 3,
    title: "Café moulu",
    srcUrl: "/images/pic3.jpg",
    gallery: ["/images/pic3.jpg"],
    price: 180,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 4,
    title: "Grain de café emballé",
    srcUrl: "/images/pic4.png",
    gallery: ["/images/pic4.png", "/images/pic10.jpg", "/images/pic11.png"],
    price: 160,
    discount: {
      amount: 0,
      percentage: 30,
    },
    rating: 4.5,
  },
];

export const topSellingData: Product[] = [
  {
    id: 5,
    title: "Champignon sauvage",
    srcUrl: "/images/pic5.jpg",
    gallery: ["/images/pic5.jpg", "/images/pic10.jpg", "/images/pic11.png"],
    price: 232,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 5.0,
  },
  {
    id: 6,
    title: "Fruits murs",
    srcUrl: "/images/pic6.jpg",
    gallery: ["/images/pic6.jpg", "/images/pic10.jpg", "/images/pic11.png"],
    price: 145,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.0,
  },
  {
    id: 7,
    title: "Miel pur de Kpalimé",
    srcUrl: "/images/pic7.jpg",
    gallery: ["/images/pic7.jpg"],
    price: 80,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 3.0,
  },
  {
    id: 8,
    title: "Miel pur en boites",
    srcUrl: "/images/pic8.jpg",
    gallery: ["/images/pic8.jpg"],
    price: 210,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
];

export const relatedProductData: Product[] = [
  {
    id: 12,
    title: "Miel pur en boites",
    srcUrl: "/images/pic12.jpg",
    gallery: ["/images/pic12.jpg", "/images/pic10.jpg", "/images/pic11.png"],
    price: 242,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 4.0,
  },
  {
    id: 13,
    title: "Fruits murs",
    srcUrl: "/images/pic13.jpg",
    gallery: ["/images/pic13.jpg", "/images/pic10.jpg", "/images/pic11.png"],
    price: 145,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 3.5,
  },
  {
    id: 14,
    title: "Miel jaune",
    srcUrl: "/images/pic14.jpg",
    gallery: ["/images/pic14.jpg"],
    price: 180,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 15,
    title: "Patate douce",
    srcUrl: "/images/pic15.jpg",
    gallery: ["/images/pic15.jpg"],
    price: 150,
    discount: {
      amount: 0,
      percentage: 30,
    },
    rating: 5.0,
  },
];

export const reviewsData: Review[] = [
  {
    id: 1,
    user: "Alex K.",
    content:
      '"Trouver des produits agricoles de qualité était un défi jusqu\'à ce que je découvre AGRI MARKET. La gamme de produits qu\'ils proposent est vraiment impressionnante, répondant à une variété de besoins et d\'occases."',
    rating: 5,
    date: "14 août 2023",
  },
  {
    id: 2,
    user: "Sarah M.",
    content: `"Je suis éblouie par la qualité et la fraîcheur des produits que j'ai reçus d'AGRI MARKET. Des miels artisanaux aux grains de café de haute qualité, chaque produit a dépassé mes attentes."`,
    rating: 5,
    date: "15 août 2023",
  },
  {
    id: 3,
    user: "Ethan R.",
    content: `"Ce miel est un incontournable pour ceux qui apprécient la pureté et la qualité. Le goût est exceptionnel, et on sent que chaque produit est soigneusement récolté. J'ai l'impression de savourer un produit artisanal à chaque cuillère."`,
    rating: 5,
    date: "16 août 2023",
  },
  {
    id: 4,
    user: "Olivia P.",
    content: `"En tant qu'amatrice de produits locaux, je privilégie la simplicité et la qualité. Le miel que j'ai acheté chez AGRI MARKET ne représente pas seulement ces valeurs, mais il a aussi un goût incroyable. Il est évident que les producteurs mettent tout leur savoir-faire dans chaque produit."`,
    rating: 5,
    date: "17 août 2023",
  },
  {
    id: 5,
    user: "Liam K.",
    content: `"Ce café est une fusion de goût et de qualité. Les grains sont frais et l'arôme qui se dégage est incroyable. C'est comme savourer un café qui reflète l'engagement des producteurs pour la qualité."`,
    rating: 5,
    date: "18 août 2023",
  },
  {
    id: 6,
    user: "Samantha D.",
    content: `"J'adore absolument ce café ! Le goût est unique et les grains sont de qualité supérieure. En tant qu'amatrice de produits authentiques, j'apprécie le soin apporté à chaque étape de la production. C'est devenu mon café préféré."`,
    rating: 5,
    date: "19 août 2023",
  },
];


export default function Home() {
  return (
    <>
      <Header />
     
      <main className="my-[50px] sm:my-[72px]">
        <ProductListSec
          title="NOUVEAUTES"
          data={newArrivalsData}
          viewAllLink="/shop#new-arrivals"
        />
        <div className="max-w-frame mx-auto px-4 xl:px-0">
          <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <ProductListSec
            title="En vedette"
            data={topSellingData}
            viewAllLink="/shop#top-selling"
          />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <DressStyle />
        </div>
        <Reviews data={reviewsData} />
      </main>
    </>
  );
}
