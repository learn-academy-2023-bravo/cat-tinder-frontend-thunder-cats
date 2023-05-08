import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Nav, Navbar, NavbarBrand, NavItem } from "reactstrap";
import catLogo from "../assets/felinefinder.png";
import "./header.css";

const Header = () => {
  return (
    <Navbar color="light" light expand="md" className="header">
      <NavbarBrand tag={Link} to="/">
        <img src={catLogo} alt="Cat outline" className="header-cat-logo" />
      </NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink to="/catIndex" className="btn-custom">
            See Cats
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/catNew" className="btn-custom">
            Sign Up
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Header;



