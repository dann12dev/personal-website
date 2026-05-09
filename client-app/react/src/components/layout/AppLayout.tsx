import { Outlet } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SidebarProvider } from "@/components/ui/sidebar";
import ScrollToTop from "@/components/common/ScrollToTop";
import { useState } from "react";

const AppLayout = () => {
  const [isHeaderMode, setIsHeaderMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);;

  return (
    <>
      <SidebarProvider defaultOpen={false}>
        {/* <SidebarOverlay></SidebarOverlay> */}
        <div className="flex flex-col min-h-screen size-full min-w-xs overflow-x-clip">
          <Header className="sticky z-50" isScrolled={isScrolled} isHeaderMode={isHeaderMode}></Header>
          <div className="w-full pointer-events-none" />
          <main className="flex-1 size-full">
            <Outlet context={{ setIsScrolled, setIsHeaderMode }}/>
          </main>
          <ScrollToTop></ScrollToTop>
          <Footer></Footer>
        </div>
      </SidebarProvider>
    </>
  );
};

export default AppLayout;
