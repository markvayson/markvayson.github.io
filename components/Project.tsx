"use client";
import { PinnedItem } from "@/typings";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
      className="group grid min-h-screen w-full max-w-10xl snap-center grid-cols-1 items-center justify-center  p-5 lg:grid-cols-2  "
    >
      <div className="flex flex-col items-center justify-center gap-2 overflow-hidden [--y-to:0%] max-md:[--y-from:100%] lg:px-10 lg:[--x-to:0%] lg:[--y-from:0%] lg:group-odd:items-end lg:group-odd:[--x-from:100%] lg:group-even:order-2 lg:group-even:items-start lg:group-even:[--x-from:-100%]">
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
            className="bg-red-600 px-2  py-1 lg:group-odd:order-1"
            href={project.homepageUrl}
          >
            See Demo
          </Link>
        </motion.div>
      </div>
      <motion.div
        variants={imgVariants}
        className="relative m-auto h-full w-full max-w-3xl flex-auto lg:max-h-96 lg:group-even:order-1  "
      >
        <Image
          src={project.openGraphImageUrl}
          alt={project.name}
          fill
          className="rounded-md object-cover"
          priority
        />
      </motion.div>
    </motion.article>
  );
};

export default Project;
