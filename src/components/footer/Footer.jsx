import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer-left">
        <p>&copy; 2022 Sara Salomon Hailu</p>
        <p>All rights reserved</p>
      </div>
      <div className="footer-middle-left">
        <h5>EMAIL</h5>
        <p>sarasalomonn@gmail.com</p>
      </div>
      <div className="footer-middle-right">
        <h5>LOCATION</h5>
        <p>91522 Ansbach, Germany</p>
      </div>
      <div className="footer-right">
        <h5>Social</h5>
        <p>Instagram</p>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Linkedin</p>
      </div>
    </footer>
  );
};

export default Footer;
