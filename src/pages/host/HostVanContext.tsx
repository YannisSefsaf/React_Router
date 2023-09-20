import React, { createContext, ReactNode } from "react";
import { VanProps } from "../Vans/Van";

export const VanContext = createContext<VanProps | null>(null);

interface VanProviderProps {
  value: VanProps;
  children: ReactNode;
}

export const VanProvider: React.FC<VanProviderProps> = ({ value, children }) => {
  return <VanContext.Provider value={value}>{children}</VanContext.Provider>;
};
