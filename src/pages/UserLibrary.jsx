/* import { useSelector } from "react-redux"
import { auth, db } from "../utilities/Firebase"
import { selectHomeData } from "../store/DataSlice"
import { doc, setDoc, getDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore"

const addData = async (data, user) => {
  await setDoc(doc(db, "users", user.userId), {
    userList: { data },
  })
}
const updateData = async (data, user) => {
  const docRef = doc(db, "users", user.userId)
  await updateDoc(docRef, { userList: arrayUnion(data) })
}
const removeData = async (data, user) => {
  const docRef = doc(db, "users", user.userId)
  await updateDoc(docRef, { userList: arrayRemove("data") })
} */
const UserLibrary = () => {
  /* const userData = useSelector((store) => store.user.user)
  const { nfOriginals } = useSelector(selectHomeData)
  const user = auth.currentUser;
  console.log(user)
 */
  return (
    <div className="pt-36 text-white">
      UserLibrary
      {/* <button onClick={() => addData(nfOriginals[1], userData)}>Add data</button>
      <br></br>
      <button onClick={() => updateData(nfOriginals[0], userData)}>Update Movie 1 data</button>
      <br></br>
      <button onClick={() => removeData(nfOriginals[1], userData)}>Remove Movie 1 data</button>
      <br></br>
      <button onClick={() => updateData(nfOriginals[2], userData)}>Update Movie 3 data</button>
      <br></br>
      <button onClick={() => updateData(nfOriginals[3], userData)}>Update Movie 4 data</button> */}
    </div>
  )
}
export default UserLibrary
