import { Outlet } from "react-router-dom";
import Navbar from "../header/Navbar";
import Footer from "../footer/Footer";

const Layout = () => {
  return (
    <>
      <main className="w-[90%] mx-auto flex-1 max-w-[1164px] min-h-[calc(100vh-84px)]">
        <Navbar />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
