"use client";
import { ReactNode, useEffect } from "react";
import { Variants, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useActiveSectionContext from "@/lib/activeSection";
import Social from "./Social";
import SectionTitle from "./SectionTitle";
const sectionVariants: Variants = {
  hidden: {
    transition: {
      staggerChildren: 0.275,
    },
  },
  visible: {
    transition: {
      staggerChildren: 0.275,
    },
  },
};

const Contact = ({
  socials,
  children,
}: {
  children: ReactNode;
  socials: { [key: string]: string };
}) => {
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
    <motion.section
      ref={ref}
      id="contact"
      className="relative flex min-h-screen w-full snap-start flex-col items-center overflow-hidden "
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <SectionTitle title="Contact Me" />
      <div className="relative m-auto flex w-full max-w-10xl flex-auto flex-col divide-slate-700 max-sm:gap-2 max-sm:divide-y max-sm:px-5  md:grid md:max-h-96 md:grid-cols-2  md:flex-row">
        {children}

        <div className="flex w-full flex-auto flex-col items-center pt-2 ">
          <h1 className="text-center text-3xl font-black  md:text-7xl md:tracking-widest">
            Stay Connected.
          </h1>
          <div className="flex  flex-col gap-5 pt-12 md:grid md:grid-cols-3  ">
            {Object.keys(socials).map((key) => (
              <Social provider={key} url={socials[key]} key={key} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
