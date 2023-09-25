import { Outlet } from "react-router-dom";
import HomeNavbar from "./HomeNavbar";

const HomeBody = () => {
  return (
    <div>
      <HomeNavbar />
      <Outlet />
    </div>
  );
};
export default HomeBody;
