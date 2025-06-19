import { ReactNode } from "react";
import Header from "@/components/organisms/Header";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="app-layout">
      <Header />
      <main className="main-content">{children}</main>
    </div>
  );
}
