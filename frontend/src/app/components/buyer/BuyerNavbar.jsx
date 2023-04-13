import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  background-color: #3a5f0b;
  color: #ffffff;
  padding: 1rem;
`;

const NavbarBrand = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #ffffff;
`;

const NavbarItem = styled(Link)`
  margin-right: 1rem;
  color: #ffffff;
  text-decoration: none;

  &:hover {
    color: #dcedc8;
  }
`;

const NavbarProfileIcon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-left: auto;
`;

const BuyerNavbar = () => {
  return (
    <NavbarContainer className="navbar navbar-expand-lg">
      <NavbarBrand to="/">Farmart</NavbarBrand>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavbarItem to="/market">Market</NavbarItem>
          </li>
          <li className="nav-item">
            <NavbarItem to="/cart">Cart</NavbarItem>
          </li>
          <li className="nav-item">
            <NavbarItem to="/logout">Logout</NavbarItem>
          </li>
        </ul>
      </div>
      <NavbarProfileIcon
        src="https://via.placeholder.com/30x30.png?text=User"
        alt="Profile Icon"
      />
    </NavbarContainer>
  );
};

export default BuyerNavbar;
