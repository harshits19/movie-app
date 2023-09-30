import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import ItemCard from "../components/ItemCard"

const UserLibrary = () => {
  const user = useSelector((store) => store.user?.user)
  const list = useSelector((store) => store.libraryData?.data)
  const uid = user?.userId
  const data = list[uid]

  return (
    <div className="mb-52 ml-8 mt-36 text-white sm:ml-12">
      <h1 className="text-2xl font-bold text-white md:text-3xl lg:text-5xl">My List</h1>
      <div className="mr-4 mt-8 flex flex-wrap gap-x-4 gap-y-8 lg:gap-y-16">
        {data?.map((items) => {
          return <ItemCard item={items.item} type={items?.type} key={items?.item?.id} uid={uid} list={list} />
        })}
      </div>
      <Outlet />
    </div>
  )
}
export default UserLibrary

/*  const [uid, setUid] = useState("")
  const [data, setData] = useState([])
  useEffect(() => {
     setUid(user?.userId)
     setData(list[uid])
  }, [uid, user, list]) */

/* const addData = async (data, user, id) => {
  await setDoc(doc(db, "users", user.userId, "posts", id), { data })
}
const removeData = async (user, postId) => {
  await deleteDoc(doc(db, "users", user.userId, "posts", postId))
} 
const getData = async (user) => {
    const postsRef = collection(db, "users", user?.userId, "posts")
    let { docs } = await getDocs(postsRef)
    const datas = []
    docs?.map((doc) => datas?.push(JSON.parse(doc?._document?.data?.value?.mapValue?.fields?.item?.stringValue)))
    setUserList(datas)
  } */
