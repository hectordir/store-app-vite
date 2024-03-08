import CartSummary from "./components/cartSummary/CartSummary";
import ItemsList from "./components/ItemsList/ItemsList";
import { useCart } from "../../states/useCart";
import Styles from "./components/cartSummary/CartSummary.module.css";
import trash from "../../img/trash.png";
import { discount } from "../../bff-utils";
import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";

export default function CartProduct() {
  const { products, handleDeleteCart } = useCart();

  return (
    <Box className={Styles.body}>
      <Box>
        <HStack style={{ float: "right" }}>
          {products.length > 0 ? (
            <Box marginRight="40" marginTop="10">
              <CartSummary />
            </Box>
          ) : null}
        </HStack>
        <Box overflowY="auto" maxH="86vh" maxW="1000px">
          {products.map((item, index) => (
            <Box className={Styles.block}>
              <Text className={Styles.Total}>
                <ItemsList />
              </Text>
              <Box>
                <Image
                  src={item.product.thumbnail}
                  alt={item.product.title}
                  className={Styles.img}
                />
              </Box>

              <Box className={Styles.info}>
                <Text>{item.product.title}</Text>

                <Text>{item.product.brand}</Text>

                <Text as="del">${item.product.price}</Text>
                <Text>
                  $
                  {discount(
                    item.product.price,
                    item.product.discountPercentage
                  )}
                </Text>

                <Button
                  onClick={() => handleDeleteCart(index)}
                  className={Styles.button}
                >
                  <Image src={trash} alt="trash" className={Styles.trash} />
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
