
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="home">
            <h1>Welcome to the NC News API</h1>
            <p>This is the documentation for the backend of Northcoders News, a Reddit-style web app.</p>
            <p>Use the API Reference tab to explore all endpoints, or browse articles using the buttons below.</p>
            <div className="home-links">
                <a href="https://nc-daily-news.onrender.com/api/articles" target="_blank">View Articles</a>
                <a href="https://nc-daily-news.onrender.com/api/topics" target="_blank">Browse Topics</a>
                <a href="https://nc-daily-news.onrender.com/api/users" target="_blank">User Profiles</a>
            </div>
        </div>
    );
}
