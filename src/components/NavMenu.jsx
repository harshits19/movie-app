import { Link } from "react-router-dom"

const NavMenu = () => {
  return (
    <div className="contents">
      <div className="hidden gap-x-2 md:flex lg:gap-x-4">
        <Link to="/home" className="contents">
          <span className="cursor-pointer text-xs font-medium lg:text-sm">Home</span>
        </Link>
        <Link to="/home/tv" className="contents">
          <span className="cursor-pointer text-xs font-medium lg:text-sm">TV Shows</span>
        </Link>
        <Link to="/home/movie" className="contents">
          <span className="cursor-pointer text-xs font-medium lg:text-sm">Movies</span>
        </Link>
        <span className="cursor-pointer text-xs font-medium lg:text-sm">New & Popular</span>
        <Link to="/home/list" className="contents">
          <span className="cursor-pointer text-xs font-medium lg:text-sm">My List</span>
        </Link>
        <span className="hidden cursor-pointer text-xs font-medium lg:inline lg:text-sm">Browse by Languages</span>
      </div>
      <div className="group relative flex md:hidden">
        <div className="flex items-center">
          <span>Browse</span>
          <span className="ml-2.5 h-0 w-0 border-x-[5px] border-b-0 border-t-[5px] border-solid border-x-transparent border-b-transparent border-t-white transition-transform duration-[367ms] ease-[cubic-bezier(.21,0,0.07,1)] group-hover:rotate-180"></span>
        </div>
        <div className="invisible absolute left-0 top-7 flex w-32 flex-col rounded  bg-[#000000e6] group-hover:visible">
          <Link to="/home/tv" className="contents">
            <span className="cursor-pointer px-4 py-2 text-sm font-medium">TV Shows</span>
          </Link>
          <Link to="/home/movie" className="contents">
            <span className="cursor-pointer border-t border-[#ffffff40] px-4 py-2 text-sm font-medium">Movies</span>
          </Link>
          <Link to="/home/list" className="contents">
            <span className="cursor-pointer border-t border-[#ffffff40] px-4 py-2 text-sm font-medium">My List</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default NavMenu
