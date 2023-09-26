import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CategoryStripes from "../components/CategoryStripes";
import StripeShimmer from "../components/StripeShimmer";
import { fetchMovieByGenre } from "../store/MovieSlice";
import { selectMovieData, selectMovieStatus } from "../store/MovieSlice";
import { Genres } from "../utilities/Constants";

const MoviePage = () => {
  const dispatch = useDispatch();
  const selectHandler = (event) => {
    dispatch(fetchMovieByGenre(event.target.value));
  };
  const { latest, popular, trending, topRated } = useSelector(selectMovieData);
  const status = useSelector(selectMovieStatus);

  return (
    <div className="relative">
      <div className="mt-20 flex h-full w-full items-center gap-x-4 md:mt-32">
        <h1 className="ml-8 text-2xl font-bold text-white sm:ml-12 md:text-3xl lg:text-5xl">
          Movies
        </h1>
        <select
          onChange={selectHandler}
          className="h-full w-min cursor-pointer border-2 border-white bg-[rgba(0,0,0,0.08)] text-white hover:bg-[rgba(73,72,72,0.18)] sm:py-1"
        >
          <option className="bg-[#141414]">Genres</option>
          {Genres?.movie?.map((option) => {
            return (
              <option
                className="bg-[#141414]"
                key={option?.id}
                value={option?.id}
              >
                {option?.name}
              </option>
            );
          })}
        </select>
      </div>
      {status === "success" && (
        <div className="categoryStripes relative pt-8">
          <CategoryStripes data={latest} title="Latest Movies" type="movie" />
          <CategoryStripes data={popular} title="Popular Movies" type="movie" />
          <CategoryStripes
            data={trending}
            title="Trending Movies"
            type="movie"
          />
          <CategoryStripes
            data={topRated}
            title="Top Rated Movies"
            type="movie"
          />
        </div>
      )}
      {status === "loading" && (
        <div className="relative ml-8 mt-8 sm:ml-12">
          <StripeShimmer title="Latest" type="Movies" />
          <StripeShimmer title="Popular" type="Movies" />
          <StripeShimmer title="Trending" type="Movies" />
        </div>
      )}
      {status === "failed" && (
        <div className="relative ml-12 mt-8">
          <h1 className="text-center text-3xl text-white">
            Error, cannot find movies related to selected genre.
          </h1>
        </div>
      )}
      <Outlet />
    </div>
  );
};
export default MoviePage;
