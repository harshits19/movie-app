import { Link } from "react-router-dom";
import { selectHomeData } from "../utilities/DataSlice";
import { useSelector } from "react-redux";
import { BsFillPlayFill as PlayBtn } from "react-icons/bs";
import { AiOutlineInfoCircle as InfoBtn } from "react-icons/ai";

const HomeVideoSection = () => {
  const { nfOriginals } = useSelector(selectHomeData);
  if (!nfOriginals) return;
  const mainMovie = nfOriginals[Math.floor(Math.random() * 10)];
  // console.log(mainMovie);
  return (
    <div className="relative">
      <div className="absolute inset-0 contents">
        <div className="pointer-events-none relative h-full min-h-[20rem] overflow-hidden sm:aspect-video">
          {mainMovie?.backdrop_path && (
            <img
              className="h-full min-h-[20rem] object-cover sm:aspect-video"
              src={
                "https://image.tmdb.org/t/p/original/" +
                mainMovie?.backdrop_path
              }
            />
          )}
          <div className="absolute left-0 right-[26%] top-0 h-full w-full bg-gradient-to-r from-[#00000099] to-transparent"></div>
          <div className="absolute -bottom-px left-0 right-0 top-auto h-[14.7vw] w-full bg-transparent bg-[linear-gradient(180deg,#14141400_0,#14141426_15%,#14141459_29%,#14141494_44%,#141414_68%,#141414)] bg-[0_top] bg-repeat-x opacity-100"></div>
        </div>
      </div>
      <div className="absolute left-0 top-0 h-full w-full pt-28 text-white md:pt-40 lg:pt-60 xl:pt-80 ">
        <div className="w-full px-4 sm:w-1/2 md:pl-8 lg:pl-16 xl:w-1/3">
          <div className="text-xl font-bold md:text-3xl lg:text-5xl">
            {mainMovie?.title || mainMovie?.original_name}
          </div>
          <div className="pt-4 text-xs font-semibold md:text-sm">
            {mainMovie?.overview?.slice(0, 150) + "..."}
          </div>
          <div className="mt-4 flex">
            <Link
              to={"" + mainMovie?.id}
              state={{ item: mainMovie, type: "tv" }}
              className="contents"
            >
              <div className="flex cursor-pointer items-center gap-x-1 rounded bg-white px-2 py-1 text-xs font-bold text-black hover:bg-opacity-80 sm:text-sm md:px-4 lg:px-6 lg:py-1.5 lg:text-base">
                <PlayBtn className="h-6 w-6 md:h-8 md:w-8" />
                Play
              </div>
            </Link>
            <Link
              to={"" + mainMovie?.id}
              state={{ item: mainMovie, type: "tv" }}
              className="contents"
            >
              <div className="ml-2 flex cursor-pointer items-center gap-x-1 rounded bg-[#6d6d6eb3] px-2 py-1 text-xs font-semibold text-white hover:bg-[#6d6d6e66] sm:text-sm md:gap-x-[0.75rem] md:px-4 lg:px-6 lg:py-1.5 lg:text-base">
                <InfoBtn className="h-5 w-5 fill-white md:h-7 md:w-7" />
                More Info
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeVideoSection;
