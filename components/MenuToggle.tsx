"use client";
import { SVGMotionProps, Variants, motion, useCycle } from "framer-motion";
import Links from "./Links";
import ThemeToggle from "./ThemeToggle";

type PathProps = SVGMotionProps<SVGPathElement>;

const Path: React.FC<PathProps> = (props) => {
  return (
    <motion.path
      strokeWidth="3"
      strokeLinecap="round"
      className="stroke-slate-950 dark:stroke-slate-50"
      {...props}
    />
  );
};

const sidebar: Variants = {
  open: {
    width: "100%",
    height: "100%",
    borderRadius: 0,
    top: 0,
    right: 0,
    opacity: 1,
  },
  closed: {
    width: 40,
    height: 40,
    right: 12,
    top: 10,
    opacity: 1,
    borderRadius: 100,
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const MenuToggle = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav
      className={
        isOpen ? "fixed inset-0 z-30  backdrop-blur" : " relative z-50"
      }
      initial="closed"
      animate={isOpen ? "open" : "closed"}
    >
      <motion.div
        className="fixed  z-50 bg-white/90 shadow-md dark:bg-slate-800/90 md:hidden "
        variants={sidebar}
      />
      <button
        className="fixed right-5 top-5 z-50 cursor-pointer text-slate-50 outline-none    md:hidden   "
        onClick={() => toggleOpen()}
      >
        <svg width="24" height="24" fill="#8f4848" viewBox="0 0 23 23">
          <Path
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
          />
          <Path
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
          />
        </svg>
      </button>
      <ThemeToggle isOpen={isOpen} />
      <Links isOpen={isOpen} toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
