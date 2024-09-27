"use client";
import "./footer.css";
import { CiDeliveryTruck, CiCreditCard1  } from "react-icons/ci";
import { MdPlaylistAddCheckCircle } from "react-icons/md";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaHeadset,

} from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <footer className="footer container">
      {/* Top Line with Features */}
      <div className="footer-features">
        <div className="feature-item">
          <CiDeliveryTruck className="feature-icon" />
          <div>
            <h4>Free Shipping</h4>
            <p>We provide free shipping for orders over $400</p>
          </div>
        </div>
        <div className="feature-item">
          <FaHeadset className="feature-icon" />
          <div>
            <h4>24/7 Support</h4>
            <p>Contact us via email for support</p>
          </div>
        </div>
        <div className="feature-item">
          <CiCreditCard1 className="feature-icon" />
          <div>
            <h4>Online Payment</h4>
            <p>We accept online payments via bank cards</p>
          </div>
        </div>
        <div className="feature-item">
          <MdPlaylistAddCheckCircle className="feature-icon" />
          <div>
            <h4>Product Variety</h4>
            <p>Visit our shop for a wide variety of products</p>
          </div>
        </div>
      </div>



      {/* Payment and Social Section */}
      <div className="footer-bottom">

        <div className="link-group">
          <h4>F.A.Q</h4>
          <ul>
            <li><Link href="Order">How to order</Link></li>
            <li><Link href="Order">Shipping Info</Link></li>
            <li><Link href="Order">Payment Options</Link></li>
            <li><Link href="Order">Support</Link></li>
          </ul>
        </div>

        <div className="payment-section">
          <h4>Payment Methods</h4>
          <img src="images/paypal.png" alt="Paypal" />
          <img src="images/cashapp.png" alt="Mastercard" />
          <img src="images/visa.png" alt="Visa" />
          <img src="images/btc.png" alt="Bitcoin" />
        </div>

      
        
        <div className="social-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/emmataylor675/" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://instagram.com/emmataylorscooters" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <FaTwitter />
            </a>
          
          </div>
        </div>
      </div>

      {/* Footer Disclaimer */}
      <div className="footer-disclaimer">
        <p>&copy; {new Date().getFullYear()} EmmaGo, All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
