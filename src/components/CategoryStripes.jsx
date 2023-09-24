import ItemCard from "./ItemCard";

const CategoryStripes = ({ data, title = "Movies", type }) => {
  if (!data) return;

  return (
    <div className="flex flex-col">
      <h2 className="cursor-pointer py-4 pl-12 text-xl font-bold text-[#e5e5e5] hover:text-white">
        {title}
      </h2>
      <div className="cardContainer -ml-12 -mt-12 flex gap-x-4 overflow-x-scroll px-24 pb-48 pt-12">
        {data &&
          data?.map((item) => {
            return (
              item?.backdrop_path && (
                <ItemCard item={item} type={type} key={item?.id} />
              )
            );
          })}
      </div>
    </div>
  );
};
export default CategoryStripes;
