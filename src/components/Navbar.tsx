import { NavLink } from "react-router-dom";
import carrito from "../img/carrito.png";
import logo from "../img/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar bg-primary">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          <img
            src={logo}
            alt="logo"
            className="mx-4"
            style={{ width: "4rem" }}
          />
        </NavLink>
        <NavLink to="/products" className="navbar-brand">
          Productos
        </NavLink>
        <NavLink to="/about" className="navbar-brand">
          About
        </NavLink>
        <NavLink to="/cart" className="navbar-brand">
          <img
            src={carrito}
            alt="carrito"
            className="mx-4 "
            style={{ width: "4rem" }}
          />
        </NavLink>
      </div>
    </nav>
  );
}
