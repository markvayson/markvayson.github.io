"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";

const ThemeToggle = ({ isOpen }: { isOpen: boolean }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div
      className={`${
        isOpen ? "absolute right-24 top-4 z-50 flex" : "hidden md:flex"
      }   absolute  right-32 top-4  items-center md:order-2 `}
    >
      <label className="relative flex h-8 items-center gap-1   ">
        <span className="cursor-pointer">Theme</span>
        <input
          type="checkbox"
          checked={theme === "dark" ? true : false}
          onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="peer h-0 w-0 opacity-0"
        />
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ scale: 0.5, opacity: 0, x: -50 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0, x: -50 }}
            key={theme}
            className="flex cursor-pointer items-center md:absolute md:-right-16"
          >
            {theme === "light" ? (
              <SunIcon className="h-6 w-6 " />
            ) : (
              <MoonIcon className="h-6 w-6" />
            )}
          </motion.div>
        </AnimatePresence>
      </label>
    </div>
  );
};

export default ThemeToggle;
