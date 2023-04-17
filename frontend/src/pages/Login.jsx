import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // perform login logic here
    setIsLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Log In</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="my-3">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Username"
                  value={username}
                  onChange={handleUsernameChange}
                />
              </div>
              <div className="my-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="my-3">
                <p>
                  Forgot your login details?{" "}
                  <Link to="/" className="text-decoration-underline text-info">
                    Get help signing in.
                  </Link>{" "}
                </p>
              </div>
              <div className="text-center">
                <button
                  className="my-2 mx-auto btn btn-primary"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Log In"}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="text-center my-4">
          <p>
            Don't have an account?{" "}
            <Link to="/Register" className="text-decoration-underline text-info">
              Register
            </Link>{" "}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
