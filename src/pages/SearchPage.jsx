import { useEffect, useState } from "react"
import { Outlet, useSearchParams, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import CategoryStripes from "../components/CategoryStripes"
import useSearch from "../hooks/useSearch"

const SearchPage = () => {
  const [param] = useSearchParams()
  const query = param.get("q")
  const [data, setData] = useState({})
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const searchQuery = useSelector((store) => store.searchData)

  useEffect(() => {
    if (query === "") navigate("..")
    const timer = setTimeout(() => {
      if (searchQuery[query]) {
        setData({
          movie: searchQuery[query]?.movie,
          tv: searchQuery[query]?.tv,
        })
      } else if (query !== null) useSearch(query, setData, dispatch)
    }, 400)
    return () => clearTimeout(timer)
  }, [query])
  return (
    <div className="mt-20 md:mt-32">
      <div className=" text-white">
        <h1 className="ml-8 text-xl font-bold sm:ml-12 md:text-3xl">{`Search Query :  ${query ? query : ""}`}</h1>
        <div className="categoryStripes">
          {data?.movie?.length > 0 && <CategoryStripes data={data?.movie} title="Movies" type="movie" />}
          {data?.tv?.length > 0 && <CategoryStripes data={data?.tv} title="Tv Shows" type="tv" />}
          {(data?.movie?.length && data?.tv?.length) === 0 && <div className="pt-16 text-center sm:text-2xl md:text-3xl lg:text-5xl">No search results found</div>}
        </div>
      </div>
      <Outlet />
    </div>
  )
}
export default SearchPage
