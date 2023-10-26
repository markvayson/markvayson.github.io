"use client";
import { PinnedItem } from "@/typings";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
const parentVariants: Variants = {
  hidden: {},
  visible: {},
};
const textVariants: Variants = {
  hidden: {
    opacity: 0,
    y: "var(--y-from)",
    x: "var(--x-from)",
  },
  visible: {
    y: "var(--y-to)",
    x: "var(--x-to)",
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const imgVariants: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const Project = ({ project }: { project: PinnedItem }) => {
  return (
    <motion.article
      variants={parentVariants}
      initial="hidden"
      whileInView="visible"
      className="group flex min-h-screen  w-full max-w-10xl snap-center flex-col  items-center gap-10  pt-16 lg:flex-row    lg:gap-0 "
    >
      <div className="flex flex-col items-center justify-center gap-2 overflow-hidden   [--y-to:0%] max-md:[--y-from:100%] lg:px-10 lg:[--x-to:0%] lg:[--y-from:0%] lg:group-odd:items-end lg:group-odd:[--x-from:100%] lg:group-even:order-2 lg:group-even:items-start lg:group-even:[--x-from:-100%]">
        <motion.h1
          variants={textVariants}
          className="text-5xl font-black capitalize"
        >
          {project.name}
        </motion.h1>
        <motion.p
          variants={textVariants}
          className="text-center lg:group-odd:text-end lg:group-even:text-start"
        >
          {project.description}
        </motion.p>
        <motion.div variants={textVariants} className="flex gap-2 pt-5">
          <Link
            target="_blank"
            className="px-2 py-1 lg:group-odd:order-2"
            href={project.url}
          >
            View Code
          </Link>
          <Link
            target="_blank"
            className="bg-red-600 px-2 py-1  text-white lg:group-odd:order-1"
            href={project.homepageUrl}
          >
            See Demo
          </Link>
        </motion.div>
      </div>
      <motion.div
        variants={imgVariants}
        className="relative h-80  w-full max-w-3xl  lg:m-auto lg:max-h-96 lg:group-even:order-1  "
      >
        <Image
          src={project.openGraphImageUrl}
          alt={project.name}
          fill
          className="rounded-md object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>
    </motion.article>
  );
};

export default Project;
