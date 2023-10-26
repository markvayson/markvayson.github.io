"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";

const themeVariants: Variants = {
  open: {
    opacity: "var(--opacity-to)",
    transition: {
      duration: 0.5,
    },
  },
  closed: {
    opacity: "var(--opacity-from)",
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
      className={`${
        isOpen ? "left-5" : "right-5 hidden lg:flex"
      } absolute  top-5 z-50 text-lg capitalize`}
    >
      <span className="lg:hidden">{theme} Mode</span>
      {theme === "dark" ? (
        <MoonIcon className="h-8 w-8 max-lg:hidden" />
      ) : (
        <SunIcon className="h-8 w-8 max-lg:hidden" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
