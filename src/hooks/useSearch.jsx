import { addQuery } from "../store/SearchSlice";
import { fetch_options } from "../utilities/Constants";

const useSearch = async (query, setData, dispatch) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/multi?query=${query}&page=1`,
    fetch_options,
  );
  const data = await res.json();
  const filteredMovies = data?.results?.filter(
    (item) => item.media_type === "movie",
  );
  const filteredTv = data?.results?.filter((item) => item.media_type === "tv");
  dispatch(addQuery({ [query]: { movie: filteredMovies, tv: filteredTv } }));
  setData({ movie: filteredMovies, tv: filteredTv });
};
export default useSearch;
