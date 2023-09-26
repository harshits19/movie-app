import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useGenres from "../hooks/useGenres";
import { IoAddSharp as AddBtn } from "react-icons/io5";
import {
  BsXLg as CloseBtn,
  BsFillPlayFill as PlayBtn,
  BsHandThumbsUp as LikeBtn,
  BsHandThumbsDown as DislikeBtn,
} from "react-icons/bs";

const ContentPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const item = state?.item;
  const releaseDate = new Date(
    item?.release_date || item?.first_air_date,
  )?.toDateString();

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => (document.body.style.overflowY = "auto");
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-70 md:pt-16">
      <div className="relative mx-auto h-full w-full rounded-lg bg-[#141414] text-white sm:my-auto md:max-w-[700px] lg:max-w-[850px]">
        <div className="relative min-h-[16rem] sm:min-h-[24.5rem] lg:min-h-[29.5rem]">
          {item?.backdrop_path && (
            <img
              src={"https://image.tmdb.org/t/p/w780" + item?.backdrop_path}
              className="h-full min-h-[16rem] w-full rounded-tl-lg rounded-tr-lg opacity-60"
            />
          )}
          <div className="absolute right-4 top-4">
            <Link onClick={() => navigate(-1)}>
              <CloseBtn className="h-8 w-8 rounded-full bg-[#141414] fill-white p-[7px] hover:bg-[#1414149c]" />
            </Link>
          </div>
          <div className="absolute top-1/2 ml-4 w-auto sm:top-2/3 sm:ml-8 sm:w-2/3">
            <div className="line-clamp-2 text-xl font-bold sm:text-3xl lg:text-5xl">
              {item?.title || item?.name || item?.original_name}
            </div>
            <div className="mt-4 flex">
              <div className="flex cursor-pointer items-center gap-x-1 rounded bg-white px-2 py-1 text-xs font-bold text-black hover:bg-opacity-80 sm:text-sm md:px-4 lg:px-6 lg:text-base">
                <PlayBtn className="h-6 w-6 md:h-8 md:w-8" />
                Play
              </div>
              <AddBtn
                className="mx-2 h-9 w-9 cursor-pointer rounded-full border-2 border-[#ffffff80] bg-[#00000061] p-[3px] hover:border-[#e5e5e5]"
                title="Add to list"
              />
              <LikeBtn
                className="mr-2 h-9 w-9 cursor-pointer rounded-full border-2 border-[#ffffff80] bg-[#00000061] p-[7px] hover:border-[#e5e5e5]"
                title="Like"
              />
              <DislikeBtn
                className="mr-2 h-9 w-9 cursor-pointer rounded-full border-2 border-[#ffffff80] bg-[#00000061] p-[7px] hover:border-[#e5e5e5]"
                title="Dislike"
              />
            </div>
          </div>
        </div>
        <div className="relative flex flex-col rounded-lg bg-inherit md:flex-row">
          <div className="w-full p-4 md:w-2/3">
            <div className="font-semibold text-green-500">
              {item?.vote_average > 1
                ? Math.round(item?.vote_average * 10) + "% Match"
                : "80% Match"}
            </div>
            <div className="mt-2">
              {item?.overview ? item?.overview : "No description available"}
            </div>
          </div>
          <div className="w-full p-4 text-base md:w-1/3">
            <div>
              <span className="text-gray-400">Released on : </span>
              {releaseDate ? releaseDate : "N/A"}
            </div>
            <div className="">
              <span className="text-gray-400">{"Genres : "}</span>
              {useGenres(state?.type, item?.genre_ids)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContentPage;
