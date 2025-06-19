import { NavBar } from "../molecules/Nav/NavBar";
import MobileMenu from "../molecules/Nav/MobileNav";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="mobile-menu">
        <MobileMenu />
      </div>

      <div className="desktop-nav">
        <NavBar />
      </div>
    </header>
  );
};
