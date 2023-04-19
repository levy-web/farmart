import React from 'react'
import {NavLink} from "react-router-dom"

function FarmerNav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
      <div className='container'>
      <NavLink className="navbar-brand" to='/'>
          FARMART
      </NavLink>
      <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
      >
      <span className="navbar-toggler-icon bg-light"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav p-3 m-auto my-2 text-center">
            <li className="nav-item active">
                <NavLink className="nav-link" to='/farm/for_sale'>
                My Animals
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to='/farm/add_for_sale'>
                Add Animal
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to='/farm/orders'>
                Dashboard
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to='/farm/profile'>
                Profile
                </NavLink>
            </li>
            </ul>
            <ul className="navbar-nav p-3 m-auto my-2 text-center">
            <li className="nav-item">
                <NavLink className="nav-link" to='/login'>
                logout
                </NavLink>
            </li>
          </ul>
      </div>
      </div>
    </nav>
  )
}

export default FarmerNav