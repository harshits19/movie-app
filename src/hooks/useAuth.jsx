/* import { useDispatch } from "react-redux";
import { addUser } from "../utilities/UserSlice";
import { auth } from "../utilities/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const useAuthet = ({
  authState,
  setAuthState,
  setAuthError,
  setLoading,
  emailRef,
  passRef,
  nameRef,
  setUserSignupEmail,
}) => {
  const dispatch = useDispatch();

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
        })
          .then(() => {
            const { email, displayName } = auth.currentUser;
            dispatch(addUser({ email: email, name: displayName }));
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
export default useAuthet;
 */
