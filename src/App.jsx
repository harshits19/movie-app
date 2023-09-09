import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Body from "./components/Body";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
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
