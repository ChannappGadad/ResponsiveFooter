import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className= "Footer">
      <div className="sub_footer">
        <div>
          <h4>NetSkill</h4>
          <a href="/" className="SocialMedia">{<FaFacebook/>}</a>
          <FaTwitter className="SocialMedia" />
          <FaInstagram className="SocialMedia" />
          <FaYoutube className="SocialMedia" />
        </div>
        <div>
          <ul className="undefinedList">
            <h4>Below items</h4>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>          
            <li>
              <a href="#">About</a>
            </li>                  
            <li>
              <a href="#">Terms</a>
            </li>          
            <li>
              <a href="#">Privacy policy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
