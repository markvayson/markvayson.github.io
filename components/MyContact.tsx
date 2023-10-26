"use client";
import { Variants, motion } from "framer-motion";
import Form from "./Form";
import SectionTitle from "./SectionTitle";
import Social from "./Social";
import { useInView } from "react-intersection-observer";
import useActiveSectionContext from "@/lib/activeSection";
import { useEffect } from "react";

const socialVariants: Variants = {
  hidden: {
    transition: {
      staggerChildren: 0.125,
    },
  },
  visible: {
    transition: {
      staggerChildren: 0.125,
    },
  },
};

const MyContact = ({ socials }: { socials: { [key: string]: string } }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("contact");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <section
      ref={ref}
      id="contact"
      className="relative flex min-h-screen w-full snap-start flex-col items-center gap-2   "
    >
      <SectionTitle title="Message Me" />
      <div className="m-auto flex h-full w-full max-w-10xl flex-auto flex-col gap-5  p-5 lg:max-h-96  lg:flex-row  lg:gap-10 lg:p-0">
        <Form />
        <div className="flex  w-full flex-auto flex-col items-center gap-5 ">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-center text-5xl font-black lg:text-7xl"
          >
            Stay Connected.
          </motion.h1>
          <motion.div
            variants={socialVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="m-auto grid h-fit w-fit grid-cols-2  gap-5 gap-x-10 lg:grid-cols-3 "
          >
            {Object.keys(socials).map((key) => (
              <Social key={key} url={socials[key]} provider={key} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MyContact;
