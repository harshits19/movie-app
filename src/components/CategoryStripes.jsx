import { Link } from "react-router-dom";
const CategoryStripes = ({ data, title = "Movies" }) => {
  if (!data) return;
  return (
    <div>
      <h2 className="text-xl py-4 text-[#e5e5e5] hover:text-white font-bold cursor-pointer pl-2">
        {title}
      </h2>
      <div className="flex overflow-x-scroll overflow-y-hidden w-full hpCatStripes">
        {data &&
          data?.map((item) => {
            console.log(item);
            return (
              item?.backdrop_path && (
                <Link key={item?.id} to={"" + item?.id}>
                  <div>
                    <div className="cursor-pointer h-28 w-52 mx-2 hover:scale-105 ease-in-out duration-200">
                      <img
                        className="h-full w-full rounded-sm cursor-pointer  "
                        src={
                          "https://image.tmdb.org/t/p/w400" +
                          item?.backdrop_path
                        }
                      />
                    </div>
                  </div>
                </Link>
              )
            );
          })}
      </div>
    </div>
  );
};
export default CategoryStripes;
