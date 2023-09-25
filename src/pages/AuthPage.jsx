import { useContext, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../store/UserSlice";
import { UserEmailContext } from "../utilities/UserContext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import {
  validateEmail,
  validatePassword,
  validateName,
} from "../utilities/Validation";
import ErrorBox from "../components/ErrorBox";
import { auth } from "../utilities/Firebase";
import { OGlogo } from "../assets/SVGs";
import { AuthPageData, ProfileDpData } from "../utilities/Constants";
import Spinner from "../assets/spinner.svg";

const InputValidator = ({ text }) => {
  return (
    <div className="pt-2 text-[13px] leading-[13px] text-[#e87c03]">{text}</div>
  );
};

const AuthPage = () => {
  const { userSignupEmail, setUserSignupEmail } = useContext(UserEmailContext);
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [authError, setAuthError] = useState("");
  const [authState, setAuthState] = useState("login");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(true);
  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userSignupEmail.email) setAuthState("signup");
    emailRef.current.value = userSignupEmail?.email || "";
  }, []);
  const toggleVisibility = () => {
    passRef.current.type === "password"
      ? (passRef.current.type = "text")
      : (passRef.current.type = "password");
    setShow(!show);
  };

  const handleAuth = () => {
    const isValid = emailRef.current.value && passRef.current.value;
    isValid && setLoading(true);
    if (authState == "signup" && nameRef && isValid)
      createUserWithEmailAndPassword(
        auth,
        emailRef?.current?.value,
        passRef?.current?.value,
      )
        .then((user) => {
          setUserSignupEmail({});
          setLoading(false);
          updateProfile(user?.user, {
            displayName: nameRef?.current?.value,
            photoURL: ProfileDpData?.items[Math.floor(Math.random() * 10)],
          })
            .then(() => {
              const { email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  email: email,
                  name: displayName,
                  photoURL: photoURL,
                }),
              );
            })
            .catch((error) => {
              console.log(error.code);
              setLoading(false);
            });
          setAuthState("login");
        })
        .catch((err) => {
          setAuthError(err.code);
          setLoading(false);
        });
    else if (authState == "login" && isValid)
      signInWithEmailAndPassword(
        auth,
        emailRef?.current?.value,
        passRef?.current?.value,
      )
        .then(() => {
          setUserSignupEmail({});
          setLoading(false);
        })
        .catch((err) => {
          setAuthError(err.code);
          setLoading(false);
        });
  };

  return (
    <div className="bg-black">
      <div className="relative flex h-full min-h-[30rem] justify-center pb-8 sm:min-h-[32rem] sm:pb-[3rem] lg:min-h-[43.75rem] lg:pb-[4rem]">
        <div className="absolute inset-0 hidden md:block">
          <div className="relative h-full w-full overflow-hidden ">
            <img
              src={AuthPageData?.bgImages?.urlOne}
              className="h-full w-full -translate-y-[10%] scale-125 object-cover opacity-50"
            />
            <div className="absolute inset-0" />
          </div>
        </div>
        <div className="absolute left-0 right-0 mx-4 bg-black pt-6 md:mx-10 md:bg-transparent md:pt-4">
          <Link to="/">
            <OGlogo classList="md:h-[45px] md:w-[167px] h-8 w-18 relative" />
          </Link>
        </div>
        <div className="relative min-h-screen w-full px-[5%] before:block before:h-[56px] before:content-[''] md:mx-auto md:max-w-[450px] md:bg-transparent md:px-0 md:before:h-[96px]">
          <div className="m-0 box-border flex min-h-[540px] w-full flex-col rounded bg-[#000000bf] px-0 pb-[30px] pt-5 md:min-h-[630px] md:px-[68px] md:pb-10 md:pt-[60px] ">
            <div className="grow">
              <div className="mb-7 text-[32px] font-medium text-white">
                {authState == "login"
                  ? AuthPageData["en"].formSection?.formTitle?.signin
                  : AuthPageData["en"].formSection?.formTitle?.signup}
              </div>
              {authError && (
                <ErrorBox
                  authError={authError}
                  setAuthState={setAuthState}
                  text={AuthPageData["en"].errorBoxText}
                />
              )}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const isValidFormValues = !emailError && !passError;
                  isValidFormValues && handleAuth();
                }}
              >
                {authState == "signup" && (
                  <div className="max-w-full flex-auto pb-4 ">
                    <input
                      className={
                        (nameError ? "border-b-2 border-[#e87c03] " : "") +
                        " h-[50px] w-full rounded border-0 bg-[#333333] px-4 text-base font-normal leading-[50px] text-white outline-none"
                      }
                      name="name"
                      type="text"
                      placeholder={
                        AuthPageData["en"].formSection?.placeholderText?.name
                      }
                      ref={nameRef}
                      onBlur={() =>
                        validateName(nameRef?.current?.value, setNameError)
                      }
                    />
                    {nameError && (
                      <InputValidator
                        text={
                          AuthPageData["en"].formSection?.validatorText?.name
                        }
                      />
                    )}
                  </div>
                )}
                <div className="max-w-full flex-auto pb-4 ">
                  <input
                    className={
                      (emailError ? "border-b-2 border-[#e87c03] " : "") +
                      " h-[50px] w-full rounded border-0 bg-[#333333] px-4 text-base font-normal leading-[50px] text-white outline-none"
                    }
                    name="email"
                    type="email"
                    placeholder={
                      AuthPageData["en"].formSection?.placeholderText?.email
                    }
                    ref={emailRef}
                    onBlur={() =>
                      validateEmail(emailRef?.current?.value, setEmailError)
                    }
                  />
                  {emailError && (
                    <InputValidator
                      text={
                        AuthPageData["en"].formSection?.validatorText?.email
                      }
                    />
                  )}
                </div>
                <div className="relative max-w-full flex-auto pb-4">
                  <input
                    className={
                      (passError ? "border-b-2 border-[#e87c03] " : "") +
                      " h-[50px] w-full rounded border-0 bg-[#333333] pl-4 pr-14 text-base font-normal leading-[50px] text-white outline-none"
                    }
                    name="password"
                    type="password"
                    placeholder={
                      AuthPageData["en"].formSection?.placeholderText?.password
                    }
                    ref={passRef}
                    onBlur={() =>
                      validatePassword(passRef?.current?.value, setPassError)
                    }
                  />
                  <span
                    className="absolute right-0 top-[14px] cursor-pointer px-2 text-sm text-[#8c8c8c]"
                    onClick={toggleVisibility}
                  >
                    {show ? "SHOW" : "HIDE"}
                  </span>
                  {passError && (
                    <InputValidator
                      text={
                        AuthPageData["en"].formSection?.validatorText?.password
                      }
                    />
                  )}
                </div>
                <button className="mx-0 mb-3 mt-6 h-[50px] w-full cursor-pointer rounded bg-ogRed text-center font-medium text-white transition-bgColor duration-250ms ease-ogTrans hover:bg-ogRedHover hover:ease-ogTransHover">
                  {!loading &&
                    (authState == "login"
                      ? AuthPageData["en"].formSection?.formTitle?.signin
                      : AuthPageData["en"].formSection?.formTitle?.signup)}
                  {loading && <img className="mx-auto h-8 w-8" src={Spinner} />}
                </button>
                <div className="flex justify-between text-[13px] text-[#b3b3b3]">
                  <span className="flex cursor-pointer items-center">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      id="rememberMe"
                      className="h-4 w-4"
                    />
                    <label htmlFor="rememberMe" className="pl-1">
                      {AuthPageData["en"].formSection?.rememberMeBtnText}
                    </label>
                  </span>
                  <span className="cursor-pointer">
                    {AuthPageData["en"].formSection?.needhelpBtnText}
                  </span>
                </div>
              </form>
            </div>
            <div className="grow">
              <div className="mt-4 text-base text-[#b3b3b3]">
                {authState == "login" ? (
                  <div>
                    {AuthPageData["en"].formSection?.formSwitchText?.signin}
                    <span
                      onClick={() => {
                        setAuthState("signup");
                        setAuthError("");
                      }}
                      className="cursor-pointer text-white hover:underline"
                    >
                      {AuthPageData["en"].formSection?.formSwitchText?.signin2}
                    </span>
                  </div>
                ) : (
                  <div>
                    {AuthPageData["en"].formSection?.formSwitchText?.signup}
                    <span
                      onClick={() => {
                        setAuthState("login");
                        setAuthError("");
                      }}
                      className="cursor-pointer text-white hover:underline"
                    >
                      {AuthPageData["en"].formSection?.formSwitchText?.signup2}
                    </span>
                  </div>
                )}
              </div>
              <div className="mt-4 text-[13px] text-[#b3b3b3]">
                {AuthPageData["en"].formSection?.capchaText}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
