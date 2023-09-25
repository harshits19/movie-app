import HomeNavbar from "../components/HomeNavbar";
import HomeVideoSection from "../components/HomeVideoSection";
import HomeCategorySection from "../components/HomeCategorySection";
import { Outlet } from "react-router-dom";
import { fetchData, selectHomeStatus } from "../store/DataSlice";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectHomeStatus);
  if (status === "idle") dispatch(fetchData());
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
