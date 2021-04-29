import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer-area">
        <div className="footer-wave-box">
          <div className="footer-wave footer-animation"></div>
        </div>
        <div className="main">
          <div className="footer">
            <div className="single-footer">
              <h4>About Us</h4>
              <p>Lorem</p>
              <div className="footer-social">
                <a href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="single-footer">
              <h4>main menu</h4>
              <ul>
                <li>
                  <a href="">
                    <i className="fas fa-chevron-right"></i>Home
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fas fa-chevron-right"></i>Servivec
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fas fa-chevron-right"></i>Gallery
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fas fa-chevron-right"></i>Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="single-footer">
              <h4>Contact Us</h4>
              <ul>
                <li>
                  <a href="">
                    <i className="fas fa-map-marker-alt"></i>Bangalore,
                    Karnataka
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fas fa-mobile-alt"></i>+91 9353515130
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fas fa-envelope"></i>ck@gmail.com
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fas fa-globe-europe"></i>www.ck.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="copy">
            <p>Copyright &copy; 2020 All rights reserved | Developed by CK </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
