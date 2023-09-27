import { addUser } from "../store/UserSlice"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from "../utilities/Firebase"
import { ProfileDpData } from "../utilities/Constants"

const useAuth = (emailRef, passRef, nameRef, dispatch, setLoading, setAuthError, setAuthState, authState) => {
  if (authState == "signup" && nameRef.current.value) {
    setLoading(true)
    createUserWithEmailAndPassword(auth, emailRef?.current?.value, passRef?.current?.value)
      .then((user) => {
        setLoading(false)
        updateProfile(user?.user, {
          displayName: nameRef?.current?.value,
          photoURL: ProfileDpData?.items[Math.floor(Math.random() * 10)],
        }).then(() => {
          const { email, displayName, photoURL, uid } = auth.currentUser
          dispatch(
            addUser({
              email: email,
              name: displayName,
              photoURL: photoURL,
              userId: uid,
            }),
          )
        })
        setAuthState("login")
        setLoading(false)
      })
      .catch((err) => {
        setAuthError(err.code)
        setLoading(false)
      })
  } else if (authState == "login") {
    setLoading(true)
    signInWithEmailAndPassword(auth, emailRef.current?.value, passRef.current?.value)
      .then(() => {
        setLoading(false)
      })
      .catch((err) => {
        setAuthError(err.code)
        setLoading(false)
      })
  }
}
export default useAuth
