import { Outlet } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const AppLayout = () => {
  return (
    <>
      <div className="h-screen min-w-xs">
        <Header></Header>
        <main className="h-screen">
          <Outlet />
        </main>
        <Footer></Footer>         
      </div>
    </>
  );
};

export default AppLayout;