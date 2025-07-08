import React from "react";

export const MentionLegalesSection: React.FC = () => (
  <section className="legals-page">
    <h1 className="legals-page__title">Mentions legales</h1>
    <p>Dernière mise à jour : 08/07/2025</p>

    <div className="legals-page__block">
      <h2>Éditeur de l’application</h2>
      <p>
        <strong>Nom :</strong> Moody App, marque de la société Chefclub
      </p>
      <p>
        <strong>Forme :</strong> SAS au capital de 1 000 €
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
        <strong>Responsable de la publication :</strong> Marie KLISNICK
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
        L’ensemble des contenus (textes, images, logos, code source) est protégé
        par le droit d’auteur. Toute reproduction, représentation ou diffusion,
        en tout ou partie, sans autorisation écrite préalable est interdite.
      </p>
    </div>

    <div className="legals-page__block">
      <h2>Conditions générales d’utilisation</h2>
      <p>
        L’accès et l’utilisation de l’application Moody sont soumis aux
        présentes conditions :
        <br /> - Vous vous engagez à ne pas publier de contenus illicites ou
        contraires à l’ordre public.
        <br /> - Toute violation peut entraîner la suspension ou la suppression
        de votre compte.
      </p>
    </div>
  </section>
);
