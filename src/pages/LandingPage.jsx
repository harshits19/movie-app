import { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Accordion from "../components/Accordion";
import { LandingPageData } from "../utilities/Constants";
import { OGlogo, ChevronRight } from "../assets/SVGs";
import { UserEmailContext } from "../utilities/UserContext";
import LandingPageSections from "../components/LandingPageSections";

const LandingPage = () => {
  const navigator = useNavigate();
  const { setUserSignupEmail } = useContext(UserEmailContext);
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
    <div className="bg-black">
      <div className="relative z-[1]">
        <div className="xl:max-w-[calc(83.3%-6rem)] sm:max-w-[calc(100%-4rem)] max-w-[calc(100%-3rem)] absolute left-0 right-0 lg:h-[5.375rem] h-20 flex justify-between items-center m-auto text-white">
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
      </div>
      <div className="lg:min-h-[43.75rem] sm:min-h-[32rem] min-h-[30rem] lg:pt-[9.875rem] sm:pt-[8.5rem] pt-[7.5rem] lg:pb-[4rem] sm:pb-[3rem] pb-8 flex h-full relative justify-center">
        <div className="absolute inset-0">
          <div className="relative h-full w-full overflow-hidden ">
            <img
              src={LandingPageData?.bgImages?.urlOne}
              className="object-cover w-full h-full scale-125 -translate-y-[10%]"
            />
            <div className="absolute inset-0 bg-[#00000066] bg-gradient-to-t from-[#000000cc] from-0% via-transparent via-60% to-[#000000cc] to-100%" />
          </div>
        </div>
        <div className="xl:max-w-[calc(83.3%-6rem)] sm:max-w-[calc(100%-4rem)] max-w-[calc(100%-3rem)] flex flex-col items-center m-auto text-center text-white">
          <div className="relative basis-1/2">
            <div className="lg:text-5xl text-3xl font-bold">
              {LandingPageData["en"]?.mainSection?.title}
            </div>
            <div className="mt-4 sm:text-2xl text-lg sm:font-normal font-medium">
              {LandingPageData["en"]?.mainSection?.lineOne}
            </div>
            <div className="mt-4 sm:text-xl text-lg sm:font-normal font-medium">
              {LandingPageData["en"]?.mainSection?.lineTwo}
            </div>
            <div className="pt-6 sm:px-8 px-6 max-w-[61.5rem] my-0 mx-auto">
              <form
                className="flex sm:flex-row flex-col sm:gap-y-0 gap-y-4 items-center max-w-[36.625rem] w-full mx-auto relative"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleFormSubmit();
                }}>
                <div className="bg-[#161616b3] flex-auto min-w-[12rem] w-full">
                  <input
                    name="email"
                    type="email"
                    placeholder={
                      LandingPageData["en"]?.mainSection?.inputInnerText
                    }
                    className="bg-transparent w-full  p-4 rounded border border-solid border-[#808080b3] text-base font-normal text-white outline-none"
                    ref={inputRef}
                  />
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleFormSubmit();
                  }}
                  className="flex items-center sm:min-h-[3.5rem] min-h-[3rem] sm:px-6 px-4 py-2 sm:ml-2 ml-0 w-full max-w-fit bg-ogRed hover:bg-ogRedHover hover:ease-ogTransHover ease-ogTrans duration-250ms transition-bgColor rounded-md font-medium sm:text-2xl text-[1.125rem] cursor-pointer">
                  {LandingPageData["en"]?.mainSection?.signUpBtnText}
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
      <LandingPageSections data={LandingPageData["en"]?.infoSection[0]} />
      <div className="w-full bg-[#232323] h-2"></div>
      <LandingPageSections
        data={LandingPageData["en"]?.infoSection[1]}
        first={"lg:order-1"}
        second={"lg:order-2"}
      />
      <div className="w-full bg-[#232323] h-2"></div>
      <LandingPageSections data={LandingPageData["en"]?.infoSection[2]} />
      <div className="w-full bg-[#232323] h-2"></div>
      <LandingPageSections
        data={LandingPageData["en"]?.infoSection[3]}
        first={"lg:order-1"}
        second={"lg:order-2"}
      />
      <div className="w-full bg-[#232323] h-2"></div>
      <div className="w-full h-full lg:py-16 py-14 bg-[#000000] text-white text-center">
        <div className="lg:text-5xl text-3xl font-bold">
          {LandingPageData["en"]?.faqSection?.title}
        </div>
        <Accordion data={LandingPageData["en"]?.faqSection?.accordionData} />
        <div className="w-full lg:px-36 sm:px-10 px-6 pt-4">
          <div className="lg:px-14 sm:px-0 px-4 text-white">
            <div className="mt-4 sm:text-xl text-lg sm:font-normal font-medium">
              {LandingPageData["en"]?.faqSection?.lineOne}
            </div>
            <div className="pt-6 sm:px-8 px-6 max-w-[61.5rem] my-0 mx-auto">
              <form
                className="flex sm:flex-row flex-col sm:gap-y-0 gap-y-4 items-center max-w-[36.625rem] w-full mx-auto relative"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleFormSubmit();
                }}>
                <div className="bg-[#161616b3] flex-auto min-w-[12rem] w-full">
                  <input
                    name="email"
                    type="email"
                    placeholder={
                      LandingPageData["en"]?.faqSection?.inputInnerText
                    }
                    className="bg-transparent w-full  p-4 rounded border border-solid border-[#808080b3] text-base font-normal text-white outline-none"
                    ref={inputRefTwo}
                  />
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleFormSubmit();
                  }}
                  className="flex items-center sm:min-h-[3.5rem] min-h-[3rem] sm:px-6 px-4 py-2 sm:ml-2 ml-0 w-full max-w-fit bg-ogRed hover:bg-ogRedHover hover:ease-ogTransHover ease-ogTrans duration-250ms transition-bgColor rounded-md font-medium sm:text-2xl text-[1.125rem] cursor-pointer">
                  {LandingPageData["en"]?.faqSection?.signUpBtnText}
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
      <div className="w-full h-full lg:py-16 py-10 bg-[#000000] text-white text-left">
        <div className="mx-auto xl:max-w-[calc(83.3%-6rem)] sm:max-w-[calc(100%-4rem)] max-w-[calc(100%-3rem)]">
          <div className="text-[#ffffffb3] font-medium">
            {LandingPageData["en"]?.footerSection?.title}
            <span className="underline cursor-pointer">
              {LandingPageData["en"]?.footerSection?.titleSub}
            </span>
          </div>
          <div className="flex sm:flex-row flex-col justify-start underline cursor-pointer py-4 text-[#ffffffb3] text-sm">
            {LandingPageData["en"]?.footerSection?.sections?.map(
              (items, idx) => {
                return (
                  <div
                    className="py-4 flex flex-col gap-y-3 min-w-[10rem] w-1/3"
                    key={idx}>
                    {items?.map((item) => {
                      return <div key={item}>{item}</div>;
                    })}
                  </div>
                );
              }
            )}
          </div>
          <div className="text-[#ffffffb3] text-sm">
            {LandingPageData["en"]?.footerSection?.websiteTitle}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;