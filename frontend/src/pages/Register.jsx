import React, { useState } from 'react';
import { Footer, Navbar } from "../components";
import { json, Link, useNavigate } from 'react-router-dom';

const Register = () => {

  const [username, setUserName] = useState('')
  const [farmName, setFarmName] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [contactInfo, setContactInfo] = useState('')
  // const [confPassword, setConfPassword] =useState('')
  const navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault()
    const formData = {
      "username":username,
      "address":address,
      "email":email,
      "password":password
    }

    fetch('/users',{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(formData)
    })
    .then((r)=>r.json())
    .then((data)=>{
      console.log(data)
      navigate('/login')
      
    })

  }




  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <div className="row my-4 h-100">
          <div className="col-md-7 col-lg-7 col-sm-8 mx-auto">
            <div className="card shadow p-5">
              <h1 className="text-center mb-5">Join farmart</h1>
              <form>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    value={username}
                    onChange={(e)=>{setUserName(e.target.value)}}
                    className="form-control"
                    id="username"
                    placeholder="Username"
                    required
                    value={name}
                    onChange={handleNameChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="password"
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    value={address}
                    onChange={(e)=>{setAddress(e.target.value)}}
                    className="form-control"
                    id="address"
                    placeholder="address"
                    required
                  />
                </div>
                {/* <div className="form-group mb-3">
                  <input
                    type="text"
                    onChange={(e)=>{setFarmName(e.target.value)}}
                    className="form-control"
                    id="farmName"
                    placeholder="Farm Name"
                    required
                  />
                </div> */}
                {/* <div className="form-group mb-3">
                  <input
                    type="number"
                    onChange={(e)=>{setContactInfo(e.target.value)}}
                    className="form-control"
                    id="number"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="password"
                    onChange={(e)=>{setConfPassword(e.target.value)}}
                    className="form-control"
                    id="confPassword"
                    placeholder="Confirm Password"
                    required
                  />
                </div> */}
                <div className="text-center mb-4">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block w-100"
                    disabled
                  >
                    {isLoading ? 'Registering...' : 'Register'}
                  </button>
                </div>
              </form>
              <div className="text-center">
                <p className="mb-0">
                  By signing up, you agree to our{' '}
                  <Link to="/" className="text-info">
                    Terms
                  </Link>{' '}
                  and{' '}
                  <Link to="/" className="text-info">
                    Privacy Policy
                  </Link>
                  .
                </p>
                <p>
                  Have an account?{' '}
                  <Link to="/login"className="text-info">
                                  Login
                              </Link>
                            </p>
                        </div>
                    </div>
                </div>
                </div>
                  </div>
                      <Footer />
                                </>
              );
              };

export default Register;
