"use client";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/20/solid";
import { Variants, motion } from "framer-motion";
import { useEffect, useState } from "react";
const parentVariants: Variants = {
  initial: {
    transition: {
      staggerChildren: 0.225,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.225,
    },
  },
};

const childVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
const Articles = ({ text }: { text: { [key: string]: string } }) => {
  const [curr, setCurr] = useState<number>(0);
  useEffect(() => {
    const slideInterval = setInterval(next, 5000);
    return () => clearInterval(slideInterval);
  }, [curr]);

  const result: { [key: number]: string } = {};
  Object.keys(text).forEach((item, index) => {
    result[index] = `-translate-x-[${index * 100}%]`;
  });
  const next = () =>
    setCurr((curr) =>
      curr + 1 <= Object.keys(text).length - 1 ? curr + 1 : 0,
    );

  const prev = () =>
    setCurr((curr) =>
      curr - 1 >= 0 ? curr - 1 : Object.keys(text).length - 1,
    );
  return (
    <motion.article
      variants={parentVariants}
      initial="initial"
      whileInView="animate"
      className="relative flex bg-red-300 max-sm:w-screen max-sm:snap-x   max-sm:snap-mandatory   md:grid md:min-h-screen  md:w-full md:grid-cols-2  md:gap-x-[24rem] md:pb-24"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute -bottom-12 left-0 right-0 z-10 flex items-center justify-center gap-5  md:hidden   "
      >
        <ArrowLeftCircleIcon
          onClick={prev}
          className="h-8 w-8 opacity-70 active:opacity-90"
        />
        <div className="flex h-2 w-fit items-center gap-2">
          {Object.keys(text).map((item, index) => (
            <span
              key={index}
              className={`${
                curr === index
                  ? "h-3 w-3 bg-red-500"
                  : "h-2 w-2 dark:bg-slate-50"
              } inline-block rounded-full  transition-all `}
            />
          ))}
        </div>
        <ArrowRightCircleIcon
          onClick={next}
          className="h-8 w-8 opacity-70 active:opacity-90"
        />
      </motion.div>
      {Object.entries(text).map(([key, value]) => (
        <motion.div
          variants={childVariants}
          key={key}
          className={`group flex transform ${
            curr === 1 && "-translate-x-[100%]"
          } ${curr === 2 && "-translate-x-[200%]"} ${
            curr === 3 && "-translate-x-[300%]"
          } ${curr === 4 && "-translate-x-[400%]"} ${
            curr === 5 && "-translate-x-[500%]"
          }  flex-col   items-center duration-300  ease-in-out     max-sm:min-w-full md:-translate-x-0   md:justify-center md:gap-5`}
        >
          <div className="flex h-fit w-fit flex-col items-center gap-2 transition-all  max-sm:mx-2 md:group-hover:scale-105 md:group-hover:rounded-xl md:group-hover:backdrop-blur ">
            <h1 className="whitespace-nowrap text-center text-xl font-black md:text-3xl">
              {key}
            </h1>
            <p className="flex-auto px-5  text-center tracking-wider md:text-lg ">
              {value}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.article>
  );
};

export default Articles;
