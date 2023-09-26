import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="container mx-auto text-center text-white">
      <h1 className="pt-20 text-3xl font-bold  sm:pt-40 sm:text-7xl">
        Error - 404
      </h1>
      <h1 className="pt-4 text-xl sm:text-3xl">Oops! You seem to be lost.</h1>
      <h1 className="pt-4 text-xl sm:text-3xl">
        <Link to="/home" className="underline">
          Click Here
        </Link>{" "}
        to redirect to Homepage
      </h1>
    </div>
  );
};
export default ErrorPage;
