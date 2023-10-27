"use client";
import { navigations } from "@/data";
import Link from "next/link";
import { Variants, motion } from "framer-motion";
import useActiveSectionContext from "@/lib/activeSection";
const parent: Variants = {
  open: {
    opacity: "var(--opacity-to)",
    display: "var(--display-to)",
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    opacity: "var(--opacity-from)",
    transitionEnd: {
      display: "var(--display-from)",
    },
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const child: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: "var(--y-from)",
    opacity: "var(--opacity-from)",
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
const Links = ({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const handleClick = (name: string) => {
    if (isOpen) {
      toggle();
    }
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
  };
  return (
    <motion.ul
      variants={parent}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="fixed bottom-0  left-1/2 top-0 z-50 flex w-fit -translate-x-1/2 transform  flex-col justify-center gap-2  [--display-from:none] [--display-to:flex] [--opacity-from:0%] [--opacity-to:100%]  [--y-from:50] lg:bottom-auto lg:right-1/2 lg:top-2   lg:translate-y-0 lg:flex-row lg:items-center lg:justify-center lg:gap-5 lg:rounded-full lg:bg-white/90 lg:p-4 lg:shadow-lg lg:[--display-from:flex] lg:[--opacity-from:100%] lg:[--y-from:0] dark:lg:bg-slate-800/50"
    >
      {navigations.map((nav, index) => (
        <motion.li
          variants={child}
          className="group cursor-pointer space-y-2  text-center  text-2xl lg:text-lg"
          key={index}
        >
          <Link
            className={`${
              activeSection === nav.name &&
              "bg-primary text-white opacity-100  backdrop-blur"
            } transition-color group flex items-center gap-2 rounded-full px-3 py-1 duration-300 hover:bg-red-800 hover:text-white  `}
            href={nav.link}
            onClick={() => handleClick(nav.name)}
          >
            <nav.icon className="h-6 w-6 group-hover:scale-105" />
            {nav.name.charAt(0).toUpperCase() + nav.name.slice(1)}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default Links;
