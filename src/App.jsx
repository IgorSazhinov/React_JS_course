import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import './styles/App.css'

export default function App() {

    return (
        <BrowserRouter>
            <div className="navbar">
                <div className="navbar__links">
                    <Link to="/about">О сайте</Link>
                    <Link to="/posts">Посты</Link>
                </div>
            </div>
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/posts" element={<Posts />} />
            </Routes>
        </BrowserRouter>
    )
}