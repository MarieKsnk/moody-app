import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NavLink } from "@/components/atoms/Nav/nav_link";

export const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer__main-content">
      <div className="footer__logo">
        <Image
          src="/assets/logo_moody_light.svg"
          alt="Logo Moody"
          width={200}
          height={60}
          priority
        />
      </div>

      <nav className="footer__nav" aria-label="Navigation secondaire">
        <h2 className="footer__title">Recettes</h2>
        <ul className="footer__list">
          <NavLink href="/" label="Recettes par catégories" />
          <NavLink href="/" label="Recettes par régimes" />
          <NavLink href="/" label="Recettes par moods" />
          <NavLink href="/" label="Recettes par origines" />
          <NavLink href="/" label="Toutes les recettes" />
        </ul>
      </nav>

      <div className="footer__contact">
        <h2 className="footer__title">Contact</h2>
        <a href="mailto:contact.moody@gmail.com" className="footer__email">
          contact.moody@gmail.com
        </a>
      </div>
    </div>

    <div className="footer__separator">
      <span></span>
    </div>

    <div className="footer__legal">
      <Link href="/mentions-legales" className="link">
        Mentions legales
      </Link>
      <Link href="/politique-confidentialite" className="link">
        Politique de confidentialité
      </Link>
    </div>

    <div className="footer__meta">
      <p>©2025 Moody App. Tous droits réservés.</p>
      <p>v1.0.0</p>
    </div>
  </footer>
);
