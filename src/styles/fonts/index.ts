import localFont from "next/font/local";
import { Poppins } from "next/font/google";

// Police locale : IntegralCF
const integralCF = localFont({
  src: [
    {
      path: "./integralcf-bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  fallback: ["sans-serif"],
  variable: "--font-integralCF",
});

// Police locale : Satoshi
const satoshi = localFont({
  src: [
    {
      path: "./Satoshi-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Satoshi-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Satoshi-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  fallback: ["sans-serif"],
  variable: "--font-satoshi",
});

// Police Google : Poppins
const poppins = Poppins({
  weight: ["400", "500", "700"], // Spécifiez les poids que vous souhaitez charger
  subsets: ["latin"],           // Subsets pour optimiser le chargement
  variable: "--font-poppins",   // Nom de la variable CSS
  display: "swap",              // Optimisation pour le chargement
});

export { integralCF, satoshi, poppins };
