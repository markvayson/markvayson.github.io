"use client";
import useActiveSectionContext from "@/lib/activeSection";
import { Variants, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import SectionTitle from "./SectionTitle";
import SubmitBtn from "./SubmitBtn";
import { sendEmail } from "@/lib/sendEmail";
import Social from "./Social";

const ContactMe = ({
  socials,
  github,
  whatsapp,
}: {
  socials: SocialAccounts;
  github: string;
  whatsapp: string;
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
  const accounts: { [key: string]: string } = {
    github,
    whatsapp: `https://wa.me/${whatsapp}`,
  };
  socials.nodes.forEach((node) => {
    if (node.provider === "GENERIC") {
      const key = node.url.split("//")[1].split(".");
      node.provider = key.length > 1 ? key[1] : node.url;
    }
    accounts[node.provider.toLowerCase()] = node.url;
  });
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
        <form
          action={sendEmail}
          className="relative   flex h-full w-full flex-col items-center gap-5 px-5 py-5   md:gap-10  "
        >
          <fieldset className="relative h-[3.1rem] w-full  ">
            <label>
              <input
                type="email"
                name="email"
                required
                maxLength={500}
                className="inputClass peer rounded-lg"
              />
              <span className="inputLabelClass">Your Email</span>
            </label>
          </fieldset>
          <fieldset className="relative h-24 w-full flex-auto ">
            <label>
              <textarea
                minLength={10}
                maxLength={2000}
                className="inputClass peer h-full w-full rounded-lg"
                name="message"
                required
              />
              <span className="inputLabelClass">Your Message</span>
            </label>
          </fieldset>
          <SubmitBtn />
        </form>
        <div className="flex w-full flex-auto flex-col items-center pt-2 ">
          <h1 className="text-center text-3xl font-black  md:text-7xl md:tracking-widest">
            Stay Connected.
          </h1>
          <div className="flex  flex-col gap-5 pt-12 md:grid md:grid-cols-3  ">
            {Object.keys(accounts).map((key) => (
              <Social provider={key} url={accounts[key]} key={key} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactMe;
