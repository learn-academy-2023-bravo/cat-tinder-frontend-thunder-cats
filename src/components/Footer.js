import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import catLogo from "../assets/felinefinder.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <img src={catLogo} alt="Cat Tinder" className="footerlogo" />
        <div className="footer-links mt-4">
          <Link to="/terms-of-service" className="footer-link">
            Terms of Service
          </Link>
          <Link to="/privacy-policy" className="footer-link">
            Privacy Policy
          </Link>
          <Link to="/contact-us" className="footer-link">
            Contact Us
          </Link>
        </div>
        <p className="text-muted mt-3">
          © 2023 FelineFinder, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
