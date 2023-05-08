import React from "react"
import { Link, NavLink } from "react-router-dom"
import { Button } from "reactstrap"
import "./footer.css"
import catLogo from "../assets/felinefinder.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <img src={catLogo} alt="Cat Tinder" className="footerlogo" />
        <div className="footer-links mt-4">
          <NavLink to="/terms-of-service" className="footer-link">
            <Button className="btn-custom" color="danger">
              Terms of Service
            </Button>
          </NavLink>
          <NavLink to="/privacy-policy" className="footer-link">
            <Button className="btn-custom" color="danger">
              Privacy Policy
            </Button>
          </NavLink>
          <NavLink to="/contact-us" className="footer-link">
            <Button className="btn-custom" color="danger">
              Contact Us
            </Button>
          </NavLink>
        </div>
        <p className="text-muted">
          © 2023 FelineFinder, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
