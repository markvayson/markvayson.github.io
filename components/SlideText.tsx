"use client";
import { Variants, motion } from "framer-motion";
import { useState } from "react";

const containerVariants: Variants = {
  hidden: {
    transition: {
      staggerChildren: 0.025,
    },
  },
  visible: {
    transition: {
      staggerChildren: 0.025,
    },
  },
};

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    x: "50%",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.35 },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.25 },
  },
};

const childVariants: Variants = {
  hidden: {
    opacity: 0,
    y: "-50%",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.35 },
  },
  visible: {
    opacity: 0.8,
    y: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.55 },
  },
};

const SlideText = () => {
  const [isExiting, setIsExiting] = useState<boolean>(false);
  const words = ["Computer Engineer", "Web Developing"];
  const [index, setIndex] = useState<number>(0);
  const intro = ["I'm a ", "I'm into "];
  const handleComplete = () => {
    if (!isExiting) {
      return setTimeout(() => {
        setIsExiting(true);
      }, 3000);
    }
    setIndex((index) => (index + 1 <= words.length - 1 ? index + 1 : 0));
    return setIsExiting(false);
  };

  return (
    <motion.h2
      className=" flex items-center  "
      variants={containerVariants}
      initial="hidden"
      animate={isExiting ? "hidden" : "visible"}
      onAnimationComplete={handleComplete}
    >
      {intro[index].split("").map((letter, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          className="inline-block   font-bold md:text-xl lg:text-2xl"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
      {words[index].split("").map((letter, index) => (
        <motion.span
          variants={wordVariants}
          className="inline-block text-2xl font-black md:text-3xl lg:text-5xl"
          key={index}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h2>
  );
};

export default SlideText;
