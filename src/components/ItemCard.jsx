import { Link } from "react-router-dom"
import useGenres from "../hooks/useGenres"
import { IoAddSharp as AddBtn, IoRemoveSharp as RemoveBtn, IoCaretForwardCircle as PlayBtn, IoChevronDownSharp as DownBtn } from "react-icons/io5"
import { BsHandThumbsUp as LikeBtn, BsHandThumbsDown as DislikeBtn } from "react-icons/bs"
import { useDispatch } from "react-redux"
import { addItemToLibrary, removeItemFromLibrary } from "../store/LibrarySlice"
const ItemCard = ({ item, type, uid, list }) => {
  const dispatch = useDispatch()
  let checkState = false
  if (list[uid])
    for (const obj of list[uid]) {
      if (obj.item.id === item.id) {
        checkState = true
        break
      }
    }
  return (
    <div className="group z-10 flex h-32 w-56 shrink-0 cursor-pointer flex-col rounded-md bg-[#252525] text-white transition-all duration-300 ease-[ease] hover:z-[15] hover:scale-125 hover:shadow-[0_0_1rem_#00000099,0_6px_6px_#00000080] lg:hover:scale-150">
      <Link to={"" + item?.id} state={{ item, type }} className="contents">
        <img className="h-full w-full rounded-md object-cover group-hover:h-[85%] group-hover:rounded-bl-none group-hover:rounded-br-none" src={"https://image.tmdb.org/t/p/w500" + item?.backdrop_path} />
      </Link>
      <div className="hidden min-h-fit rounded-bl-md rounded-br-md bg-[#252525] p-2 group-hover:flex group-hover:h-fit group-hover:flex-col group-hover:shadow-[0_0_1rem_#00000099,0_6px_6px_#00000080]">
        <div className="flex justify-between">
          <div className="flex items-center">
            <Link to={"" + item?.id} state={{ item, type }}>
              <PlayBtn className="mr-0.5 h-[30px] w-[30px] rounded-full hover:text-[#e5e5e5]" title="Play" />
            </Link>
            {!checkState ? (
              <div onClick={() => dispatch(addItemToLibrary({ item, type, uid }))}>
                <AddBtn className="mr-1 h-[25px] w-[25px] rounded-full border-2 border-[#ffffff80] p-[3px] hover:border-[#e5e5e5]" title="Add to list" />
              </div>
            ) : (
              <div onClick={() => dispatch(removeItemFromLibrary({ item, type, uid }))}>
                <RemoveBtn className="mr-1 h-[25px] w-[25px] rounded-full border-2 border-[#ffffff80] p-[3px] hover:border-[#e5e5e5]" title="Remove from list" />
              </div>
            )}
            <LikeBtn className="mr-1 h-[25px] w-[25px] rounded-full border-2 border-[#ffffff80] p-[0_4px] hover:border-[#e5e5e5]" title="Like" />
            <DislikeBtn className="mr-1 h-[25px] w-[25px] rounded-full border-2 border-[#ffffff80] p-[0_4px] hover:border-[#e5e5e5]" title="Dislike" />
          </div>
          <Link to={"" + item?.id} state={{ item, type }}>
            <DownBtn className="mr-1 h-[25px] w-[25px] rounded-full border-2 border-[#ffffff80] p-[2px_3px_0px] hover:border-[#e5e5e5]" title="View" />
          </Link>
        </div>
        <div className="line-clamp-2 text-ellipsis text-[0.8rem] font-bold">{item?.title || item?.name || item?.original_name}</div>
        <div className="text-[0.65rem] font-bold text-green-500 ">{item?.vote_average > 1 ? Math.round(item?.vote_average * 10) + "% Match" : "80% Match"}</div>
        <div className="text-[0.6rem] font-semibold">{useGenres(type, item?.genre_ids)}</div>
      </div>
    </div>
  )
}
export default ItemCard
