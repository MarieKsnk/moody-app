import { IAppLayoutProps } from "./AppLayout.props";
import { Header } from "../organisms/Nav/Header";
import { Footer } from "../organisms/Footer/Footer";

export const AppLayout: React.FC<IAppLayoutProps> = ({ children }) => {
  return (
    <div className="app-layout">
      <Header />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
};
