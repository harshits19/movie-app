import { Link } from "react-router-dom"

const ErrorBox = ({ authError, setAuthState, text }) => {
  const UserNotFound = () => {
    return (
      <div>
        {text?.userNF}
        <span className="cursor-pointer underline" onClick={() => setAuthState("signup")}>
          {text?.userNF2}
        </span>
      </div>
    )
  }
  const IncorrectPassword = () => {
    return (
      <div>
        {text?.incorrPass}
        <span className="cursor-pointer underline">
          <Link to="/getHelp"> {text?.incorrPass2}</Link>
        </span>
      </div>
    )
  }
  const EmailUsed = () => {
    return <div>{text?.emailUsed}</div>
  }
  const WeakPass = () => {
    return <div>{text?.weakPass}</div>
  }

  return (
    <div className="mb-4 rounded bg-[#e87c03] px-5 py-2.5 text-[14px] text-white">
      {authError == "auth/user-not-found" && <UserNotFound />}
      {authError == "auth/wrong-password" && <IncorrectPassword />}
      {authError == "auth/email-already-in-use" && <EmailUsed />}
      {authError == "auth/weak-password" && <WeakPass />}
    </div>
  )
}

export default ErrorBox
