import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addUser } from "../store/UserSlice"
import { auth, db } from "../utilities/Firebase"
import { onAuthStateChanged } from "firebase/auth"
import HomeNavbar from "./HomeNavbar"

const HomeBody = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    const eventHandle = onAuthStateChanged(auth, async (user) => {
      if (user) {
        dispatch(
          addUser({
            email: user.email,
            name: user.displayName,
            photoURL: user.photoURL,
            userId: user.uid,
          }),
        )
      } else navigate("/")
    })
    return () => eventHandle()
  }, [])

  return (
    <div>
      <HomeNavbar />
      <Outlet />
    </div>
  )
}
export default HomeBody
