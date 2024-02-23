import { NavLink } from "react-router-dom";
import carrito from "../img/carrito.png";
import logo from "../img/logo.png";
import count from "./ProductsList";

export default function Navbar() {
  console.log(count);
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
          <p style={{ paddingLeft: "50px" }}>0</p>
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
