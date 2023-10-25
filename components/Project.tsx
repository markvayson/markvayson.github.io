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
  },
  visible: {
    y: "var(--y-to)",
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
      className="group grid min-h-screen w-full max-w-10xl snap-center grid-cols-1 items-center justify-center  p-5 lg:grid-cols-2  lg:gap-10"
    >
      <motion.div
        variants={textVariants}
        className="flex flex-col items-center justify-center gap-2 [--y-from:100%] [--y-to:0%] lg:group-odd:items-end lg:group-even:order-2 lg:group-even:items-start"
      >
        <h1 className="text-5xl font-black capitalize">{project.name}</h1>
        <p className="text-center lg:group-odd:text-end lg:group-even:text-start">
          {project.description}
        </p>
        <div className="flex gap-2 pt-5">
          <Link
            target="_blank"
            className="lg:group-odd:order-2"
            href={project.url}
          >
            View Code
          </Link>
          <Link
            target="_blank"
            className="lg:group-odd:order-1"
            href={project.homepageUrl}
          >
            See Demo
          </Link>
        </div>
      </motion.div>
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
