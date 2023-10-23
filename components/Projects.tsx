"use client";

import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useActiveSectionContext from "@/lib/activeSection";
import Link from "next/link";

const articleVariants: Variants = {
  hidden: {
    opacity: 0.2,
  },
  visible: {
    opacity: 1,
  },
};

const childVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const imgVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const Projects = ({ data }: { data: PinnedItem[] }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("projects");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <section
      ref={ref}
      id="projects"
      className="relative flex flex-col items-center space-y-5"
    >
      <SectionTitle title="Featured Projects" />
      {data.map((project, index) => (
        <motion.article
          variants={articleVariants}
          initial="hidden"
          whileInView="visible"
          className="group flex min-h-screen w-full shrink-0 snap-center items-center justify-center"
          key={index}
        >
          <div className="grid h-screen w-full max-w-10xl gap-2 max-sm:mt-24 max-sm:grid-rows-2 md:mt-0   md:max-h-96 md:grid-cols-2 md:gap-10 ">
            <motion.div
              variants={imgVariants}
              className="relative group-even:md:order-2"
            >
              <Image
                src={project.openGraphImageUrl}
                alt={project.name}
                className="rounded-[2rem] p-5 md:p-0"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
            <motion.div
              variants={childVariants}
              className="flex flex-col items-center gap-5 p-5 md:items-start md:justify-center md:p-0 group-even:md:order-1 group-even:md:items-end "
            >
              <h1 className="text-5xl font-black capitalize md:text-7xl">
                {project.name}
              </h1>
              <p className="text-justify text-base md:text-lg">
                {project.description}
              </p>
              <div className="flex  items-center gap-5">
                <Link
                  target="_blank"
                  className="rounded-full bg-red-500 px-3 py-2 text-white transition duration-300 hover:scale-125 md:text-lg group-even:md:order-2"
                  href={project.homepageUrl}
                >
                  See Demo
                </Link>

                <Link
                  target="_blank"
                  className="transition duration-300 hover:scale-125 md:text-lg group-even:md:order-1"
                  href={project.url}
                >
                  View Code
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.article>
      ))}
    </section>
  );
};

export default Projects;
