import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">MyApp</div>

      <nav className="nav">
        <a href="/">Home</a>
        <a href="/">About</a>
        <Link to="/login">login</Link>
        <Link to="/register">register</Link>
      </nav>
    </header>
  );
}

export default Header;