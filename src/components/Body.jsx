import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserEmailContext } from "../utilities/UserContext";
import { auth } from "../utilities/Firebase";
import { onAuthStateChanged } from "firebase/auth";

const Body = () => {
  const [userSignupEmail, setUserSignupEmail] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const eventHandle = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/home");
      } else {
        navigate("/");
      }
    });
    return () => eventHandle();
  }, []);

  return (
    <UserEmailContext.Provider value={{ userSignupEmail, setUserSignupEmail }}>
      <Outlet />
    </UserEmailContext.Provider>
  );
};

export default Body;
