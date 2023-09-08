import { useState, useEffect } from "react";
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
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(addUser({ email: user.email, name: user.displayName }));
        navigate("/home");
      } else {
        dispatch(removeUser());
      }
    });
  }, []);
  return (
    <div>
      <UserEmailContext.Provider
        value={{ userSignupEmail, setUserSignupEmail }}>
        <Outlet />
      </UserEmailContext.Provider>
    </div>
  );
};

export default Body;
