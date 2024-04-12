import React from "react";
import "./footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="social-buttons">
        <a href="https://www.facebook.com/HarshaHoneyh">
        <img src="/social-media-icons/facebook.png" alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/busy_bee.01/">
          <img src="/social-media-icons/instagram.png" alt="Instagram" />
        </a>
        <a href="https://wa.me/9440982276">
          <img src="/social-media-icons/whatsapp.png" alt="" />
        </a>
        <a href="https://twitter.com/jalaharsha">
          <img src="/social-media-icons/x.png" alt="" />
        </a>
        <a href="https://www.linkedin.com/in/jala-harshavardhan-9b9431237/">
          <img src="/social-media-icons/linkedin.png" alt="" />
        </a>
      </div>
      <p>&copy; 2024 BusyBee. All rights reserved.</p>
      <p>
        <a href="index.html">Privacy Policy</a> | <a href="index.html">Terms of Use</a> | Address:
        Krishna Nagar, Pileru, India | Phone: +91 9440982276
      </p>
    </div>
  );
}

export default Footer;
