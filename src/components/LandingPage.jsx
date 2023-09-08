import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import Accordion from "./Accordion";
import { HpBannerImg, HpSectionData } from "../utilities/Constants";
import { OGlogo, ChevronRight } from "../assets/SVGs";
import { UserEmailContext } from "../utilities/UserContext";

const HomePageSections = ({ data, first, second }) => {
  const { title, description, imgURL } = data;
  return (
    <div className="w-full h-full lg:py-16 py-14 bg-[#000000] text-white">
      <div className="flex lg:flex-row flex-col justify-center mx-auto xl:max-w-[calc(83.3%-6rem)] sm:max-w-[calc(100%-4rem)] max-w-[calc(100%-3rem)] items-center">
        <div className={`lg:text-left text-center basis-1/2  ${second}`}>
          <div className="lg:text-5xl text-3xl font-bold">{title}</div>
          <div className="lg:text-2xl text-xl font-medium mt-5">
            {description}
          </div>
        </div>
        <div className={`basis-1/2  ${first}`}>
          <div className="relative">
            <img src={imgURL} className="w-full" />
            <div className="absolute -translate-x-1/2 -translate-y-1/2 top-[46%] left-[50%] h-full w-full max-w-[73%] max-h-[54%] overflow-hidden">
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LandingPage = () => {
  const { setUserSignupEmail } = useContext(UserEmailContext);
  const navigator = useNavigate();
  const inputRef = useRef();
  const inputRefTwo = useRef();
  const handleFormSubmit = () => {
    setUserSignupEmail({
      email: inputRef?.current?.value || inputRefTwo?.current?.value,
    });
    if (inputRef?.current?.value || inputRefTwo?.current?.value)
      navigator("/login");
  };
  return (
    <div className="">
      <div className="h-full w-full lg:px-36 sm:px-10 px-6 lg:pb-10 pb-0 relative overflow-hidden bg-[#00000066] bg-gradient-to-t from-[#000000cc] from-0% via-transparent via-60% to-[#000000cc] to-100% text-white">
        <div className="">
          <img
            src={HpBannerImg[1]}
            className="mix-blend-overlay object-cover absolute w-full h-full scale-125 -translate-y-[10%] -z-10"
          />
          {/* <div className="mix-blend-overlay object-cover absolute w-full h-full scale-125 -translate-y-[10%] -z-20" /> */}
          <div className="flex flex-col">
            <div className="flex justify-between items-center sm:pt-0 pt-6">
              <OGlogo classList="sm:h-20 sm:w-36 h-6 w-18 relative" />
              <div>
                <span className="p-2 h-20  m-2">English</span>
                <Link to="/login" className="no-underline">
                  <span className="px-4 py-[6px] text-[14px] font-medium  rounded bg-ogRed hover:bg-ogRedHover hover:ease-ogTransHover ease-ogTrans duration-250ms transition-bgColor relative inline-flex cursor-pointer">
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
              <form
                className="flex justify-center pt-5 sm:px-10 px-0 gap-y-3 flex-wrap"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleFormSubmit();
                }}>
                <div className="bg-[#161616b3] flex-auto sm:min-w-[12rem] sm:max-w-[23rem] min-w-full">
                  <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                    className="bg-transparent w-full  p-4 rounded border border-solid border-[#808080b3] text-base font-normal text-white outline-none"
                    ref={inputRef}
                  />
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleFormSubmit();
                  }}
                  className="flex items-center px-6 sm:py-0 py-2 sm:ml-2 ml-0 max-w-fit bg-ogRed hover:bg-ogRedHover hover:ease-ogTransHover ease-ogTrans duration-250ms transition-bgColor rounded-md font-medium sm:text-2xl text-[1.3rem] cursor-pointer">
                  Get Started
                  <span>
                    <ChevronRight classList={"fill-white"} />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#232323] h-2"></div>
      <HomePageSections data={HpSectionData?.items[0]} />
      <div className="w-full bg-[#232323] h-2"></div>
      <HomePageSections
        data={HpSectionData?.items[1]}
        first={"lg:order-1"}
        second={"lg:order-2"}
      />
      <div className="w-full bg-[#232323] h-2"></div>
      <HomePageSections data={HpSectionData?.items[2]} />
      <div className="w-full bg-[#232323] h-2"></div>
      <HomePageSections
        data={HpSectionData?.items[3]}
        first={"lg:order-1"}
        second={"lg:order-2"}
      />
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
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleFormSubmit();
              }}
              className="flex justify-center pt-5 sm:px-10 px-0 gap-y-3 flex-wrap">
              <div className="bg-[#161616b3] flex-auto sm:min-w-[12rem] sm:max-w-[23rem] min-w-full">
                <input
                  ref={inputRefTwo}
                  name="email"
                  type="email"
                  placeholder="Email address"
                  className="bg-transparent w-full  p-4 rounded border border-solid border-[#808080b3] text-base font-normal text-white outline-none"
                />
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleFormSubmit();
                }}
                className="flex items-center px-6 sm:py-0 py-2 sm:ml-2 ml-0 max-w-fit bg-ogRed hover:bg-ogRedHover hover:ease-ogTransHover ease-ogTrans duration-250ms transition-bgColor rounded-md font-medium sm:text-2xl text-[1.3rem] cursor-pointer">
                Get Started
                <span>
                  <ChevronRight classList={"fill-white"} />
                </span>
              </button>
            </form>
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
