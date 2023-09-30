import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { BsPencilSquare as EditBtn } from "react-icons/bs"

const AccountInfo = () => {
  const user = useSelector((store) => store.user.user)

  return (
    <div className="mb-52 ml-8 mt-20  sm:ml-12 md:mt-28 lg:mt-36">
      <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">Account</h1>
      <div className="mr-4 mt-4 md:mt-8 flex flex-wrap gap-x-4 gap-y-8 overflow-hidden lg:gap-y-16">
        <div className="group flex gap-x-4 sm:gap-x-8 w-full flex-wrap">
          <div className="relative cursor-pointer">
            {user ? (
              <img src={user?.photoURL} className="h-28 w-28 rounded-md border-2 border-transparent duration-200 ease-in-out group-hover:border-white sm:h-40 sm:w-40" />
            ) : (
              <div className="h-28 w-28 rounded-md bg-[#1a1a1a] sm:h-40 sm:w-40"></div>
            )}
            <div className="invisible absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1a1a1a] bg-opacity-80 duration-200 ease-in-out group-hover:visible">
              <Link to="edit" className="contents">
                <EditBtn className="h-16 w-16 p-5 text-white" />
              </Link>
            </div>
          </div>
          <div className="text-white cursor-default">
            <span className="mt-2 line-clamp-2 break-all text-xl md:text-2xl font-bold">{user?.name}</span>
            <div className="mt-2 line-clamp-2 break-all text-base font-medium italic">{user?.email}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AccountInfo
