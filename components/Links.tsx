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
      className="fixed bottom-0  right-1/3 top-0 z-50 flex translate-x-1/2 transform  flex-col justify-center gap-2  backdrop-blur [--display-from:none] [--display-to:flex] [--opacity-from:0%] [--y-from:50]  md:bottom-auto md:right-1/2 md:top-2 md:translate-y-0   md:flex-row md:items-center md:justify-center md:gap-5 md:rounded-full md:bg-white/90 md:p-5 md:shadow-md md:[--display-from:flex] md:[--opacity-from:100%]  md:[--y-from:0] dark:md:bg-slate-800/50"
    >
      {navigations.map((nav, index) => (
        <motion.li
          variants={child}
          className="group cursor-pointer space-y-2  text-center  text-2xl md:text-xl"
          key={index}
        >
          <Link
            className={`${
              activeSection === nav.name &&
              "bg-red-600 text-white opacity-100  backdrop-blur"
            } transition-color group flex items-center gap-2 rounded-full px-3 py-1 duration-300 hover:bg-red-600 hover:text-white  `}
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
