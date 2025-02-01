import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <div>
      <Navbar/>
      <Outlet />
      Footer
    </div>
  );
};

export default Main;
