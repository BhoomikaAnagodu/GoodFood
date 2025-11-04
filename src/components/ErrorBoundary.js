import { useRouteError } from "react-router-dom";

const ErrorBoundary = () => {
  const error = useRouteError();
  console.log("Error Msg", error);

  return (
    <div>
      <h1>
        {error?.error?.message || error?.message || "Something Went Wrong"}
      </h1>
    </div>
  );
};

export default ErrorBoundary;
