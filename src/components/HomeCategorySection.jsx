import { useSelector } from "react-redux";
import CategoryStripes from "./CategoryStripes";
const HomeCategorySection = () => {
  const { nowPlaying, topRated, popular } = useSelector(
    (store) => store.moviesDb
  );
  if (!nowPlaying || !topRated || !popular) return;
  return (
    <div className="lg:pl-16 md:pl-8 pl-4 pb-16 sm:-mt-16 2xl:-mt-28 mt-0 z-10 relative">
      <CategoryStripes data={popular} title="Popular Movies" />
      <CategoryStripes data={topRated} title="Top Rated Movies" />
      <CategoryStripes data={nowPlaying} title="Now Playing" />
    </div>
  );
};
export default HomeCategorySection;
