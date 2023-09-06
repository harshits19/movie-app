import { Link } from "react-router-dom";
import { OGlogo, ChevronRight } from "../assets/SVGs";
import Accordion from "./Accordion";

const LandingPage = () => {
  return (
    <div>
      <div className="h-full w-full lg:px-36 sm:px-10 px-6 lg:pb-10 pb-0 relative overflow-hidden bg-[#00000066] bg-gradient-to-t from-[#000000cc] from-0% via-transparent via-60% to-[#000000cc] to-100% text-white">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          className="mix-blend-overlay inset-0 object-cover absolute w-full h-full scale-125 -scale-y-10 -z-10"
        />
        <div className="flex flex-col">
          <div className="flex justify-between items-center sm:pt-0 pt-6">
            <OGlogo classList="sm:h-20 sm:w-36 h-6 w-18 relative" />
            <div>
              <span className="p-2 h-20  m-2">English</span>
              <Link to="/login" className="no-underline">
                <span className="px-4 py-[6px] text-[14px] font-medium  rounded bg-ogRed relative inline-flex cursor-pointer">
                  Sign In
                </span>
              </Link>
            </div>
          </div>
          <div className="text-center lg:p-40 p-20 lg:px-14 sm:px-0 px-4 text-white">
            <div className="lg:text-5xl text-3xl font-bold relative">
              The biggest Indian hits. Ready to watch here from ₹ 149.
            </div>
            <div className="mt-4 sm:text-2xl text-lg sm:font-normal font-medium">
              Join today. Cancel anytime.
            </div>
            <div className="mt-4 sm:text-xl text-lg sm:font-normal font-medium">
              Ready to watch? Enter your email to create or restart your
              membership.
            </div>
            <div className="flex justify-center pt-5 sm:px-10 px-0 gap-y-3 flex-wrap">
              <div className="bg-[#161616b3] flex-auto sm:min-w-[12rem] sm:max-w-[23rem] min-w-full">
                <input
                  name="email"
                  type="email"
                  placeholder="Email address"
                  className="bg-transparent w-full  p-4 rounded border border-solid border-[#808080b3] text-base font-normal text-white outline-none"
                />
              </div>
              <div className="flex items-center px-6 sm:py-0 py-2 sm:ml-2 ml-0 max-w-fit bg-ogRed rounded-md font-medium sm:text-2xl text-[1.3rem] cursor-pointer">
                <Link to="/login" className="no-underline">
                  Get Started
                </Link>
                <span>
                  <Link to="/login" className="no-underline">
                    <ChevronRight classList={"fill-white"} />
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#232323] h-2"></div>
      <div className="w-full h-full lg:py-16 py-14 bg-[#000000] text-white">
        <div className="flex lg:flex-row flex-col justify-center mx-auto xl:max-w-[calc(83.3%-6rem)] sm:max-w-[calc(100%-4rem)] max-w-[calc(100%-3rem)] items-center">
          <div className="lg:text-left text-center basis-1/2">
            <div className="lg:text-5xl text-3xl font-bold">
              Enjoy on your TV
            </div>
            <div className="lg:text-2xl text-xl font-medium mt-5">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </div>
          </div>
          <div className="basis-1/2">
            <div className="relative">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                className="w-full"
              />
              <div className="absolute -translate-x-1/2 -translate-y-1/2 top-[46%] left-[50%] h-full w-full max-w-[73%] max-h-[54%] overflow-hidden">
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#232323] h-2"></div>
      <div className="w-full h-full lg:py-16 py-14 bg-[#000000] text-white">
        <div className="flex lg:flex-row flex-col justify-center mx-auto xl:max-w-[calc(83.3%-6rem)] sm:max-w-[calc(100%-4rem)] max-w-[calc(100%-3rem)] items-center">
          <div className="basis-1/2">
            <div className="relative">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                className="w-full"
              />
            </div>
          </div>
          <div className="lg:text-left text-center basis-1/2">
            <div className="lg:text-5xl text-3xl font-bold">
              Download your shows to watch offline
            </div>
            <div className="lg:text-2xl text-xl font-medium mt-5">
              Save your favourites easily and always have something to watch.
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#232323] h-2"></div>
      <div className="w-full h-full lg:py-16 py-14 bg-[#000000] text-white">
        <div className="flex lg:flex-row flex-col justify-center mx-auto xl:max-w-[calc(83.3%-6rem)] sm:max-w-[calc(100%-4rem)] max-w-[calc(100%-3rem)] items-center">
          <div className="lg:text-left text-center basis-1/2">
            <div className="lg:text-5xl text-3xl font-bold">
              Watch everywhere
            </div>
            <div className="lg:text-2xl text-xl font-medium mt-5">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </div>
          </div>
          <div className="basis-1/2">
            <div className="relative">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
                className="w-full"
              />
              <div className="absolute -translate-x-1/2 -translate-y-1/2 top-[46%] left-[50%] h-full w-full max-w-[73%] max-h-[54%] overflow-hidden">
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#232323] h-2"></div>
      <div className="w-full h-full lg:py-16 py-14 bg-[#000000] text-white">
        <div className="flex lg:flex-row flex-col justify-center mx-auto xl:max-w-[calc(83.3%-6rem)] sm:max-w-[calc(100%-4rem)] max-w-[calc(100%-3rem)] items-center">
          <div className="basis-1/2">
            <div className="relative">
              <img
                src="https://occ-0-5298-3647.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"
                className="w-full"
              />
            </div>
          </div>
          <div className="lg:text-left text-center basis-1/2">
            <div className="lg:text-5xl text-3xl font-bold">
              Create profiles for kids
            </div>
            <div className="lg:text-2xl text-xl font-medium mt-5">
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#232323] h-2"></div>
      <div className="w-full h-full lg:py-16 py-14 bg-[#000000] text-white text-center">
        <div className="lg:text-5xl text-3xl font-bold">
          Frequently Asked Questions
        </div>
        <Accordion />
        <div className="w-full lg:px-36 sm:px-10 px-6 pt-4">
          <div className="lg:px-14 sm:px-0 px-4 text-white">
            <div className="mt-4 sm:text-xl text-lg sm:font-normal font-medium">
              Ready to watch? Enter your email to create or restart your
              membership.
            </div>
            <div className="flex justify-center pt-5 sm:px-10 px-0 gap-y-3 flex-wrap">
              <div className="bg-[#161616b3] flex-auto sm:min-w-[12rem] sm:max-w-[23rem] min-w-full">
                <input
                  name="email"
                  type="email"
                  placeholder="Email address"
                  className="bg-transparent w-full  p-4 rounded border border-solid border-[#808080b3] text-base font-normal text-white outline-none"
                />
              </div>
              <div className="flex items-center px-6 sm:py-0 py-2 sm:ml-2 ml-0 max-w-fit bg-ogRed rounded-md font-medium sm:text-2xl text-[1.3rem] cursor-pointer">
                <Link to="/login" className="no-underline">
                  Get Started
                </Link>
                <span>
                  <Link to="/login" className="no-underline">
                    <ChevronRight classList={"fill-white"} />
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#232323] h-2"></div>
      <div className="w-full h-full lg:py-16 py-10 bg-[#000000] text-white text-left">
        <div className="mx-auto xl:max-w-[calc(83.3%-6rem)] sm:max-w-[calc(100%-4rem)] max-w-[calc(100%-3rem)]">
          <div className="text-[#ffffffb3] font-medium">
            Questions? Call <span className="underline">000-800-919-1694</span>
          </div>
          <div className="flex sm:flex-row flex-col justify-start underline cursor-pointer py-4 text-[#ffffffb3] text-sm">
            <div className="py-4 flex flex-col gap-y-3 min-w-[10rem] w-1/3">
              <div className="">FAQ</div>
              <div className="">Media Centre</div>
              <div className="">Ways to Watch</div>
              <div className="">Cookie Preferences</div>
              <div className="">Speed Test</div>
            </div>
            <div className="py-4 flex flex-col gap-y-3 min-w-[10rem] w-1/3">
              <div>Help Centre</div>
              <div>Investor Relations </div>
              <div>Terms of Use</div>
              <div>Corporate Information</div>
              <div>Legal Notices</div>
            </div>
            <div className="py-4 flex flex-col gap-y-3 min-w-[10rem] w-1/3">
              <div>Account</div>
              <div>Jobs </div>
              <div>Privacy</div>
              <div>Contact Us</div>
              <div>Only on Netflix</div>
            </div>
          </div>
          <div className="text-[#ffffffb3] text-sm">Netflix India</div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
