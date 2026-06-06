import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-box">
          <h3>MyApp</h3>
          <p>
            Modern React Application with responsive design and reusable 
            components.
          </p>
        </div>

        <div className="footer-box">
          <h3>Quick Links</h3>
          <p>Home</p>
          <p>About</p>
          <p>Services</p>
          <p>Contact</p>
        </div>

        <div className="footer-box">
          <h3>Contact</h3>
          <p> demo@gmail.com</p>
          <p>+91 9876543210</p>
          <p>Gujarat, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 MyApp | All Rights Reserved
      </div>


    </footer>
  );
}

export default Footer;