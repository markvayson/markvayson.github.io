"use client";
import { motion } from "framer-motion";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <motion.h1
      initial={{ opacity: 0, width: "0%" }}
      whileInView={{ opacity: 1, width: "auto" }}
      transition={{ duration: 1 }}
      className="sticky left-0 top-0 z-20 h-fit w-fit overflow-hidden whitespace-nowrap   pt-5  text-center text-lg font-black  md:pt-24 md:text-2xl"
    >
      {title}
    </motion.h1>
  );
};

export default SectionTitle;
