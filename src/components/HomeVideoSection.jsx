import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { InfoBtn, PlayBtn } from "../assets/SVGs";

const HomeVideoSection = () => {
  const data = useSelector((store) => store.moviesDb?.nowPlaying);
  const [videoData, setVideoData] = useState({});
  useEffect(() => {
    const mainMovie = data[Math.floor(Math.random() * 10)];
    setVideoData(mainMovie);
  }, [data]);
  return (
    <>
      <div className="absolute inset-0 contents">
        <div className="relative w-full h-full overflow-hidden pointer-events-none lg:min-h-[25rem] min-h-[20rem]">
          {data && videoData && (
            <img
              className="object-cover w-full h-full sm:visible invisible "
              src={
                "https://image.tmdb.org/t/p/original/" +
                videoData?.backdrop_path
              }
            />
          )}
          <div className="absolute top-0 left-0 right-[26%] h-full w-full bg-gradient-to-r from-[#00000099] to-transparent"></div>
        </div>
      </div>
      <div className="h-full w-full absolute left-0 top-0 xl:pt-80 lg:pt-60 md:pt-40 pt-28 text-white ">
        <div className="sm:w-1/2 w-full lg:pl-16 md:pl-8 px-4">
          <div className="lg:text-5xl md:text-3xl text-xl font-bold">
            {videoData?.original_title}
          </div>
          <div className="md:text-sm text-xs pt-4">
            {videoData?.overview?.slice(0, 150) + "..."}
          </div>
          <div className="flex mt-4">
            <div className="flex lg:px-6 md:px-4 px-2 lg:py-2 py-1 md:gap-x-[0.75rem] gap-x-1 bg-white text-black lg:text-base sm:text-sm text-xs rounded font-bold cursor-pointer hover:bg-opacity-80 items-center">
              <PlayBtn classList={"md:h-6 md:w-6 h-4 w-4"} />
              Play
            </div>
            <div className="flex lg:px-6 md:px-4 px-2 lg:py-2 py-1 md:gap-x-[0.75rem] gap-x-1 ml-2 bg-[#6d6d6eb3] text-white lg:text-base sm:text-sm text-xs rounded font-semibold cursor-pointer hover:bg-[#6d6d6e66] items-center">
              <InfoBtn classList={"fill-white md:h-6 md:w-6 h-4 w-4"} />
              More Info
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeVideoSection;
