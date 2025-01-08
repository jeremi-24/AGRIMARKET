import React from "react";
import { FooterLinks } from "./footer.types";
import Link from "next/link";
import { cn } from "@/lib/utils";

const footerLinksData: FooterLinks[] = [
  {
    id: 1,
    title: "Entreprise",
    children: [
      {
        id: 11,
        label: "À propos",
        url: "#",
      },
      {
        id: 12,
        label: "Nos engagements",
        url: "#",
      },
      {
        id: 13,
        label: "Comment ça fonctionne",
        url: "#",
      },
      {
        id: 14,
        label: "Recrutement",
        url: "#",
      },
    ],
  },
  {
    id: 2,
    title: "Assistance",
    children: [
      {
        id: 21,
        label: "Service client",
        url: "#",
      },
      {
        id: 22,
        label: "Détails de livraison",
        url: "#",
      },
      {
        id: 23,
        label: "Conditions générales",
        url: "#",
      },
      {
        id: 24,
        label: "Politique de confidentialité",
        url: "#",
      },
    ],
  },
  {
    id: 3,
    title: "FAQ",
    children: [
      {
        id: 31,
        label: "Compte utilisateur",
        url: "#",
      },
      {
        id: 32,
        label: "Gestion des commandes",
        url: "#",
      },
      {
        id: 33,
        label: "Suivi des livraisons",
        url: "#",
      },
      {
        id: 34,
        label: "Paiements sécurisés",
        url: "#",
      },
    ],
  },
  {
    id: 4,
    title: "Ressources",
    children: [
      {
        id: 41,
        label: "Guides pour les agriculteurs",
        url: "#",
      },
      {
        id: 42,
        label: "Tutoriels sur les cultures",
        url: "#",
      },
      {
        id: 43,
        label: "Blog - Conseils pratiques",
        url: "#",
      },
      {
        id: 44,
        label: "Vidéos éducatives",
        url: "#",
      },
    ],
  },
];


const LinksSection = () => {
  return (
    <>
      {footerLinksData.map((item) => (
        <section className="flex flex-col mt-5" key={item.id}>
          <h3 className="font-medium text-sm md:text-base uppercase tracking-widest mb-6">
            {item.title}
          </h3>
          {item.children.map((link) => (
            <Link
              href={link.url}
              key={link.id}
              className={cn([
                link.id !== 41 && link.id !== 43 && "capitalize",
                "text-black/60 text-sm md:text-base mb-4 w-fit",
              ])}
            >
              {link.label}
            </Link>
          ))}
        </section>
      ))}
    </>
  );
};

export default LinksSection;
