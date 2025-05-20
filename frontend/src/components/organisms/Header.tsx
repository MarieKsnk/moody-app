import Link from 'next/link';


export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link href="/">Accueil</Link></li>
          <li><Link href="/login">Connexion</Link></li>
          <li><Link href="/register">Inscription</Link></li>
          <li><Link href="/profile">Profil</Link></li>
        </ul>
      </nav>
    </header>
  );
}
