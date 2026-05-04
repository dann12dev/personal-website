import { Outlet } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const AppLayout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen w-full lg:max-w-[1024px] xl:max-w-[1280px] mx-auto min-w-xs overflow-x-clip">
        <Header></Header>
        <main className="flex-1 w-full px-4 md:px-8 lg:px-12">
          <Outlet />
        </main>
        <Footer></Footer>         
      </div>
    </>
  );
};

export default AppLayout;