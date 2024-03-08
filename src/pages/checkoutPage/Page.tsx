import {
  Box,
  Text,
  HStack,
  VStack,
  Input,
  Checkbox,
  Radio,
  RadioGroup,
  Stack,
  Select,
  Flex,
  Spacer,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import CheckoutSummary from "./checkoutSummary/CheckoutSummary";
import { useDiscount } from "../../components/useDiscount";

export default function CheckoutPage() {
  const [ship, setShip] = useState("0");
  const [pay, setPay] = useState("0");
  const { total, checkout, descuento } = useDiscount();

  return (
    <Flex>
      <Box p="4">
        <HStack alignItems="baseline">
          <Box marginLeft="150px">
            <VStack alignItems="flex-start">
              <Text>Informacion de Envio</Text>
              <Text>Nombre Completo</Text>
              <Input placeholder="Nombre completo" />
              <Text>Direccion</Text>
              <Input placeholder="Direccion completa" />
              <HStack>
                <Box>
                  <Text>Codigo ZIP</Text>
                  <Input placeholder="Codigo Zip" />
                </Box>
                <Box>
                  <Text>Ciudad</Text>
                  <Input placeholder="Ciudad" />
                </Box>
              </HStack>
              <Text>Email</Text>
              <Input placeholder="email@example.com" />
              <Checkbox>
                La dirección de facturacion es la misma que el envio
              </Checkbox>
              <Text>Metodo de Envio</Text>
              <RadioGroup onChange={setShip} value={ship}>
                <Stack direction="row">
                  <Radio value="1">Express $14.99</Radio>
                  <Radio value="2">Standard $4.99</Radio>
                </Stack>
              </RadioGroup>
              <Text>Informacion de Pago</Text>
              <RadioGroup onChange={setPay} value={pay}>
                <Stack direction="row">
                  <Radio value="3">Tarjeta de Credito</Radio>
                  <Radio value="4">PayPal</Radio>
                </Stack>
              </RadioGroup>
              <HStack>
                <Box>
                  <Text>Numero de tarjeta de credito</Text>
                  <Input placeholder="Tarjeta de credito" />
                </Box>
                <Box>
                  <Text>Nombre en la tarjeta</Text>
                  <Input placeholder="Nombre" />
                </Box>
              </HStack>
              <Text>Fecha de Expiracion</Text>
              <HStack>
                <Select placeholder="Mes">
                  <option value="option1">01</option>
                  <option value="option2">02</option>
                  <option value="option3">03</option>
                  <option value="option4">04</option>
                  <option value="option5">05</option>
                  <option value="option6">06</option>
                  <option value="option7">07</option>
                  <option value="option8">08</option>
                  <option value="option9">09</option>
                  <option value="option10">10</option>
                  <option value="option11">11</option>
                  <option value="option12">12</option>
                </Select>
                <Select placeholder="Año">
                  <option value="option1">2024</option>
                  <option value="option2">2025</option>
                  <option value="option3">2026</option>
                  <option value="option4">2027</option>
                  <option value="option5">2028</option>
                  <option value="option6">2029</option>
                  <option value="option7">2031</option>
                  <option value="option8">2032</option>
                  <option value="option9">2033</option>
                  <option value="option10">2034</option>
                </Select>
              </HStack>
            </VStack>
          </Box>
        </HStack>
      </Box>
      <Spacer />
      <Box p="4" marginRight="150px">
        <Text>Resumen del Carrito</Text>
        <VStack overflowY="auto">
          <Box w="450px" h="450px">
            <CheckoutSummary />
          </Box>
        </VStack>
        <VStack>
          <HStack>
            <Text>Subtotal : </Text>
            <Text>${checkout}</Text>
          </HStack>
          <HStack>
            <Text>Descuento : </Text>
            <Text>${descuento}</Text>
          </HStack>
          <HStack>
            <Text>Total : </Text>
            <Text>${total}</Text>
          </HStack>
          <Button>Realizar Pedido</Button>
        </VStack>
      </Box>
    </Flex>
  );
}
