import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Body from "./components/Body";
import AuthPage from "./pages/AuthPage";
import LandingPage from "./pages/LandingPage";
const HomePage = lazy(() => import("./pages/HomePage"));
import ErrorPage from "./pages/ErrorPage";
import store from "./utilities/Store";

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
      },
      { path: "/login", element: <AuthPage /> },
    ],
  },
]);

export default App;
