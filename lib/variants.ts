import { Variants } from "framer-motion";

export const parentVariants: Variants = {
  hidden: {
    transition: {
      staggerChildren: 0.125,
      delayChildren: 0.125,
    },
  },
  visible: {
    transition: {
      staggerChildren: 0.125,
      delayChildren: 0.125,
    },
  },
  exit: {},
};

export const topicsVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
    x: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
  },
  exit: {
    opacity: 0,
  },
};

export const childVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0,
  },
};
