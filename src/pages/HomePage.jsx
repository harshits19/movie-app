import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utilities/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import HomeNavbar from "../components/HomeNavbar";
import HomeVideoSection from "../components/HomeVideoSection";
import HomeCategorySection from "../components/HomeCategorySection";
import useFetch from "../hooks/useFetch";
import { useDispatch } from "react-redux";
import {
  addPopularMovies,
  addNowPlayingMovies,
  addTopRatedMovies,
} from "../utilities/MovieSlice";

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    /* useFetch("topRated").then((data) =>
      dispatch(addTopRatedMovies(data?.results))
    );
    useFetch("popular").then((data) =>
      dispatch(addPopularMovies(data?.results))
    ); */
    useFetch("nowPlaying").then((data) =>
      dispatch(addNowPlayingMovies(data?.results))
    );
  }, []);
  useEffect(() => {
    const eventHandle = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/");
      }
    });
    return () => eventHandle();
  }, []);

  return (
    <div className="bg-black">
      <HomeNavbar />
      <HomeVideoSection />
      <HomeCategorySection />
    </div>
  );
};

export default HomePage;
