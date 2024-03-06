import { useEffect, useState } from "react";
import Styles from "./EmailInput.module.css";
import { useEmail } from "../../states/useEmail";

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
        <div className={Styles.emailInputContainer}>
          <p>Ingresar email</p>
          <input onChange={handleSetEmail} type="text" />
          <button onClick={handleSubmit}>Aceptar</button>
        </div>
      )}
    </>
  );
};
