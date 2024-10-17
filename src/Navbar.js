import { useState } from "react";
import { FaBars } from "react-icons/fa";

function Navbar() {

    const [showMenu,setshowMenu] = useState(false);

    const toggler = () => {
        setshowMenu(!showMenu);
    };

    return (
        <header>
            <div className="container-fluid g-0">
                <div className="navbar px-5" id="navbar-div">
                    <div className="logo">
                        <h3>BookBazaar</h3>
                    </div>
                    <div className={`nav-item ${showMenu ? "mobile-menu" : "desktop-menu"}`}>
                        <div className="nav-link">
                            <ul>
                                <li>
                                    <a href="#home">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#home">
                                        Best Seller
                                    </a>
                                </li>
                                <li>
                                    <a href="#home">
                                        Quick Links
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="login-btn">
                            <button className="btn">Log in</button>
                        </div>
                    </div>
                    <div className="toggle-btn">
                        <button onClick={toggler}>
                        <FaBars />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;