import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";

import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Moody",
    description: "Application de recettes"
}

function Layout({ children }: { children: React.ReactNode }) {

    return (
        <html lang="fr">
            <body style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          margin: 0,
          backgroundColor: '#fff6f0',
          fontFamily: 'sans-serif',
        }}>
            <Header />
            <main style={{
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    textAlign: 'center',
  }}>
            { children }
            </main>
            <Footer />
            </body>
        </html>
    )
}

export default Layout;