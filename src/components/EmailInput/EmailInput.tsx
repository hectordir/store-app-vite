import { useEffect, useState } from "react";
import Styles from "./EmailInput.module.css";
import { useEmail } from "../../states/useEmail";
import { Box, Text, Input, Button } from "@chakra-ui/react";

export const EmailInput = () => {
  const [email, setEmail] = useState("");
  const [onOpen, setOnOpen] = useState(true);
  const storeEmail = useEmail();

  const handleSetEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handleSubmit = () => {
    setOnOpen(false);
    storeEmail.setEmail(email);
  };

  useEffect(() => {
    if (storeEmail.value) {
      setOnOpen(false);
    }
  }, [storeEmail.value]);

  return (
    <>
      {onOpen && (
        <Box className={Styles.emailInputContainer}>
          <Text>Ingresar email</Text>
          <Input placeholder="Email" onChange={handleSetEmail} />
          <Button colorScheme="teal" size="lg" onClick={handleSubmit}>
            Aceptar
          </Button>
        </Box>
      )}
    </>
  );
};
