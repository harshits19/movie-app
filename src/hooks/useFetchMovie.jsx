import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMovieToCache } from "../utilities/MovieSlice";
import { fetch_options } from "../utilities/Constants";
const useFetchMovie = (movieId) => {
  const movieCache = useSelector((store) => store.moviesDb?.movieCache);
  const dispatch = useDispatch();
  if (!movieCache) return;
  const fetchMovieDetails = async () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      fetch_options
    )
      .then((response) => response.json())
      .then((response) => dispatch(addMovieToCache({ [movieId]: response })))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    if (!movieCache[movieId]) fetchMovieDetails();
  }, []);
};
export default useFetchMovie;
