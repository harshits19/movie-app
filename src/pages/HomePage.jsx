import { Outlet } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import HomeVideoSection from "../components/HomeVideoSection"
import HomeCategorySection from "../components/HomeCategorySection"
import { fetchData, selectHomeStatus } from "../store/DataSlice"
import useTitle from "../hooks/useTitle"

const HomePage = () => {
  const dispatch = useDispatch()
  const status = useSelector(selectHomeStatus)
  if (status === "idle") dispatch(fetchData())
  useTitle("Home")
  return (
    <div className="bg-[#141414]">
      <HomeVideoSection />
      <HomeCategorySection />
      <Outlet />
    </div>
  )
}

export default HomePage
