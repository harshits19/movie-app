import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { PlayBtn, PlusIcon } from "../assets/SVGs";
import useFetchMovie from "../hooks/useFetchMovie";

const MoviePage = () => {
  const { movieId } = useParams();
  useFetchMovie(movieId);
  const movieCache = useSelector((store) => store.moviesDb?.movieCache);
  const movieData = movieCache[movieId];
  const releaseDate = new Date(movieData?.release_date)
    ?.toDateString()
    .slice(4);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <div className="z-50 transition duration-300 bg-black bg-opacity-70 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0">
      <div className="relative w-full mx-auto max-w-[850px] h-full rounded bg-[#141414] text-white">
        <div className="relative min-h-[16rem]">
          {movieData?.backdrop_path && (
            <img
              src={
                "https://image.tmdb.org/t/p/original" + movieData?.backdrop_path
              }
              className="h-full w-full opacity-70 min-h-[16rem]"
            />
          )}
          <div className="absolute top-4 right-4">
            <Link to={"/home"}>
              <PlusIcon
                classList={
                  "rotate-45 h-8 w-8 p-[5px] fill-white rounded-full bg-[#141414] hover:bg-[#1414149c]"
                }
              />
            </Link>
          </div>
          <div className="absolute sm:top-1/3 top-1/3 sm:ml-8 ml-4 sm:w-2/3 w-full">
            <div className="lg:text-5xl sm:text-3xl text-xl font-bold">
              {movieData?.title}
            </div>
            <div className="lg:text-2xl sm:text-xl text-sm mt-2 font-semibold">
              {movieData?.tagline?.slice(0, 100)}
            </div>

            <div className="flex mt-4">
              <div className="flex lg:px-6 md:px-4 px-2 lg:py-2 py-1 md:gap-x-[0.75rem] gap-x-1 bg-white text-black lg:text-base sm:text-sm text-xs rounded font-bold cursor-pointer hover:bg-opacity-80 items-center">
                <PlayBtn classList={"md:h-6 md:w-6 h-4 w-4"} />
                Play
              </div>
              <div className="cursor-pointer ml-2">
                <PlusIcon
                  classList={
                    "lg:h-10 lg:w-10 md:h-8 md:w-8 sm:h-7 sm:w-7 h-6 w-6 md:p-2 p-1 bg-[#0000002c] border-2 border-[#ffffff80] hover:border-white fill-white rounded-full"
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col">
          <div className="md:w-2/3 w-full p-4">
            <div className="text-green-500 font-semibold">
              {"★ " +
                (movieData?.vote_average ? movieData?.vote_average : "No") +
                " Stars"}
            </div>
            <div className="mt-2">
              {movieData?.overview
                ? movieData?.overview
                : "No description available"}
            </div>
          </div>
          <div className="md:w-1/3 w-full p-4 text-base">
            <div>
              <span className="text-gray-400">Released on : </span>
              {releaseDate ? releaseDate : "N/A"}
            </div>
            <div className="">
              <span className="text-gray-400">{"Genres : "}</span>
              {movieData?.genres
                ? movieData?.genres?.map((item) => {
                    return <span key={item?.name}>{item?.name + ", "}</span>;
                  })
                : "N/A"}
            </div>
            <div className="">
              <span className="text-gray-400">Available in : </span>
              {movieData?.spoken_languages
                ? movieData?.spoken_languages?.map((item) => {
                    return (
                      <span key={item?.name}>
                        {item?.name || item?.english_name + ", "}
                      </span>
                    );
                  })
                : "N/A"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MoviePage;
