import { useSelector } from "react-redux"
import ItemCard from "./ItemCard"

const CategoryStripes = ({ data, title = "", type }) => {
  if (!data) return
  const user = useSelector((store) => store.user?.user)
  const list = useSelector((store) => store.libraryData?.data)
  return (
    <div className="flex flex-col">
      <h2 className="cursor-pointer py-4 pl-8 text-xl font-bold text-[#e5e5e5] hover:text-white sm:pl-12">{title}</h2>
      <div className="cardContainer -ml-8 -mt-12 flex gap-x-4 overflow-x-scroll px-16 pb-48 pt-12 sm:-ml-12 sm:px-24">
        {data &&
          data?.map((item) => {
            return item?.backdrop_path && <ItemCard item={item} type={type} key={item?.id} uid={user?.userId} list={list} />
          })}
      </div>
    </div>
  )
}
export default CategoryStripes
