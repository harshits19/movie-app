import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch as SearchBtn } from "react-icons/ai";
import { BsXLg as CloseBtn } from "react-icons/bs";
const NavSearch = () => {
  const navigate = useNavigate();
  const [searchState, setSearchState] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const inputRef = useRef();
  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <form
      className={`flex h-9 text-sm text-white ${
        searchState
          ? "w-32 border-2 border-white bg-[rgba(0,0,0,0.6)] px-2 sm:w-48 xl:w-64"
          : "w-8 bg-transparent"
      } ease transition-all duration-300`}
      onChange={() => {
        navigate(`/home/search?q=${inputRef.current.value}`);
      }}
      onSubmit={(e) => {
        e.preventDefault();
        if (inputRef.current.value)
          navigate(`/home/search?q=${inputRef.current.value}`);
      }}
    >
      <SearchBtn
        className="h-full w-7 cursor-pointer "
        onClick={() => setSearchState(!searchState)}
        title="Search"
      />
      <input
        className={`h-full focus:outline-none ${
          searchState
            ? " visible ml-2 w-full bg-[rgba(0,0,0,0.1)]"
            : " invisible w-0"
        } `}
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
        placeholder="Titles, genres"
        onBlur={() => {
          if (inputRef.current.value === "") setSearchState(false);
        }}
        onMouseOver={handleClick}
        ref={inputRef}
      />
      {searchVal?.length > 0 && (
        <CloseBtn
          className="h-full w-7 cursor-pointer"
          onClick={() => setSearchVal("")}
          title="Close"
        />
      )}
    </form>
  );
};
export default NavSearch;
