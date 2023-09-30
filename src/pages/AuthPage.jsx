import { useContext, useState, useRef, useLayoutEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { UserEmailContext,LanguageContext } from "../utilities/Context"
import { validateEmail, validatePassword } from "../hooks/useValidation"
import ErrorBox from "../components/ErrorBox"
import { OGlogo } from "../assets/SVGs"
import { AuthPageData } from "../utilities/Constants"
import useAuth from "../hooks/useAuth"

const InputValidator = ({ text }) => {
  return <div className="pt-2 text-[13px] leading-[13px] text-[#e87c03]">{text}</div>
}

const AuthPage = () => {
  const { userSignupEmail, setUserSignupEmail } = useContext(UserEmailContext)
  const {language} = useContext(LanguageContext);
  const [emailError, setEmailError] = useState(false)
  const [passError, setPassError] = useState(false)
  const [authError, setAuthError] = useState("")
  const [authState, setAuthState] = useState("login")
  const [loading, setLoading] = useState(false)
  const [show, setShow] = useState(true)
  const nameRef = useRef()
  const emailRef = useRef()
  const passRef = useRef()
  const dispatch = useDispatch()

  const handleFormSubmit = (e) => {
    const isValidFormValues = !emailError && !passError && emailRef.current?.value && passRef.current?.value
    e.preventDefault()
    isValidFormValues && useAuth(emailRef, passRef, nameRef, dispatch, setLoading, setAuthError, setAuthState, authState)
  }

  useLayoutEffect(() => {
    if (userSignupEmail.email) setAuthState("signup")
    emailRef.current.value = userSignupEmail?.email || ""
    setUserSignupEmail("")
  }, [])
  const toggleVisibility = () => {
    passRef.current.type = passRef.current.type === "password" ? "text" : "password"
    setShow(!show)
  }

  return (
    <div className="bg-black">
      <div className="relative flex h-full min-h-[30rem] justify-center pb-8 sm:min-h-[32rem] sm:pb-[3rem] lg:min-h-[43.75rem] lg:pb-[4rem]">
        <div className="absolute inset-0 hidden md:block">
          <div className="relative h-full w-full overflow-hidden ">
            <img src={AuthPageData?.bgImages?.urlOne} className="h-full w-full -translate-y-[10%] scale-125 object-cover opacity-50" />
            <div className="absolute inset-0" />
          </div>
        </div>
        <div className="absolute left-0 right-0 mx-4 bg-black pt-6 md:mx-10 md:bg-transparent md:pt-4">
          <Link to="/">
            <OGlogo classList="md:h-[45px] md:w-[167px] h-8 w-18 relative z-10" />
          </Link>
        </div>
        <div className="relative min-h-screen w-full px-[5%] before:block before:h-[56px] before:content-[''] md:mx-auto md:max-w-[450px] md:bg-transparent md:px-0 md:before:h-[96px]">
          <div className="m-0 box-border flex min-h-[540px] w-full flex-col rounded bg-[#000000bf] px-0 pb-[30px] pt-5 md:min-h-[630px] md:px-[68px] md:pb-10 md:pt-[60px] ">
            <div className="grow">
              <div className="mb-7 text-[32px] font-medium text-white">{authState == "login" ? AuthPageData[language].formSection?.formTitle?.signin : AuthPageData[language].formSection?.formTitle?.signup}</div>
              {authError && <ErrorBox authError={authError} setAuthState={setAuthState} text={AuthPageData[language].errorBoxText} />}
              <form onSubmit={handleFormSubmit}>
                {authState == "signup" && (
                  <div className="max-w-full flex-auto pb-4 ">
                    <input
                      className="h-[50px] w-full rounded border-0 bg-[#333333] px-4 text-base font-normal leading-[50px] text-white outline-none"
                      name="name"
                      type="text"
                      placeholder={AuthPageData[language].formSection?.placeholderText?.name}
                      ref={nameRef}
                    />
                  </div>
                )}
                <div className="max-w-full flex-auto pb-4 ">
                  <input
                    className={(emailError ? "border-b-2 border-[#e87c03] " : "") + " h-[50px] w-full rounded border-0 bg-[#333333] px-4 text-base font-normal leading-[50px] text-white outline-none"}
                    name="email"
                    type="email"
                    placeholder={AuthPageData[language].formSection?.placeholderText?.email}
                    ref={emailRef}
                    onBlur={() => validateEmail(emailRef?.current?.value, setEmailError)}
                  />
                  {emailError && <InputValidator text={AuthPageData[language].formSection?.validatorText?.email} />}
                </div>
                <div className="relative max-w-full flex-auto pb-4">
                  <input
                    className={(passError ? "border-b-2 border-[#e87c03] " : "") + " h-[50px] w-full rounded border-0 bg-[#333333] pl-4 pr-14 text-base font-normal leading-[50px] text-white outline-none"}
                    name="password"
                    type="password"
                    placeholder={AuthPageData[language].formSection?.placeholderText?.password}
                    ref={passRef}
                    onBlur={() => validatePassword(passRef?.current?.value, setPassError)}
                  />
                  <span className="absolute right-0 top-[14px] cursor-pointer px-2 text-sm text-[#8c8c8c]" onClick={toggleVisibility}>
                    {show ? "SHOW" : "HIDE"}
                  </span>
                  {passError && <InputValidator text={AuthPageData[language].formSection?.validatorText?.password} />}
                </div>
                <button className="relative mx-0 mb-3 mt-6 flex h-[50px] w-full cursor-pointer items-center justify-center rounded bg-ogRed text-center font-medium text-white transition-bgColor duration-250ms ease-ogTrans hover:bg-ogRedHover hover:ease-ogTransHover">
                  {!loading ? (
                    authState == "login" ? (
                      AuthPageData[language].formSection?.formTitle?.signin
                    ) : (
                      AuthPageData[language].formSection?.formTitle?.signup
                    )
                  ) : (
                    <div className="absolute inset-0">
                      <div className="loadingSpinner"></div>
                    </div>
                  )}
                </button>
                <div className="flex justify-between text-[13px] text-[#b3b3b3]">
                  <span className="flex cursor-pointer items-center">
                    <input type="checkbox" name="rememberMe" id="rememberMe" className="h-4 w-4" />
                    <label htmlFor="rememberMe" className="pl-1">
                      {AuthPageData[language].formSection?.rememberMeBtnText}
                    </label>
                  </span>
                  <span className="cursor-pointer">{AuthPageData[language].formSection?.needhelpBtnText}</span>
                </div>
              </form>
            </div>
            <div className="grow">
              <div className="mt-4 text-base text-[#b3b3b3]">
                {authState === "login" ? (
                  <div>
                    {AuthPageData[language].formSection?.formSwitchText?.signin}
                    <span
                      onClick={() => {
                        setAuthState("signup")
                        setAuthError("")
                      }}
                      className="cursor-pointer text-white hover:underline">
                      {AuthPageData[language].formSection?.formSwitchText?.signin2}
                    </span>
                  </div>
                ) : (
                  <div>
                    {AuthPageData[language].formSection?.formSwitchText?.signup}
                    <span
                      onClick={() => {
                        setAuthState("login")
                        setAuthError("")
                      }}
                      className="cursor-pointer text-white hover:underline">
                      {AuthPageData[language].formSection?.formSwitchText?.signup2}
                    </span>
                  </div>
                )}
              </div>
              <div className="mt-4 text-[13px] text-[#b3b3b3]">{AuthPageData[language].formSection?.capchaText}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthPage
