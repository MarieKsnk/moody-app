import React from "react";

export const PolitiqueConfidentialiteSection: React.FC = () => (
  <section className="legals-page">
    <h1 className="legals-page__title">Politique de confidentialite</h1>
    <p>Dernière mise à jour : 08/07/2025</p>

    <div className="legals-page__block">
      <h2>Responsable de l'application</h2>
      <p>
        <strong>Société :</strong> Chefclub (Moody App)
      </p>
      <p>
        <strong>Adresse :</strong> 46 rue René Clair, 75018 Paris, France
      </p>
      <p>
        <strong>Contact :</strong>{" "}
        <a href="mailto:contact@chefclub.com">contact@chefclub.com</a>
      </p>
    </div>

    <div className="legals-page__block">
      <h2>Finalités du traitement de vos données</h2>
      <p>Nous collectons et traitons vos données pour :</p>
      <p>
        - Créer et gérer votre compte utilisateur (email, mot de passe haché,
        nom, prénom).
      </p>
      <p>
        - Vous proposer des recommandations de recettes (catégories, moods,
        etc).
      </p>
      <p>- Assurer la sécurité et la maintenance de la plateforme.</p>
    </div>

    <div className="legals-page__block">
      <h2>Données collectées</h2>
      <p>
        <strong>Données d’identification :</strong> nom, prénom, email, photo de
        profil (si fournie a l'inscription).
      </p>
      <p>
        <strong>Données fonctionnelles :</strong> recettes ajoutées (infos &
        photos), catégories choisies.
      </p>
    </div>

    <div className="legals-page__block">
      <h2>Durée de conservation</h2>
      <p>
        <strong>Données de compte et recettes :</strong> jusqu’à suppression du
        compte par l’utilisateur ou trois ans d’inactivité.
      </p>
      <p>
        <strong>Logs de connexion :</strong> 13 mois maximum, conformément à la
        réglementation.
      </p>
    </div>

    <div className="legals-page__block">
      <h2>Destinataires</h2>
      <p>
        Vos données sont accessibles uniquement aux services internes de
        Chefclub (développement, support, marketing) et, le cas échéant, aux
        prestataires techniques (hébergeur Vercel, plateforme d’emailing) liés
        par contrat à une obligation de confidentialité.
      </p>
    </div>

    <div className="legals-page__block">
      <h2>Sécurité</h2>
      <p>- Hébergement sécurisé (HTTPS).</p>
      <p>- Mots de passe stockés de façon hachée.</p>
      <p>- Protection contre les attaques courantes.</p>
    </div>

    <div className="legals-page__block">
      <h2>Vos droits</h2>
      <p>Conformément au RGPD, vous disposez de :</p>
      <p>
        - Droit d’accès, de rectification et de suppression de vos données (art.
        15 à 17 RGPD).
      </p>
      <p>- Droit à la portabilité (art. 20 RGPD).</p>
      <p>
        - Droit d’opposition et de limitation du traitement (art. 18 et 21
        RGPD).
      </p>
      <p>- Droit de retirer votre consentement à tout moment.</p>
      <p>
        - Droit d’introduire une réclamation auprès de la CNIL (
        <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
          www.cnil.fr
        </a>
        ).
      </p>
      <p>
        Pour exercer vos droits, contactez :{" "}
        <a href="mailto:contact@chefclub.com">contact@chefclub.com</a>
      </p>
    </div>

    <div className="legals-page__block">
      <h2>Modification de la politique</h2>
      <p>
        Nous pouvons être amenés à mettre à jour cette politique, la date de
        dernière mise a jour est indiquée en haut de la page. Toute modification
        vous sera signalée lors de votre prochaine connexion.
      </p>
    </div>
  </section>
);
