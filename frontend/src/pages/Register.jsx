import React, { useState } from 'react';
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
      });

      if (!response.ok) {
        throw new Error('Failed to create user account');
      }

      setIsLoading(false);
      // redirect user to login page
      window.location.href = '/login';
    } catch (error) {
      setIsLoading(false);
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <div className="row my-4 h-100">
          <div className="col-md-7 col-lg-7 col-sm-8 mx-auto">
            <div className="card shadow p-5">
              <h1 className="text-center mb-5">Join farmart</h1>
              {errorMessage && (
                <div className="alert alert-danger">{errorMessage}</div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Full Name"
                    required
                    value={name}
                    onChange={handleNameChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="email"
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
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="text-center mb-4">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block w-100"
                    disabled={isLoading}
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
