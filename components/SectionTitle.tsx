"use client";
import { motion } from "framer-motion";
import useActiveSectionContext from "@/lib/activeSection";

const titles: { [key: string]: string } = {
  home: "Welcome to my Portfolio",
  projects: "Featured Projects",
  contact: "Message Me",
};

const SectionTitle = () => {
  const { activeSection } = useActiveSectionContext();
  return (
    <motion.h1
      key={activeSection}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="fixed left-0 right-0 top-5 whitespace-nowrap text-center text-xl font-bold  lg:hidden"
    >
      {titles[activeSection]}
    </motion.h1>
  );
};

export default SectionTitle;
