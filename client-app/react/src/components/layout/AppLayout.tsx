import { Outlet } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const AppLayout = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
            <main className="container mx-auto p-2">
              <Header className="h-8"></Header>
                <Outlet />
              <Footer></Footer>  
            </main>
      </div>
    </>
  );
};

export default AppLayout;