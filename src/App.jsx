import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Body from "./components/Body";
import AuthPage from "./pages/AuthPage";
import LandingPage from "./pages/LandingPage";
const HomePage = lazy(() => import("./pages/HomePage"));
const TvPage = lazy(() => import("./pages/TvPage"));
const MoviePage = lazy(() => import("./pages/MoviePage"));
import ContentPage from "./pages/ContentPage";
import ErrorPage from "./pages/ErrorPage";
import store from "./store/Store";

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
      { path: "/login", element: <AuthPage /> },
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
      },
    ],
  },
]);

export default App;
