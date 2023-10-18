import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <React.Fragment>
      <h1>Login</h1>
      <Link to="/register">Register page</Link>
    </React.Fragment>
  );
};

export default Login;
