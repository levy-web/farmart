import React from 'react'
import {NavLink} from "react-router-dom"

function FarmerNav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
      <div className='container'>

      <NavLink className="navbar-brand" to='/farm'>
      <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMRX6HhxKOgDVv06vF1Qk2I1OLsbBAh7Jd-w&usqp=CAU"
                    width="70"
                    height="70"
                    className="d-inline-block align-top"
                    alt="FARMART"
                    />
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
                <NavLink className="nav-link" to='/farm'>
                Dashboard
                </NavLink>
            </li>
            <li className="nav-item">
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
                Orders
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to='/farm/profile'>
                Profile
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to='/Animal'>
              Buy Animals
                </NavLink>
            </li>
            </ul>
            <ul className="navbar-nav p-3 m-auto my-2 text-center">
            <li className="nav-item">
                <NavLink className="nav-link" to='/login'>
                Logout
                </NavLink>
            </li>
          </ul>
      </div>
      </div>
    </nav>
  )
}

export default FarmerNav
