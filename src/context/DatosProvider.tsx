import React, { useState } from "react";
import { DatosContext, DatosContextType } from "./DatosContext";
import { Producto } from "../interfaces/productos";

export const DatosProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [numero, setNumero] = useState<Producto | null>(null);

  const value: DatosContextType = { numero, setNumero };

  return (
    <DatosContext.Provider value={value}>{children}</DatosContext.Provider>
  );
};
