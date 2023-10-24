"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";

const themeVariants: Variants = {
  open: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  closed: {
    opacity: 0,
  },
};

const ThemeToggle = ({ isOpen }: { isOpen: boolean }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  console.log(isOpen);
  return (
    <motion.button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      variants={themeVariants}
      animate="open"
      className={`${
        isOpen ? "left-5" : "right-5 hidden md:flex"
      } absolute  top-5 z-50 text-lg capitalize`}
    >
      <span className="md:hidden">{theme} Mode</span>
      {theme === "dark" ? (
        <MoonIcon className="h-8 w-8 max-sm:hidden" />
      ) : (
        <SunIcon className="h-8 w-8 max-sm:hidden" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
