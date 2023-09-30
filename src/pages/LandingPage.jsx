import { useContext, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import Accordion from "../components/Accordion"
import LandingPageSections from "../components/LandingPageSections"
import UseTop from "../hooks/useTop"
import { UserEmailContext, LanguageContext } from "../utilities/Context"
import { LandingPageData } from "../utilities/Constants"
import { OGlogo, ChevronRight } from "../assets/SVGs"

const LandingPage = () => {
  const navigator = useNavigate()
  const { setUserSignupEmail } = useContext(UserEmailContext)
  const { language, setLanguage } = useContext(LanguageContext)
  const inputRef = useRef()
  const inputRefTwo = useRef()

  const handleFormSubmit = () => {
    setUserSignupEmail({
      email: inputRef?.current?.value || inputRefTwo?.current?.value,
    })
    if (inputRef?.current?.value || inputRefTwo?.current?.value) navigator("/login")
  }

  return (
    <div className="bg-black">
      <div className="relative z-[1]">
        <div className="absolute left-0 right-0 m-auto flex h-20 max-w-[calc(100%-3rem)] items-center justify-between text-white sm:max-w-[calc(100%-4rem)] lg:h-[5.375rem] xl:max-w-[calc(83.3%-6rem)]">
          <OGlogo classList="sm:h-20 sm:w-36 h-6 w-18 relative" />
          <div className="flex items-center">
            <span className="mx-2 h-min sm:mx-4">
              <select onChange={(e) => setLanguage(e.target.value)} className="h-full w-min cursor-pointer rounded border-[1px] border-white bg-[rgba(0,0,0,0.08)] px-[5px] py-0.5 text-white hover:bg-[rgba(73,72,72,0.18)]">
                <option value="en">{LandingPageData["en"]?.mainSection?.langSelectorText}</option>
                <option value="hi">{LandingPageData["hi"]?.mainSection?.langSelectorText}</option>
              </select>
            </span>
            <Link to="/login" className="no-underline">
              <span className="relative inline-flex cursor-pointer rounded  bg-ogRed px-4 py-[6px] text-[14px] font-medium transition-bgColor duration-250ms ease-ogTrans hover:bg-ogRedHover hover:ease-ogTransHover">
                {LandingPageData[language]?.mainSection?.signInBtnText}
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative flex h-full min-h-[30rem] justify-center pb-8 pt-[7.5rem] sm:min-h-[32rem] sm:pb-[3rem] sm:pt-[8.5rem] lg:min-h-[43.75rem] lg:pb-[4rem] lg:pt-[9.875rem]">
        <div className="absolute inset-0">
          <div className="relative h-full w-full overflow-hidden ">
            <img src={LandingPageData?.bgImages?.urlOne} className="h-full w-full -translate-y-[10%] scale-125 object-cover" />
            <div className="absolute inset-0 bg-[#00000066] bg-gradient-to-t from-[#000000cc] from-0% via-transparent via-60% to-[#000000cc] to-100%" />
          </div>
        </div>
        <div className="m-auto flex max-w-[calc(100%-3rem)] flex-col items-center text-center text-white sm:max-w-[calc(100%-4rem)] xl:max-w-[calc(83.3%-6rem)]">
          <div className="relative basis-1/2">
            <div className="text-3xl font-bold lg:text-5xl">{LandingPageData[language]?.mainSection?.title}</div>
            <div className="mt-4 text-lg font-medium sm:text-2xl sm:font-normal">{LandingPageData[language]?.mainSection?.lineOne}</div>
            <div className="mt-4 text-lg font-medium sm:text-xl sm:font-normal">{LandingPageData[language]?.mainSection?.lineTwo}</div>
            <div className="mx-auto my-0 max-w-[61.5rem] px-6 pt-6 sm:px-8">
              <form
                className="relative mx-auto flex w-full max-w-[36.625rem] flex-col items-center gap-y-4 sm:flex-row sm:gap-y-0"
                onSubmit={(e) => {
                  e.preventDefault()
                  handleFormSubmit()
                }}>
                <div className="w-full min-w-[12rem] flex-auto bg-[#161616b3]">
                  <input
                    name="email"
                    type="email"
                    placeholder={LandingPageData[language]?.mainSection?.inputInnerText}
                    className="w-full rounded  border border-solid border-[#808080b3] bg-transparent p-4 text-base font-normal text-white outline-none"
                    ref={inputRef}
                  />
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    handleFormSubmit()
                  }}
                  className="ml-0 flex min-h-[3rem] w-full max-w-fit cursor-pointer items-center rounded-md bg-ogRed px-4 py-2 text-[1.125rem] font-medium transition-bgColor duration-250ms ease-ogTrans hover:bg-ogRedHover hover:ease-ogTransHover sm:ml-2 sm:min-h-[3.5rem] sm:px-6 sm:text-2xl">
                  {LandingPageData[language]?.mainSection?.signUpBtnText}
                  <span>
                    <ChevronRight classList={"fill-white"} />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="h-2 w-full bg-[#232323]"></div>
      <LandingPageSections data={LandingPageData[language]?.infoSection[0]} />
      <div className="h-2 w-full bg-[#232323]"></div>
      <LandingPageSections data={LandingPageData[language]?.infoSection[1]} first={"lg:order-1"} second={"lg:order-2"} />
      <div className="h-2 w-full bg-[#232323]"></div>
      <LandingPageSections data={LandingPageData[language]?.infoSection[2]} />
      <div className="h-2 w-full bg-[#232323]"></div>
      <LandingPageSections data={LandingPageData[language]?.infoSection[3]} first={"lg:order-1"} second={"lg:order-2"} />
      <div className="h-2 w-full bg-[#232323]"></div>
      <div className="h-full w-full bg-[#000000] py-14 text-center text-white lg:py-16">
        <div className="text-3xl font-bold lg:text-5xl">{LandingPageData[language]?.faqSection?.title}</div>
        <Accordion data={LandingPageData[language]?.faqSection?.accordionData} />
        <div className="w-full px-6 pt-4 sm:px-10 lg:px-36">
          <div className="px-4 text-white sm:px-0 lg:px-14">
            <div className="mt-4 text-lg font-medium sm:text-xl sm:font-normal">{LandingPageData[language]?.faqSection?.lineOne}</div>
            <div className="mx-auto my-0 max-w-[61.5rem] px-6 pt-6 sm:px-8">
              <form
                className="relative mx-auto flex w-full max-w-[36.625rem] flex-col items-center gap-y-4 sm:flex-row sm:gap-y-0"
                onSubmit={(e) => {
                  e.preventDefault()
                  handleFormSubmit()
                }}>
                <div className="w-full min-w-[12rem] flex-auto bg-[#161616b3]">
                  <input
                    name="email"
                    type="email"
                    placeholder={LandingPageData[language]?.faqSection?.inputInnerText}
                    className="w-full rounded  border border-solid border-[#808080b3] bg-transparent p-4 text-base font-normal text-white outline-none"
                    ref={inputRefTwo}
                  />
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    handleFormSubmit()
                  }}
                  className="ml-0 flex min-h-[3rem] w-full max-w-fit cursor-pointer items-center rounded-md bg-ogRed px-4 py-2 text-[1.125rem] font-medium transition-bgColor duration-250ms ease-ogTrans hover:bg-ogRedHover hover:ease-ogTransHover sm:ml-2 sm:min-h-[3.5rem] sm:px-6 sm:text-2xl">
                  {LandingPageData[language]?.faqSection?.signUpBtnText}
                  <span>
                    <ChevronRight classList={"fill-white"} />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="h-2 w-full bg-[#232323]"></div>
      <div className="h-full w-full bg-[#000000] py-10 text-left text-white lg:py-16">
        <div className="mx-auto max-w-[calc(100%-3rem)] sm:max-w-[calc(100%-4rem)] xl:max-w-[calc(83.3%-6rem)]">
          <div className="font-medium text-[#ffffffb3]">
            {LandingPageData[language]?.footerSection?.title}
            <span className="cursor-pointer underline">{LandingPageData[language]?.footerSection?.titleSub}</span>
          </div>
          <div className="flex cursor-pointer flex-col justify-start py-4 text-sm text-[#ffffffb3] underline sm:flex-row">
            {LandingPageData[language]?.footerSection?.sections?.map((items, idx) => {
              return (
                <div className="flex w-1/3 min-w-[10rem] flex-col gap-y-3 py-4" key={idx}>
                  {items?.map((item) => {
                    return <div key={item}>{item}</div>
                  })}
                </div>
              )
            })}
          </div>
          <div className="text-sm text-[#ffffffb3]">{LandingPageData[language]?.footerSection?.websiteTitle}</div>
        </div>
      </div>
      <UseTop />
    </div>
  )
}

export default LandingPage
