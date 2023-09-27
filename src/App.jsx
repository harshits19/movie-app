import { lazy, Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import Body from "./components/Body"
import HomeBody from "./components/HomeBody"
import AuthPage from "./pages/AuthPage"
import LandingPage from "./pages/LandingPage"
import ErrorPage from "./pages/ErrorPage"
const HomePage = lazy(() => import("./pages/HomePage"))
const TvPage = lazy(() => import("./pages/TvPage"))
const MoviePage = lazy(() => import("./pages/MoviePage"))
import ContentPage from "./pages/ContentPage"
import SearchPage from "./pages/SearchPage"
import StripeShimmer from "./components/StripeShimmer"

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      {/* non protected routes */}
      <Route path="/" element={<Body />}>
        <Route index path="/" element={<LandingPage />} />
        <Route path="login" element={<AuthPage />} />
      </Route>
      {/* protected routes */}
      <Route path="home" element={<HomeBody />}>
        <Route
          path="/home"
          element={
            <Suspense
              fallback={
                <div className="ml-8 min-h-screen w-full pt-20 sm:ml-12 md:pt-36">
                  <StripeShimmer />
                </div>
              }>
              <HomePage />
            </Suspense>
          }>
          <Route index path=":contentId" element={<ContentPage />} />
        </Route>
        <Route
          path="/home/tv"
          element={
            <Suspense
              fallback={
                <div className="ml-8 min-h-screen w-full pt-20 sm:ml-12">
                  <StripeShimmer />
                </div>
              }>
              <TvPage />
            </Suspense>
          }>
          <Route index path=":tvId" element={<ContentPage />} />
        </Route>
        <Route
          path="/home/movie"
          element={
            <Suspense
              fallback={
                <div className="ml-8 min-h-screen w-full pt-20 sm:ml-12">
                  <StripeShimmer />
                </div>
              }>
              <MoviePage />
            </Suspense>
          }>
          <Route index path=":movieId" element={<ContentPage />} />
        </Route>
        <Route path="/home/search" element={<SearchPage />}>
          <Route index path=":searchParams" element={<ContentPage />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
