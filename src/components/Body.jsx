import { useState, useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { UserEmailContext, LanguageContext } from "../utilities/Context"
import { auth } from "../utilities/Firebase"
import { onAuthStateChanged } from "firebase/auth"

const Body = () => {
  const [userSignupEmail, setUserSignupEmail] = useState({})
  const [language, setLanguage] = useState("en")
  const navigate = useNavigate()

  useEffect(() => {
    const eventHandle = onAuthStateChanged(auth, (user) => {
      if (user) navigate("/home")
      else navigate("/")
    })
    return () => eventHandle()
  }, [])

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <UserEmailContext.Provider value={{ userSignupEmail, setUserSignupEmail }}>
        <Outlet />
      </UserEmailContext.Provider>
    </LanguageContext.Provider>
  )
}

export default Body
