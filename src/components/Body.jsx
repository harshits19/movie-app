import { React, useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserEmailContext } from "../utilities/UserContext";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utilities/UserSlice";
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
          })
        );
        navigate("/home");
      } else {
        navigate("/");
        dispatch(removeUser());
      }
    });
    return () => eventHandle();
  }, []);

  return (
    <>
      <UserEmailContext.Provider
        value={{ userSignupEmail, setUserSignupEmail }}>
        <Outlet />
      </UserEmailContext.Provider>
    </>
  );
};

export default Body;
