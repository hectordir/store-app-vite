import { useCart } from "../../../../states/useCart";
import Styles from "./CartSummary.module.css";
import { useEmail } from "../../../../states/useEmail";
import { Button, Input, Text, VStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useDiscount } from "../../../../components/useDiscount";

export default function CartSummary() {
  const { products, clearCart } = useCart();
  const { total, checkout, descuento } = useDiscount();
  const { value } = useEmail();

  const handleCheckout = () => {
    console.log(`handleCheckout ${value}`);
  };

  return (
    <VStack>
      <Text>Resumen de Compra</Text>
      <Text>
        Productos ({products.length}) ${checkout}
      </Text>
      <Text>Descuentos $-{descuento}</Text>
      <Text>Total ${total}</Text>
      <NavLink to={`/checkout`}>
        <Button onClick={handleCheckout}>Continuar Compra</Button>
      </NavLink>
      <Input
        style={{
          marginTop: "10px",
        }}
        placeholder="Enter your email"
      />
      {products.length > 0 ? (
        <Button onClick={clearCart} className={Styles.Button}>
          Limpiar
        </Button>
      ) : null}
    </VStack>
  );
}
