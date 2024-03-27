import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error.status);

  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center">
      <div className="w-1/4 text-center text-5xl space-y-4">
        <h1 className=" text-blue-700">Opps!</h1>

        <h1 className="font-bold text-red-500">{error.status}</h1>
        <p>{error.statusText}</p>
      </div>
    </div>
  );
};

export default ErrorPage;
