import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ApiReference from "./pages/ApiReference";
import NotFound from "./pages/NotFound";
import "./App.css";

const App = () => {
    return (
        <Router>
            <div className="navbar">
                <h1>NC News API Docs</h1>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/api">API Reference</Link>
                    <a href="https://nc-news.onrender.com" target="_blank" rel="noreferrer">Live Site</a>
                </nav>
            </div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/api" element={<ApiReference />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default App;
