import React, { useState } from 'react';
import { Footer, Navbar } from "../../components";
import { json, Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const FarmerRegister = () => {

  const [adminName, setAdminName] = useState('')
  const [farmName, setFarmName] = useState('')
  const [location, setLocation] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [contactInfo, setContactInfo] = useState('')
  const [confPassword, setConfPassword] =useState('')
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault()
    const formData = {
      "admin_name":adminName,
      "farm_name":farmName,
      "location":location,
      "email":email,
      "password":password,
      "contact_info": contactInfo,
      "confPassword": confPassword
    }

    fetch('https://farmart-api.onrender.com/farmers',{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(formData)
    })
    .then((r)=>r.json())
    .then((data)=>{
      if(data.status === 'ok'){
      toast.success(data.message)
      navigate('/login')
      }else {
        setError(data.data.error)        
          toast.error(data.data.error)        
      }
      
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
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    value={adminName}
                    onChange={(e)=>{setAdminName(e.target.value)}}
                    className="form-control"
                    id="admin_name"
                    placeholder="Username"
                    required
                  />
                </div>
                <div className="form-group mb-3">
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
                    type="email"
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    value={location}
                    onChange={(e)=>{setLocation(e.target.value)}}
                    className="form-control"
                    id="location"
                    placeholder="location"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    onChange={(e)=>{setFarmName(e.target.value)}}
                    className="form-control"
                    id="farmName"
                    placeholder="Farm Name"
                    required
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
                </div>
                <div className="my-3">
                <p>
                    Do you want to Buy animals?{" "}
                  <Link to="/register" className="text-decoration-underline text-info">
                    register as a Buyer.
                  </Link>{" "}
                </p>
              </div>
                <div className="text-center mb-4">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block w-100"
                    
                  >
                    Register
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
                  <Link to="/login" className="text-info">
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

export default FarmerRegister;
