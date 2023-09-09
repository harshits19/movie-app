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
import ErrorBox from "../components/ErrorBox";
import { auth } from "../utilities/Firebase";
import { OGlogo } from "../assets/SVGs";
import { HpBannerImg, ProfileDpData } from "../utilities/Constants";
import Spinner from "../assets/spinner.svg";

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
    setLoading(true);
    if (
      authState == "signup" &&
      nameRef &&
      emailRef.current.value &&
      passRef.current.value
    )
      createUserWithEmailAndPassword(
        auth,
        emailRef?.current?.value,
        passRef?.current?.value
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
                addUser({ email: email, name: displayName, photoURL: photoURL })
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
    else if (
      authState == "login" &&
      emailRef.current.value &&
      passRef.current.value
    )
      signInWithEmailAndPassword(
        auth,
        emailRef?.current?.value,
        passRef?.current?.value
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
      <div className="lg:min-h-[43.75rem] sm:min-h-[32rem] min-h-[30rem] lg:pb-[4rem] sm:pb-[3rem] pb-8 flex h-full relative justify-center">
        <div className="absolute inset-0 md:block hidden">
          <div className="relative h-full w-full overflow-hidden ">
            <img
              src={HpBannerImg[1]}
              className="object-cover opacity-50 w-full h-full scale-125 -translate-y-[10%]"
            />
            <div className="absolute inset-0" />
          </div>
        </div>
        <div className="absolute left-0 right-0 mx-4 md:mx-10 pt-6 md:pt-4 md:bg-transparent bg-black">
          <Link to="/">
            <OGlogo classList="md:h-[45px] md:w-[167px] h-8 w-18 relative" />
          </Link>
        </div>
        <div className="min-h-screen w-full md:max-w-[450px] md:mx-auto md:px-0 px-[5%] md:bg-transparent relative before:content-[''] md:before:h-[96px] before:h-[56px] before:block">
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
                  {!loading && (authState == "login" ? "Sign In" : "Sign Up")}
                  {loading && <img className="h-8 w-8 mx-auto" src={Spinner} />}
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
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot. Learn more.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
