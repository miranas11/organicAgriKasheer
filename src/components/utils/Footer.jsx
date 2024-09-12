import React from "react";
import "../../styles/Footer.css";

import logo from "../../assets/blacklogo-no.png";

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={logo} alt="Logo" className="logo-img" />
                </div>

                <div className="footer-social">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>

                {/* Contact Information */}
                <div className="footer-contact">
                    <p>Contact us: +1 (555) 123-4567</p>
                </div>

                {/* Copyright Information */}
                <div className="footer-copyright">
                    <p>
                        &copy; {new Date().getFullYear()} MyCompany. All Rights
                        Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
