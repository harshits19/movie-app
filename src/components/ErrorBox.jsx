import { Link } from "react-router-dom";

const ErrorBox = ({ authError, setAuthState }) => {
  const UserNotFound = () => {
    return (
      <div>
        Sorry, we can't find an account with this email address. Please try
        again or{" "}
        <span
          className="underline cursor-pointer"
          onClick={() => setAuthState("signup")}>
          create a new account
        </span>
      </div>
    );
  };
  const IncorrectPassword = () => {
    return (
      <div className="">
        Incorrect password. Please try again or you can{" "}
        <span className="underline cursor-pointer">
          <Link to="/getHelp">reset your password</Link>
        </span>
      </div>
    );
  };
  const EmailUsed = () => {
    return (
      <div className="">
        The provided email is already in use by an existing user
      </div>
    );
  };
  const WeakPass = () => {
    return (
      <div className="">
        The entered password is weak, Please use atleast 6 characters in
        password.
      </div>
    );
  };

  return (
    <div className="bg-[#e87c03] rounded text-[14px] mb-4 px-5 py-2.5 text-white">
      {authError == "auth/user-not-found" && <UserNotFound />}
      {authError == "auth/wrong-password" && <IncorrectPassword />}
      {authError == "auth/email-already-in-use" && <EmailUsed />}
      {authError == "auth/weak-password" && <WeakPass />}
    </div>
  );
};

export default ErrorBox;
