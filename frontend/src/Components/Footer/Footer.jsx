import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo_big1.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pintester_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt="Logo" />
                <p>SEPATU</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <a href="https://instagram.com" className="footer-icons-container">
                    <img src={instagram_icon} alt="Instagram" />
                </a>
                <a href="https://pinterest.com" className="footer-icons-container">
                    <img src={pintester_icon} alt="Pinterest" />
                </a>
                <a href="https://whatsapp.com" className="footer-icons-container">
                    <img src={whatsapp_icon} alt="WhatsApp" />
                </a>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>&copy; 2024 ShoeSmart. All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
