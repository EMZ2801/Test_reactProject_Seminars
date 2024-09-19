import React from "react";
import "./styles/App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";

function App() {
  return (
    <BrowserRouter>
      <div className="navbar">
        <div className="navbar__links">
          <Link to="/about"> о сайте </Link>
          <Link to="/posts"> Посты </Link>
        </div>
      </div>
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/posts" element={<Posts />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
