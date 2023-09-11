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
    fetch(`${ApiURL?.nowPlaying}`, fetch_options)
      .then((res) => res.json())
      .then((res) => dispatch(addNowPlayingMovies(res?.results)))
      .catch((err) => console.log(err));
  };
  const fetchPopularMovies = async () => {
    fetch(`${ApiURL?.popular}`, fetch_options)
      .then((res) => res.json())
      .then((res) => dispatch(addPopularMovies(res?.results)))
      .catch((err) => console.log(err));
  };
  const fetchTopRatedMovies = async () => {
    fetch(`${ApiURL?.topRated}`, fetch_options)
      .then((res) => res.json())
      .then((res) => dispatch(addTopRatedMovies(res?.results)))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    type === "nowPlaying" && !nowPlaying && fetchNowPlayingMovies();
    type === "popular" && !popular && fetchPopularMovies();
    type === "topRated" && !topRated && fetchTopRatedMovies();
  }, []);
};
export default useFetch;
