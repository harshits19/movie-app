import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import NavSearch from "./NavSearch"
import NavMenu from "./NavMenu"
import { auth } from "../utilities/Firebase"
import { signOut } from "firebase/auth"
import { OGlogo } from "../assets/SVGs"

const HomeNavbar = () => {
  const user = useSelector((store) => store?.user?.user)
  const [navBackground, setNavBackground] = useState("bg-transparent")

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        window.location.reload()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 30
      show ? setNavBackground("bg-[#141414]") : setNavBackground("bg-transparent")
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className={`fixed left-0 top-0 z-20 min-h-[50px] w-full text-white md:min-h-[70px] ${navBackground} bg-[linear-gradient(180deg,rgba(0,0,0,0.7)_10%,transparent)] transition-bgColor duration-[0.4s]`}>
      <div className="flex h-[50px] items-center justify-between px-3 md:h-[70px] md:px-10">
        <div className="flex items-center">
          <div className="mr-3 w-min md:mr-8">
            <Link to="/home">
              <OGlogo classList={"sm:h-10 sm:w-[96px] h-8 w-20"} />
            </Link>
          </div>
          <NavMenu />
        </div>
        <div className="flex items-center gap-x-2 md:gap-x-4 ">
          <NavSearch />
          <div className="group relative flex cursor-pointer items-center text-white">
            {user ? <img className="h-8 w-8 rounded" src={user?.photoURL} /> : <span className="h-8 w-8 rounded bg-[#1a1a1a]"></span>}
            <span className="ml-1.5 h-0 w-0 border-x-[5px] border-b-0 border-t-[5px] border-solid border-x-transparent border-b-transparent border-t-white transition-transform duration-[367ms] ease-[cubic-bezier(.21,0,0.07,1)] group-hover:rotate-180 sm:ml-2.5"></span>
            <div className="invisible absolute right-0 top-[35px] z-10 w-[180px] rounded bg-[#000000e6] transition-[visibility] group-hover:visible">
              <div className="flex h-full w-full flex-col py-2 text-sm font-medium">
                <div className="cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap px-4 py-2">{user?.name}</div>
                <Link to="/home/account" className="contents">
                  <div className="cursor-pointer px-4 py-2 hover:underline">Account</div>
                </Link>
                <div className="cursor-pointer border-t border-[#ffffff40] px-4 py-2 text-center hover:underline" onClick={() => handleSignOut()}>
                  Sign Out
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HomeNavbar
