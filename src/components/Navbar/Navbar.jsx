import { NavLink } from "react-router-dom";
import "./Navbar.css";

// Links del menú
const links = [
  { to: "/", label: "Inicio" },
  { to: "/menu", label: "Menu" },
  { to: "/acerca", label: "About" },
  { to: "/contacto", label: "Contact" },
  { to: "/resenas", label: "Reviews" }
];

function Navbar() {
  return (
    <header className="navbar">

      <div className="navbar__container">

        {/* Logo */}
        <h1 className="navbar__brand">
          Coffee House
        </h1>

        {/* Navegación */}
        <nav className="navbar__nav">

          <ul className="navbar__list">

            {links.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to}>
                  {link.label}
                </NavLink>
              </li>
            ))}

          </ul>

        </nav>

      </div>

    </header>
  );
}

export default Navbar;