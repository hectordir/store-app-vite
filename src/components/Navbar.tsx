import { NavLink } from "react-router-dom";
import carrito from "../img/carrito.png";
import logo from "../img/logo.png";
import { useCart } from "../states/useCart";
import { EmailInput } from "./EmailInput/EmailInput";
import { Button, useColorMode, Box, Text, Image } from "@chakra-ui/react";
import { FiMoon, FiSun } from "react-icons/fi";
export default function Navbar() {
  const { count } = useCart();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box className="navbar bg-primary">
      <EmailInput />
      <Box className="container">
        <NavLink to="/" className="navbar-brand">
          <Image
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
          <Text style={{ paddingLeft: "50px" }}>{count}</Text>
          <Image
            src={carrito}
            alt="carrito"
            className="mx-4 "
            style={{ width: "4rem" }}
          />
        </NavLink>
        <Button onClick={toggleColorMode}>
          {" "}
          {colorMode === "light" ? <FiMoon /> : <FiSun />}
        </Button>
      </Box>
    </Box>
  );
}
