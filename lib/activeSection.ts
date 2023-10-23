import { ActiveSectionContext } from "@/components/Provider";
import { useContext } from "react";

export default function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error("context not found");
  }

  return context;
}
