import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      Main
      <Outlet />
      Footer
    </div>
  );
};

export default Main;
