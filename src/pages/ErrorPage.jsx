import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const err = useRouteError();
  return (
    <div className="container mx-auto text-center">
      <h1 className="sm:text-7xl text-3xl font-bold sm:pt-40 pt-20">
        {"Error " + err?.status + " - " + err?.statusText}
      </h1>
      <h1 className="sm:text-3xl text-xl pt-4">{err?.error?.message}</h1>
    </div>
  );
};
export default ErrorPage;
