import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <React.Fragment>
      <h1>Register</h1>
      <Link to="/login">Login page</Link>
    </React.Fragment>
  );
};

export default Register;
