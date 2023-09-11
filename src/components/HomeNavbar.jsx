import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { auth } from "../utilities/Firebase";
import { signOut } from "firebase/auth";
import { OGlogo, SearchBtn } from "../assets/SVGs";

const HomeNavbar = () => {
  const navigate = useNavigate();
  const navRef = useRef();
  const user = useSelector((store) => store?.user?.user);
  const [navBackground, setNavBackground] = useState("bg-transparent");
  navRef.current = navBackground;

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 30;
      show
        ? setNavBackground("bg-[#141414]")
        : setNavBackground("bg-transparent");
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div
        className={`fixed top-0 left-0 md:min-h-[70px] min-h-[50px] w-full z-20 text-white ${navRef.current} transition-bgColor duration-[0.4s] bg-[linear-gradient(180deg,rgba(0,0,0,0.7)_10%,transparent)]`}
        ref={navRef}>
        <div className="flex items-center justify-between md:px-10 px-4 md:h-[70px] h-[50px]">
          <div className="flex items-center">
            <div className="w-min md:mr-8 mr-4">
              <Link to="/home">
                <OGlogo classList={"sm:h-10 sm:w-[96px] h-8 w-20"} />
              </Link>
            </div>
            <div className="sm:flex hidden lg:gap-x-4 gap-x-2">
              <span className="lg:text-sm text-xs font-medium cursor-pointer">
                Home
              </span>
              <span className="lg:text-sm text-xs font-medium cursor-pointer">
                TV Shows
              </span>
              <span className="lg:text-sm text-xs font-medium cursor-pointer">
                Movies
              </span>
              <span className="lg:text-sm text-xs font-medium cursor-pointer">
                New & Popular
              </span>
              <span className="lg:text-sm text-xs font-medium cursor-pointer">
                My List
              </span>
              <span className="lg:text-sm lg:inline hidden text-xs font-medium cursor-pointer">
                Browse by Languages
              </span>
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <SearchBtn classList={"h-5 w-5 fill-white cursor-pointer"} />
            <div className="flex items-center cursor-pointer text-white relative group">
              {user && <img className="h-8 w-8 rounded" src={user?.photoURL} />}
              <span className="h-0 w-0 ml-2.5 group-hover:rotate-180 transition-transform duration-[367ms] ease-[cubic-bezier(.21,0,0.07,1)] border-t-white border-b-transparent border-x-transparent border-solid border-t-[5px] border-b-0 border-x-[5px]"></span>
              <div className="group-hover:visible invisible w-[180px] bg-[#000000e6] absolute top-[35px] right-0 z-10 transition-[visibility]">
                <div className="flex flex-col w-full h-full py-2 md:text-sm text-xs">
                  <div className="py-2 px-4 hover:underline cursor-pointer">
                    Manage Profile
                  </div>
                  <div className="py-2 px-4 hover:underline cursor-pointer">
                    Account
                  </div>
                  <div
                    className="py-2 px-4 hover:underline border-t border-[#ffffff40] cursor-pointer"
                    onClick={() => handleSignOut()}>
                    Sign Out
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeNavbar;
