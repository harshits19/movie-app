import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext, UserEmailContext } from "../utilities/UserContext";
import { auth } from "../utilities/Firebase";
import { signOut } from "firebase/auth";

const HomePage = () => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const { userSignupEmail, setUserSignupEmail } = useContext(UserEmailContext);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      setCurrentUser({});
      setUserSignupEmail({});
      console.log("sign outed");
      navigate("/");
    });
  };

  return (
    <div>
      Welcome -- {currentUser?.email}
      <br></br>
      <button onClick={() => handleSignOut()}>SignOut</button>
    </div>
  );
};

export default HomePage;
