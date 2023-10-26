"use client";
import { useEffect } from "react";
import { Variants, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useActiveSectionContext from "@/lib/activeSection";
import Social from "./Social";
import SectionTitle from "./SectionTitle";
import Form from "./Form";
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

const Contact = ({ socials }: { socials: { [key: string]: string } }) => {
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
      className="relative grid min-h-screen grid-cols-1  overflow-hidden "
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <SectionTitle title="Message Me" />
      <Form />
      <div className="flex grow flex-col items-center ">
        <h1 className="text-center text-3xl font-black capitalize">
          Stay Connected.
        </h1>
        <div className="grid w-full grid-cols-2  gap-2 p-5  ">
          {Object.keys(socials).map((key) => (
            <Social provider={key} url={socials[key]} key={key} />
          ))}
        </div>
      </div>
      {/* <div className="relative m-auto grid h-full w-full max-w-10xl flex-auto grid-cols-1 divide-slate-700 ">
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
      </div> */}
    </motion.section>
  );
};

export default Contact;
