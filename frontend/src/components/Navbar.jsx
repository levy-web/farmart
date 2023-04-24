import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Dropdown from 'react-bootstrap/Dropdown';


const Navbar = () => {
    const state = useSelector(state => state.handleCart)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">
                        <img
                    src="./assets/farm.png"
                    width="70"
                    height="70"
                    className="d-inline-block align-top"
                    alt="FARMART"
                    />
                </NavLink>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Animal">Buy Animals</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/farm">Sell your Animal</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <div className="buttons text-center">
                        {/* <NavLink to="/login" className="btn btn-outline-dark m-2"><i className="fa fa-sign-in-alt mr-1"></i> Login</NavLink> */}
                        <Dropdown className="btn btn-outline-dark m-2">
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic" >
                                Login
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="/login">User</Dropdown.Item>
                                <Dropdown.Item href="/login">Farmer</Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown>
                        {/* <NavLink to="/register" className="btn btn-outline-dark m-2"><i className="fa fa-user-plus mr-1"></i> Register</NavLink> */}
                        <Dropdown className="btn btn-outline-dark m-2">
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic" >
                                Register
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="/register">User</Dropdown.Item>
                                <Dropdown.Item href="/register">Farmer</Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown>
                        <NavLink to="/cart" className="btn btn-outline-dark m-2"><i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length}) </NavLink>
                    </div>
                </div>


            </div>
        </nav>
    )
}

export default Navbar
