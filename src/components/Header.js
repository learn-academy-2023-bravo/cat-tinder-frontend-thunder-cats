import React from "react";
import { Nav, Navbar, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import catLogo from "../assets/felinefinder.png";
import "./header.css";

const Header = () => {
  return (
    <Navbar expand="md" className="header">
      <NavLink className="navbar-brand" to="/">
        <img src={catLogo} alt="Cat outline" className="header-cat-logo" />
      </NavLink>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink to="/catIndex" className="nav-link">
            See Cats
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/catNew" className="nav-link">
            Sign Up
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  )
}

export default Header
