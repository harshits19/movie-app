import VideoCard from "./VideoCards";
const CategoryStripes = ({ data, title = "Movies" }) => {
  if (!data) return;
  // console.log(data);
  return (
    <div>
      <h2 className="text-xl py-4 text-[#e5e5e5] hover:text-white font-bold cursor-pointer">
        {title}
      </h2>
      <div className="flex gap-x-4 overflow-x-scroll w-full hpCatStripes">
        {data &&
          data?.map((item) => {
            return <VideoCard item={item} key={item?.id} />;
          })}
      </div>
    </div>
  );
};
export default CategoryStripes;
