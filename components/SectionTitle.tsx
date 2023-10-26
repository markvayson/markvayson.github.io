"use client";
import { Variants, motion } from "framer-motion";
import useActiveSectionContext from "@/lib/activeSection";

const titles: { [key: string]: string } = {
  home: "Welcome to my Portfolio",
  projects: "Featured Projects",
  contact: "Message Me",
};

const parentVariants: Variants = {
  hidden: {
    transition: {
      staggerChildren: 0.125,
    },
  },
  visible: {
    transition: {
      staggerChildren: 0.125,
    },
  },
};

const childVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const SectionTitle = () => {
  const { activeSection } = useActiveSectionContext();
  return (
    <motion.h1
      key={activeSection}
      variants={parentVariants}
      initial="hidden"
      animate="visible"
      className="fixed left-0 right-0 top-5 space-x-2 whitespace-nowrap text-center text-xl font-bold  lg:hidden"
    >
      {titles[activeSection].split(" ").map((word) => (
        <motion.span
          key={word}
          className="inline-block"
          variants={childVariants}
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default SectionTitle;
