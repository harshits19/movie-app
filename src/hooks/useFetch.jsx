const useFetch = async (type, params = "") => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: import.meta.env.VITE_REACT_APP_API_KEY,
    },
  };
  let URL = "";
  if (type === "popular")
    URL = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
  else if (type === "topRated")
    URL = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
  else if (type === "nowPlaying")
    URL =
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
  else if (type === "movie")
    URL = `https://api.themoviedb.org/3/movie/${params}`;
  else if (type === "movieImg")
    URL = `https://api.themoviedb.org/3/movie/${params}/images`;
  else if (type === "movieVideo")
    URL = `https://api.themoviedb.org/3/movie/${params}/videos`;
  const response = await fetch(`${URL}`, options);
  const data = await response.json();
  return data;
};
export default useFetch;
