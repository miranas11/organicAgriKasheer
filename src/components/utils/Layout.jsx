import React from "react";
import { Link, Outlet } from "react-router-dom";
import greenLogo from "../../assets/greenlogo.png";
import "../../styles/Layout.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faBox,
    faInfoCircle,
    faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Layout;

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img
                        src={greenLogo}
                        alt="Organic India Logo"
                        className="logo"
                    />
                </div>

                <ul className="navbar-menu">
                    <li className="navbar-item">
                        <Link to="/">
                            <FontAwesomeIcon icon={faHome} className="icon" />
                            <span className="text">Home</span>
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/products">
                            <FontAwesomeIcon icon={faBox} className="icon" />
                            <span className="text">Products</span>
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/aboutus">
                            <FontAwesomeIcon
                                icon={faInfoCircle}
                                className="icon"
                            />
                            <span className="text">About Us</span>
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/placeorder">
                            <FontAwesomeIcon
                                icon={faShoppingCart}
                                className="icon"
                            />
                            <span className="text">Place Order</span>
                        </Link>
                    </li>
                </ul>
                <div className="extra"></div>
            </div>
        </nav>
    );
};
