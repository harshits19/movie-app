import { useSelector } from "react-redux";
import { InfoBtn, PlayBtn } from "../assets/SVGs";

const HomeVideoSection = () => {
  const data = useSelector((store) => store.moviesDb?.nowPlaying);
  if (!data) return;
  const mainMovie = data[Math.floor(Math.random() * 10)];
  return (
    <div className="relative">
      {mainMovie?.backdrop_path ? (
        <div className="absolute inset-0 contents">
          <div className="relative w-full h-full overflow-hidden pointer-events-none md:min-h-[30rem] min-h-[20rem]">
            <img
              className="object-cover w-full aspect-video sm:visible invisible"
              src={
                "https://image.tmdb.org/t/p/original/" +
                mainMovie?.backdrop_path
              }
            />
            <div className="absolute top-0 left-0 right-[26%] h-full w-full bg-gradient-to-r from-[#00000099] to-transparent"></div>
            <div className="absolute right-0 left-0 bg-transparent h-[14.7vw] opacity-100 w-full top-auto -bottom-px bg-[linear-gradient(180deg,#14141400_0,#14141426_15%,#14141459_29%,#14141494_44%,#141414_68%,#141414)] bg-[0_top] bg-repeat-x"></div>
          </div>
        </div>
      ) : (
        <div className="bg-transparent w-full h-full min-h-screen"></div>
      )}
      <div className="h-full w-full absolute left-0 top-0 xl:pt-80 lg:pt-60 md:pt-40 pt-28 text-white ">
        <div className="xl:w-1/3 sm:w-1/2 w-full lg:pl-16 md:pl-8 px-4">
          <div className="lg:text-5xl md:text-3xl text-xl font-bold">
            {mainMovie?.original_title}
          </div>
          <div className="md:text-sm text-xs pt-4">
            {mainMovie?.overview?.slice(0, 150) + "..."}
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
    </div>
  );
};
export default HomeVideoSection;
