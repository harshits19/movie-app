import HomeNavbar from "../components/HomeNavbar";
import HomeVideoSection from "../components/HomeVideoSection";
import HomeCategorySection from "../components/HomeCategorySection";
import useFetch from "../hooks/useFetch";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  useFetch("popular");
  useFetch("topRated");
  useFetch("nowPlaying");
  return (
    <div className="bg-[#141414]">
      <HomeNavbar />
      <HomeVideoSection />
      <HomeCategorySection />
      <Outlet />
    </div>
  );
};

export default HomePage;
