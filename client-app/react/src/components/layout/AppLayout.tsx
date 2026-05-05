import { Outlet } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SidebarProvider } from "@/components/ui/sidebar";
import SidebarOverlay from "./SidebarOverlay";
import ScrollToTop from "./ScrollToTop";

const AppLayout = () => {
  return (
    <>
      <SidebarProvider defaultOpen={false}>
        {/* <SidebarOverlay></SidebarOverlay> */}
        <div className="flex flex-col min-h-screen w-full min-w-xs overflow-x-clip">
          <Header className="sticky z-50"></Header>
          <main className="flex-1 w-full px-4 md:px-8 lg:px-12">
            <Outlet />
          </main>
          <ScrollToTop></ScrollToTop>
          <Footer></Footer>
        </div>
      </SidebarProvider>
    </>
  );
};

export default AppLayout;
