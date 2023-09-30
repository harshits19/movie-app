import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import ItemCard from "../components/ItemCard"
import UseTop from "../hooks/useTop"

const UserLibrary = () => {
  const user = useSelector((store) => store.user?.user)
  const list = useSelector((store) => store.libraryData?.data)
  const uid = user?.userId
  const data = list[uid]

  return (
    <div className="mb-52 ml-8 mt-20 md:mt-36 text-white sm:ml-12">
      <h1 className="text-2xl font-bold text-white md:text-3xl lg:text-5xl">My List</h1>
      <div className="mr-4 mt-8 flex flex-wrap gap-x-4 gap-y-8 lg:gap-y-16">
        {data?.map((items) => {
          return <ItemCard item={items.item} type={items?.type} key={items?.item?.id} uid={uid} list={list} />
        })}
      </div>
      <Outlet />
      <UseTop />
    </div>
  )
}
export default UserLibrary
