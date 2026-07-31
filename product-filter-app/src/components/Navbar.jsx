import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { CartContext } from "../context/CartContext";

function Navbar() {

    const { theme, toggleTheme } = useContext(ThemeContext);
    const { cart } = useContext(CartContext);

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">

            <div className="logo">
                🛍 ShopSphere
            </div>

            <div
                className="menu-icon"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </div>

            <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

                <li><a href="#home">Home</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#categories">Categories</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>

            </ul>

            <div className="nav-right">

                <div className="cart">
                    🛒 {cart.length}
                </div>

                <button
                    className="theme-btn"
                    onClick={toggleTheme}
                >
                    {theme === "light" ? "🌙 Dark" : "☀ Light"}
                </button>

            </div>

        </nav>
    );
}

export default Navbar;