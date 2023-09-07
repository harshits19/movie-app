import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AuthPage from "./components/AuthPage";
import HomePage from "./components/HomePage";
import LandingPage from "./components/LandingPage";
import { UserEmailContext, CurrentUserContext } from "./utilities/UserContext";

const App = () => {
  const [userSignupEmail, setUserSignupEmail] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});
  return (
    <UserEmailContext.Provider value={{ userSignupEmail, setUserSignupEmail }}>
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <RouterProvider router={appRouter}>
          <Outlet />
        </RouterProvider>
      </CurrentUserContext.Provider>
    </UserEmailContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      { path: "/login", element: <AuthPage /> },
    ],
  },
]);

export default App;
