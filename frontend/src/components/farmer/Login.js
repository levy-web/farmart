import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginFarmer } from "../redux/farmer/FarmerAction";
import { Footer, Navbar } from "../../components";

const FarmerLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = useSelector((state) => state.farmer.farmer);
  const isLoading = useSelector((state) => state.farmer.isLoading);
  const error = useSelector((state) => state.farmer.error);
  const token = useSelector((state)=>state.farmer.token)

  localStorage.setItem("TOKEN", token)
  
  console.log(user)
  console.log(isLoading)
  console.log(token)

  useEffect(()=>{
    if (user){
      navigate("/farm")
    }

  },[user])
  

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    // perform login logic here
    dispatch(loginFarmer(email, password))
   
  };



  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Log In</h1>
        <hr />
        {error && <h6 className="text-danger text-center">{error}</h6>}
        {user && <h6 className="text-success text-center">{user.message}</h6>}
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="my-3">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Username"
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
                    Do you want to Buy animals?{" "}
                  <Link to="/login" className="text-decoration-underline text-info">
                    Login as a Buyer.
                  </Link>{" "}
                </p>
              </div>
              <div className="text-center">
                <button
                  className="my-2 mx-auto btn btn-primary"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Login as a Farmer"}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="text-center my-4">
          <p>
            Don't have a farmers account?{" "}
            <Link to="/farmer-register" className="text-decoration-underline text-info">
              Register
            </Link>{" "}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FarmerLogin;
