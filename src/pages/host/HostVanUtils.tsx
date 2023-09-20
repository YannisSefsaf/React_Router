import { useContext } from "react";
import { VanContext } from "./HostVanContext";

export const useVanContext = () => {
  const context = useContext(VanContext);
  if (!context) throw new Error("useVanContext must be used within a VanProvider");
  return context;
};
