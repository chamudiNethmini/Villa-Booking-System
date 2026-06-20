import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="logo" onClick={closeMenu}>
          CoastalStay Villa
        </NavLink>

        <button className="menu-btn" onClick={() => setOpen(!open)}>
          ☰
        </button>

        <nav className={open ? "nav-links active" : "nav-links"}>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/facilities" onClick={closeMenu}>Facilities</NavLink>
          <NavLink to="/gallery" onClick={closeMenu}>Gallery</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
          <NavLink to="/book-now" className="nav-book-btn" onClick={closeMenu}>
            Book Now
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;