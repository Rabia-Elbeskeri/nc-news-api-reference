
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-title">NC News API Docs</div>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/api">API Reference</Link>
            </div>
        </nav>
    );
}