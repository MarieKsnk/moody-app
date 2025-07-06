import React from "react";

export const MentionLegalesSection: React.FC = () => (
  <section className="legals-page">
    <h1 className="legals-page__title">Mentions legales</h1>

    <div className="legals-page__block">
      <h2>Éditeur de l’application</h2>
      <p>
        <strong>Nom :</strong> Moody App, marque de la société Chefclub
      </p>
      <p>
        <strong>Forme :</strong> SAS au capital de 20 000 €
      </p>
      <p>
        <strong>Siège social :</strong> 46 rue René Clair, 75018 Paris, France
      </p>
      <p>
        <strong>RCS Paris :</strong> 754 047 702
      </p>
      <p>
        <strong>TVA intracommunautaire :</strong> FRXX 754047702
      </p>
      <p>
        <strong>Directrice de la publication :</strong> Julia NELIO
      </p>
      <p>
        <strong>Contact :</strong>{" "}
        <a href="mailto:contact.moody@gmail.com">contact.moody@gmail.com</a>
      </p>
    </div>

    <div className="legals-page__block">
      <h2>Hébergeur</h2>
      <p>
        <strong>Vercel Inc.</strong>
        <br />
        340 S Lemon Ave #4133
        <br />
        Walnut, CA 91789, USA
        <br />
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
          vercel.com
        </a>
      </p>
    </div>

    <div className="legals-page__block">
      <h2>Propriété intellectuelle</h2>
      <p>
        Tous les contenus (textes, logos, images, code, design…) de Moody App
        sont protégés par le droit d’auteur et appartiennent à Chefclub ou à ses
        ayants droit. Toute reproduction, intégrale ou partielle, est interdite
        sans autorisation préalable.
      </p>
    </div>

    <div className="legals-page__block">
      <h2>Responsabilité</h2>
      <p>
        Les informations publiées sur Moody App sont fournies “telles quelles” à
        titre informatif. Chefclub s’efforce d’assurer leur exactitude et leur
        mise à jour, mais ne peut en garantir la complétude ni l’actualité.
        L’utilisateur est seul responsable de l’usage qu’il en fait. Chefclub
        décline toute responsabilité quant aux dommages directs ou indirects
        résultant de l’accès ou de l’utilisation de l’application.
      </p>
    </div>
  </section>
);
