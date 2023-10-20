import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <React.Fragment>
      <h1>Error page</h1>
      <Link to="/">Back to Home page</Link>
    </React.Fragment>
  );
};

export default Error;
