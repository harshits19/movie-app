import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { updateProfile } from "firebase/auth"
import { auth } from "../utilities/Firebase"
import { ProfileDpData } from "../utilities/Constants"
import { BsArrowLeftShort as BackBtn } from "react-icons/bs"

const AccountEdit = () => {
  const navigate = useNavigate()
  const user = useSelector((store) => store.user?.user)
  const nameRef = useRef("")
  const [selectedImg, setSelectedImg] = useState("")
  const [errState, setErrState] = useState(false)
  useEffect(() => {
    nameRef.current.value = user?.name
  }, [user])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (selectedImg) {
      updateProfile(auth.currentUser, {
        displayName: String(nameRef.current.value),
        photoURL: selectedImg,
      })
        .then(() => {
          navigate("/home/account", { replace: true })
          window.location.reload()
        })
        .catch((err) => console.log(err.code))
    } else setErrState(true)
  }

  return (
    <div className="mt-16 text-3xl text-white md:mt-28">
      <div className="ml-0 flex items-center md:ml-4">
        <span className="cursor-pointer" onClick={() => navigate("..")}>
          <BackBtn className="h-9 w-9 rounded-full hover:bg-[#212121] md:h-11 md:w-11" />
        </span>
        <h2 className="text-2xl font-semibold leading-none md:text-4xl">Edit Profile</h2>
      </div>
      <div className="mx-4 mt-4 md:ml-16">
        <h5 className="text-xl font-semibold leading-none">Choose a profile icon</h5>
        <form className="relative" onSubmit={handleSubmit}>
          {errState && <div className="mt-4 w-max rounded border-2 border-[#ff747b] bg-[#e6323b] py-2 pl-4 pr-8 text-sm font-bold">Select an image first</div>}
          <div className="flex flex-row flex-wrap gap-4 py-4">
            {ProfileDpData?.items?.map((item) => {
              return (
                <label key={item}>
                  <input
                    type="radio"
                    value={item}
                    name="item"
                    onClick={() => {
                      setSelectedImg(item)
                      if (errState) setErrState(false)
                    }}
                  />
                  <img src={item} className={`h-24 w-24 rounded border-2 border-transparent md:h-32 md:w-32 ${item === selectedImg ? "border-white" : ""}`} />
                </label>
              )
            })}
          </div>
          <div>
            <h2 className="mt-4 text-xl font-semibold leading-none">Change Name</h2>
            <input type="text" ref={nameRef} className="mt-4 w-2/3 border-2 border-white bg-[#121212] px-4 py-2 text-sm text-white outline-none focus:border-[#dbdbdb] focus:bg-[rgba(0,0,0,0.4)] md:w-1/2" />
          </div>
          <button className="mb-16 mt-4 bg-[#f1f1f1] px-6 py-1 text-sm font-semibold text-black hover:bg-ogRed hover:text-white">Save</button>
        </form>
      </div>
    </div>
  )
}
export default AccountEdit
