import Link from "next/link";

function Footer() {
    return (
            <nav style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1.5rem',
                fontWeight: 'bold',
              }}>
                <Link href="/" style={{ padding: '0.5rem 1rem' }}>Accueil</Link>
                <Link href="/recipes" style={{ padding: '0.5rem 1rem' }}>Toutes les recettes</Link>
                <Link href="/auth" style={{ padding: '0.5rem 1rem' }}>Connexion / Inscription</Link>
                <Link href="/legals" style={{ padding: '0.5rem 1rem' }}>Mentions légales</Link>
            </nav>
    )
}

export default Footer;