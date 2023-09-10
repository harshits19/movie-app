import HomeNavbar from "../components/HomeNavbar";
import HomeVideoSection from "../components/HomeVideoSection";
import HomeCategorySection from "../components/HomeCategorySection";
import useFetch from "../hooks/useFetch";

const HomePage = () => {
  useFetch("popular");
  useFetch("topRated");
  useFetch("nowPlaying");
  // console.log("first");

  return (
    <div className="bg-[#141414]">
      <HomeNavbar />
      <HomeVideoSection />
      <HomeCategorySection />
    </div>
  );
};

export default HomePage;
