import { Link } from "react-router-dom";

const ErrorBox = ({ authError, setAuthState, text }) => {
  const UserNotFound = () => {
    return (
      <div>
        {text?.userNF}
        <span
          className="underline cursor-pointer"
          onClick={() => setAuthState("signup")}>
          {text?.userNF2}
        </span>
      </div>
    );
  };
  const IncorrectPassword = () => {
    return (
      <div>
        {text?.incorrPass}
        <span className="underline cursor-pointer">
          <Link to="/getHelp"> {text?.incorrPass2}</Link>
        </span>
      </div>
    );
  };
  const EmailUsed = () => {
    return <div>{text?.emailUsed}</div>;
  };
  const WeakPass = () => {
    return <div>{text?.weakPass}</div>;
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
