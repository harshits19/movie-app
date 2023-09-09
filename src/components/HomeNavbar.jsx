import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { auth } from "../utilities/Firebase";
import { signOut } from "firebase/auth";
import { OGlogo, SearchBtn } from "../assets/SVGs";

const HomeNavbar = () => {
  const user = useSelector((store) => store?.user?.user);
  const [navBackground, setNavBackground] = useState("bg-transparent");
  const navRef = useRef();
  navRef.current = navBackground;
  const navigate = useNavigate();

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
      const show = window.scrollY > 50;
      if (show) {
        setNavBackground("bg-[#141414]");
      } else {
        setNavBackground("bg-transparent");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div
        className={`fixed top-0 left-0 min-h-[70px] w-full z-10 text-white ${navRef.current} transition-bgColor duration-[0.4s] bg-[linear-gradient(180deg,rgba(0,0,0,0.7)_10%,transparent)]`}
        ref={navRef}>
        <div className="flex items-center justify-between md:px-10 px-4 h-[70px]">
          <div className="flex items-center">
            <div className="w-min mr-8">
              <OGlogo classList={"sm:h-10 sm:w-[96px] h-8 w-20"} />
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
              <span className="lg:text-sm text-xs font-medium cursor-pointer">
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
      {/* <button onClick={() => handleSignOut()}>SignOut</button> */}
    </div>
  );
};
export default HomeNavbar;
