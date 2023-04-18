import React from 'react'
import {NavLink} from "react-router-dom"

function FarmerNav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className='container'>
      <NavLink className="navbar-brand text-light" to='/'>
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
          <ul className="navbar-nav p-3  me-auto">
            <li className="nav-item active">
                <NavLink className="nav-link text-light" to='for_sale'>
                My Animals
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-light" to='add_for_sale'>
                Sell
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-light" to='orders'>
                Orders
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-light" to='profile'>
                Profile
                </NavLink>
            </li>
            </ul>
            <ul className="navbar-nav p-3  ms-auto">
            <li className="nav-item">
                <NavLink className="nav-link text-light" to='login'>
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