import { useSelector } from "react-redux";
import CategoryStripes from "./CategoryStripes";
import { selectHomeData } from "../store/DataSlice";

const HomeCategorySection = () => {
  const { trendingMovies, trendingTV, nfOriginals, netflixTV } =
    useSelector(selectHomeData);
  if (!trendingMovies || !trendingTV || !nfOriginals || !netflixTV) return;
  return (
    <div className="categoryStripes relative -mt-7 overflow-x-hidden pb-16 sm:-mt-16 2xl:-mt-28">
      <CategoryStripes data={nfOriginals} title="Netflix Originals" type="tv" />
      <CategoryStripes data={trendingTV} title="Trending TV Shows" type="tv" />
      <CategoryStripes
        data={trendingMovies}
        title="Popular Movies"
        type="movie"
      />
      <CategoryStripes data={netflixTV} title="Popular TV Shows" type="tv" />
    </div>
  );
};
export default HomeCategorySection;
