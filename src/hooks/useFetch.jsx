import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
} from "../utilities/MovieSlice";
import { ApiURL, fetch_options } from "../utilities/Constants";

const useFetch = (type) => {
  const dispatch = useDispatch();
  const { nowPlaying, topRated, popular } = useSelector(
    (store) => store.moviesDb
  );

  const fetchNowPlayingMovies = async () => {
    const response = await fetch(`${ApiURL?.nowPlaying}`, fetch_options);
    const data = await response.json();
    dispatch(addNowPlayingMovies(data?.results));
  };
  const fetchPopularMovies = async () => {
    const response = await fetch(`${ApiURL?.popular}`, fetch_options);
    const data = await response.json();
    dispatch(addPopularMovies(data?.results));
  };
  const fetchTopRatedMovies = async () => {
    const response = await fetch(`${ApiURL?.topRated}`, fetch_options);
    const data = await response.json();
    dispatch(addTopRatedMovies(data?.results));
  };

  useEffect(() => {
    type === "nowPlaying" && !nowPlaying && fetchNowPlayingMovies();
    type === "popular" && !popular && fetchPopularMovies();
    type === "topRated" && !topRated && fetchTopRatedMovies();
  }, []);
};
export default useFetch;
