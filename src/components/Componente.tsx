// MiComponente.tsx
import React, { useContext } from "react";
import { DatosContext } from "../context/DatosContext";

const MiComponente: React.FC = () => {
  const context = useContext(DatosContext);

  if (!context) {
    throw new Error("MiComponente debe estar dentro de un DatosProvider");
  }

  const { numero, setNumero } = context;
  console.log(setNumero);
  // Ahora puedes usar 'datos' y 'setDatos' en este componente

  return <div>{String(numero)}</div>;
};

export default MiComponente;
