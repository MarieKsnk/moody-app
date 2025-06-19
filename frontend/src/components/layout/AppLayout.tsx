import { IAppLayoutProps } from "./AppLayout.props";
import { Header } from "../organisms/Header";

export const AppLayout: React.FC<IAppLayoutProps> = ({ children }) => {
  return (
    <div className="app-layout">
      <Header />
      <main className="main-content">{children}</main>
    </div>
  );
};
