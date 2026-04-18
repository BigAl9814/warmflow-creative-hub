import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import EmergencyCTA from "@/components/EmergencyCTA";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      {/* Bottom padding so sticky CTA never hides content */}
      <main className="flex-1 pb-20">
        <Outlet />
      </main>
      <Footer />
      <EmergencyCTA />
    </div>
  );
};

export default Layout;
