import { useSelector } from "react-redux";
const HomeCategorySection = () => {
  const data = useSelector((store) => store.moviesDb?.nowPlaying);
  console.log(data);
  return (
    <div className="text-white">
      HomeCategorySection
      <div className="flex gap-x-4 overflow-x-auto w-full">
        {data.length > 0 &&
          data?.map((item) => {
            return (
              <img
                key={item?.id}
                className="h-64 w-52"
                src={"https://image.tmdb.org/t/p/original" + item?.poster_path}
              />
            );
          })}
      </div>
    </div>
  );
};
export default HomeCategorySection;
