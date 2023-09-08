import { auth } from "../utilities/Firebase";
import { signOut } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      Welcome --
      <br></br>
      <button onClick={() => handleSignOut()}>SignOut</button>
    </div>
  );
};

export default HomePage;
