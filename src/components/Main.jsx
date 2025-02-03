import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./home/Footer";

const Main = () => {
  return (
    <div>
      <Navbar/>
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Main;
