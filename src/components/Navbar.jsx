

import "./Navbar.css"
import { Link } from "react-router-dom"

function Navbar({ cartCount = 0 }) {
  return (
    <header className="site-navbar">
      <div className="navbar-brand">AMZHOON</div>
      <nav className="navbar-links">
        <Link to="/dashboard">Home</Link>
        <Link to="/add-product">Add Product</Link>
        <a href="#products">Products</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="navbar-actions">
        <button className="navbar-cta">Cart ({cartCount})</button>
      </div>
    </header>
  )
}

export default Navbar