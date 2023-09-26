import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import HomeBody from "./components/HomeBody";
import AuthPage from "./pages/AuthPage";
import LandingPage from "./pages/LandingPage";
import ErrorPage from "./pages/ErrorPage";
const HomePage = lazy(() => import("./pages/HomePage"));
const TvPage = lazy(() => import("./pages/TvPage"));
const MoviePage = lazy(() => import("./pages/MoviePage"));
import ContentPage from "./pages/ContentPage";
import SearchPage from "./pages/SearchPage";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/" element={<Body />}>
        {/* non protected routes */}
        <Route index path="/" element={<LandingPage />} />
        <Route path="login" element={<AuthPage />} />
      </Route>
      {/* protected routes */}
      <Route path="home" element={<HomeBody />}>
        <Route
          path="/home"
          element={
            <Suspense>
              <HomePage />
            </Suspense>
          }
        >
          <Route index path=":contentId" element={<ContentPage />} />
        </Route>
        <Route
          path="/home/tv"
          element={
            <Suspense>
              <TvPage />
            </Suspense>
          }
        >
          <Route index path=":tvId" element={<ContentPage />} />
        </Route>
        <Route
          path="/home/movie"
          element={
            <Suspense>
              <MoviePage />
            </Suspense>
          }
        >
          <Route index path=":movieId" element={<ContentPage />} />
        </Route>
        <Route
          path="/home/search"
          element={
            <Suspense>
              <SearchPage />
            </Suspense>
          }
        >
          <Route index path=":searchParams" element={<ContentPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
