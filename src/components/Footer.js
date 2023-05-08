import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import "./footer.css";
import catLogo from "../assets/felinefinder.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <img src={catLogo} alt="Cat Tinder" className="footerlogo" />
        <div className="footer-links mt-4">
          <Link to="/terms-of-service" className="footer-link">
            <Button className="btn-custom">Terms of Service</Button>
          </Link>
          <Link to="/privacy-policy" className="footer-link">
            <Button className="btn-custom">Privacy Policy</Button>
          </Link>
          <Link to="/contact-us" className="footer-link">
            <Button className="btn-custom">Contact Us</Button>
          </Link>
        </div>
        <p className="text-muted">
          © 2023 FelineFinder, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};


export default Footer;

