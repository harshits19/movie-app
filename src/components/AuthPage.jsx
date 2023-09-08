import { useContext, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utilities/UserSlice";
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
import { OGlogo } from "../assets/SVGs";
import { HpBannerImg } from "../utilities/Constants";
import ErrorBox from "./ErrorBox";
import { auth } from "../utilities/Firebase";

const AuthPage = () => {
  const { userSignupEmail } = useContext(UserEmailContext);
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [authError, setAuthError] = useState("");
  const [authState, setAuthState] = useState("login");
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
    if (authState == "signup" && nameRef && emailRef.current.value && passRef)
      createUserWithEmailAndPassword(
        auth,
        emailRef?.current?.value,
        passRef?.current?.value
      )
        .then((user) => {
          updateProfile(user?.user, {
            displayName: nameRef?.current?.value,
          })
            .then(() => {
              const { email, displayName } = auth.currentUser;
              dispatch(addUser({ email: email, name: displayName }));
            })
            .catch((error) => {
              console.log(error.code);
            });
          setAuthState("login");
        })
        .catch((err) => {
          setAuthError(err.code);
        });
    else if (authState == "login" && emailRef.current.value && passRef)
      signInWithEmailAndPassword(
        auth,
        emailRef?.current?.value,
        passRef?.current?.value
      )
        .then((user) => {})
        .catch((err) => {
          setAuthError(err.code);
        });
  };

  return (
    <div className="h-full w-full md:px-6 relative overflow-hidden bg-black md:bg-[#00000066] md:bg-gradient-to-t md:from-[#000000cc] md:from-0% md:via-transparent md:via-60% md:to-[#000000cc] md:to-100%">
      <img
        src={HpBannerImg[1]}
        className="mix-blend-overlay object-cover absolute h-full w-full min-h-[100vh] scale-125 -translate-y-[10%] -z-10"
      />
      <div className="pt-6 mx-4 md:pt-0 md:px-0">
        <Link to="/">
          <OGlogo classList="md:h-24 md:w-44 h-8 w-18 relative" />
        </Link>
      </div>
      <div className="min-h-screen md:max-w-[450px] md:mx-auto md:px-0 px-[5%] md:bg-transparent">
        <div className="md:min-h-[630px] min-h-[540px] md:px-[68px] md:pt-[60px] md:pb-10 px-0 pt-5 pb-[30px] m-0 bg-[#000000bf] rounded flex flex-col w-full box-border ">
          <div className="grow">
            <div className="text-[32px] font-medium mb-7 text-white">
              {authState == "login" ? "Sign In" : "Sign up"}
            </div>
            {authError && (
              <ErrorBox authError={authError} setAuthState={setAuthState} />
            )}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAuth();
              }}>
              {authState == "signup" && (
                <div className="flex-auto pb-4 max-w-full ">
                  <input
                    className={
                      (nameError ? "border-b-2 border-[#e87c03] " : "") +
                      " bg-[#333333] w-full h-[50px] leading-[50px] px-4 border-0 text-base font-normal text-white outline-none rounded"
                    }
                    name="name"
                    type="text"
                    placeholder="Name"
                    ref={nameRef}
                    onBlur={() =>
                      validateName(nameRef?.current?.value, setNameError)
                    }
                  />
                  {nameError && (
                    <div className="text-[13px] leading-[13px] pt-2 text-[#e87c03]">
                      Your name must contain between 4 and 60 characters.
                    </div>
                  )}
                </div>
              )}
              <div className="flex-auto pb-4 max-w-full ">
                <input
                  className={
                    (emailError ? "border-b-2 border-[#e87c03] " : "") +
                    " bg-[#333333] w-full h-[50px] leading-[50px] px-4 border-0 text-base font-normal text-white outline-none rounded"
                  }
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  ref={emailRef}
                  onBlur={() =>
                    validateEmail(emailRef?.current?.value, setEmailError)
                  }
                />
                {emailError && (
                  <div className="text-[13px] leading-[13px] pt-2 text-[#e87c03]">
                    Please enter a valid email address or phone number.
                  </div>
                )}
              </div>
              <div className="flex-auto pb-4 max-w-full relative">
                <input
                  className={
                    (passError ? "border-b-2 border-[#e87c03] " : "") +
                    " bg-[#333333] w-full h-[50px] leading-[50px] pr-14 pl-4 border-0 text-base font-normal text-white outline-none rounded"
                  }
                  name="password"
                  type="password"
                  placeholder="Password"
                  ref={passRef}
                  onBlur={() =>
                    validatePassword(passRef?.current?.value, setPassError)
                  }
                />
                <span
                  className="absolute right-0 top-[14px] px-2 text-sm text-[#8c8c8c] cursor-pointer"
                  onClick={toggleVisibility}>
                  {show ? "SHOW" : "HIDE"}
                </span>
                {passError && (
                  <div className="text-[13px] leading-[13px] pt-2 text-[#e87c03]">
                    Your password must contain between 4 and 60 characters.
                  </div>
                )}
              </div>
              <button className="mx-0 mt-6 mb-3 w-full h-[50px] bg-ogRed hover:bg-ogRedHover hover:ease-ogTransHover ease-ogTrans duration-250ms transition-bgColor rounded font-medium text-center text-white cursor-pointer">
                {authState == "login" ? "Sign In" : "Sign Up"}
              </button>
              <div className="flex justify-between text-[#b3b3b3] text-[13px]">
                <span className="flex items-center remember-me">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    id="rememberMe"
                    className="h-4 w-4"
                  />
                  <label htmlFor="rememberMe" className="pl-1">
                    Remember Me
                  </label>
                </span>
                <span>Need Help?</span>
              </div>
            </form>
          </div>
          <div className="grow">
            <div className="text-[#b3b3b3] text-base mt-4">
              {authState == "login" ? (
                <div>
                  New to Netflix?{" "}
                  <span
                    onClick={() => setAuthState("signup")}
                    className="hover:underline text-white cursor-pointer">
                    Sign up now
                  </span>
                </div>
              ) : (
                <div>
                  Already have account?{" "}
                  <span
                    onClick={() => setAuthState("login")}
                    className="hover:underline text-white cursor-pointer">
                    Sign in now
                  </span>
                </div>
              )}
            </div>
            <div className="mt-4 text-[13px] text-[#b3b3b3]">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. Learn more.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;