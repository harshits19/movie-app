import { React, useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { UserEmailContext } from "../utilities/UserContext";
import { addUser } from "../store/UserSlice";
import { auth } from "../utilities/Firebase";
import { onAuthStateChanged } from "firebase/auth";

const Body = () => {
  const [userSignupEmail, setUserSignupEmail] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const eventHandle = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          addUser({
            email: user.email,
            name: user.displayName,
            photoURL: user.photoURL,
          }),
        );
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
