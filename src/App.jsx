import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthPage from "./components/AuthPage";
import HomePage from "./components/HomePage";
import LandingPage from "./components/LandingPage";

const App = () => {
  return <RouterProvider router={appRouter} />;
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  { path: "/login", element: <AuthPage /> },
]);

export default App;
