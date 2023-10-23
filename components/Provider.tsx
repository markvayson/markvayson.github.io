"use client";
import { navigations } from "@/data";
import { ThemeProvider } from "next-themes";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

type SectionName = (typeof navigations)[number]["name"];

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: Dispatch<SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: Dispatch<SetStateAction<number>>;
};
export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

const Provider = ({ children }: { children: ReactNode }) => {
  const [activeSection, setActiveSection] = useState<SectionName>("home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  return (
    <ThemeProvider attribute="class">
      <ActiveSectionContext.Provider
        value={{
          activeSection,
          setActiveSection,
          timeOfLastClick,
          setTimeOfLastClick,
        }}
      >
        {children}
      </ActiveSectionContext.Provider>
    </ThemeProvider>
  );
};

export default Provider;
