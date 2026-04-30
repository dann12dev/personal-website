import { Outlet } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const AppLayout = () => {
  return (
    <>
      <div className="flex flex-col h-screen min-w-xs">
        <Header className="bg-amber-500"></Header>
        <main className="bg-blue-300">
          <Outlet />
        </main>
        <Footer className="bg-amber-500"></Footer>         
      </div>
    </>
  );
};

export default AppLayout;