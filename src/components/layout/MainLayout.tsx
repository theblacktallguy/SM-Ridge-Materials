import type { ReactNode } from "react";
import Header from "@/components/navigation/Header";
import Footer from "./Footer";
import FloatingActions from "@/components/common/FloatingActions";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <main className="page-main">{children}</main>
      <Footer />
      <FloatingActions />
    </>
  );
};

export default MainLayout;