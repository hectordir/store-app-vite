import React from "react";
import { Producto } from "../interfaces/productos";

export type DatosContextType = {
  numero: Producto | null;
  setNumero: React.Dispatch<React.SetStateAction<Producto | null>>;
};

export const DatosContext = React.createContext<DatosContextType | undefined>(
  undefined
);
