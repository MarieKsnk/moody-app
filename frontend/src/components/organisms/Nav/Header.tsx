import { DesktopNav } from "@/components/molecules/Nav/DesktopNav";
import { MobileNav } from "@/components/molecules/Nav/MobileNav";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="mobile-nav">
        <MobileNav />
      </div>

      <div className="desktop-nav">
        <DesktopNav />
      </div>
    </header>
  );
};
