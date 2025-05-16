import Link from "next/link";

function Header() {
  return (
    <header>
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1.5rem",
          fontWeight: "bold",
        }}
      >
        <Link href="/">Accueil</Link>
        <Link href="/recipes">Toutes les recettes</Link>
        <Link href="/auth">Connexion / Inscription</Link>
      </nav>
    </header>
  );
}

export default Header;
