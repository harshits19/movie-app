import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/Store";
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
    <Provider store={store}>
      <RouterProvider router={appRouter}>
        <Body />
      </RouterProvider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      { path: "/login", element: <AuthPage /> },
      {
        path: "/home",
        element: <HomeBody />,
        children: [
          {
            path: "/home",
            element: (
              <Suspense>
                <HomePage />
              </Suspense>
            ),
            children: [
              {
                path: "/home/:contentId",
                element: <ContentPage />,
              },
            ],
          },
          {
            path: "/home/tv",
            element: (
              <Suspense>
                <TvPage />
              </Suspense>
            ),
            children: [{ path: "/home/tv/:tvId", element: <ContentPage /> }],
          },
          {
            path: "/home/movie",
            element: (
              <Suspense>
                <MoviePage />
              </Suspense>
            ),
            children: [
              { path: "/home/movie/:movieId", element: <ContentPage /> },
            ],
          },
          {
            path: "/home/search",
            element: <SearchPage />,
            children: [
              { path: "/home/search/:contentId", element: <ContentPage /> },
            ],
          },
        ],
      },
    ],
  },
]);

export default App;
