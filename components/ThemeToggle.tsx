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
      delay: 0.3,
    },
  },
  closed: {
    opacity: "var(--opacity-from)",
  },
};

const ThemeToggle = ({ isOpen }: { isOpen: boolean }) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.button
      type="button"
      aria-label="Theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      variants={themeVariants}
      className={`${
        isOpen ? "left-5" : "right-5 hidden lg:flex"
      } absolute top-5 z-50 flex  items-center gap-2 bg-transparent text-lg capitalize outline-none [--opacity-from:0%] [--opacity-to:100%] lg:[--opacity-from:100%]`}
    >
      <span className="lg:hidden">Change Theme</span>
      {resolvedTheme === "dark" ? (
        <MoonIcon className="h-8 w-8 " />
      ) : (
        <SunIcon className="h-8 w-8 " />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
