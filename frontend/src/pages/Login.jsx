import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../components/redux/user/UserAction";
import { Footer, Navbar } from "../components";
import {toast} from 'react-hot-toast'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const buyer = useSelector((state) => state.user.buyer);
  const isLoading = useSelector((state) => state.user.isLoading);


  useEffect(()=>{
    if (buyer){
      navigate("/")
    }

  },[buyer])
  

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    // perform login logic here
    dispatch(loginUser(email, password))
   
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
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
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
                  Are you a farmer?{" "}
                  <Link to="/farmer-login" className="text-decoration-underline text-info">
                    Login as a farmer.
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