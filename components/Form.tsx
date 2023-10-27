"use client";
import { motion, Variants } from "framer-motion";
import SubmitBtn from "./SubmitBtn";
import { sendEmail } from "@/lib/sendEmail";

const fieldVariants: Variants = {
  closed: {
    opacity: 0,
    scale: 0.5,
  },
  open: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const formVariants: Variants = {
  closed: {
    transition: {
      staggerChildren: 0.125,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.125,
    },
  },
};

const Form = () => {
  return (
    <motion.form
      variants={formVariants}
      initial="closed"
      whileInView="open"
      viewport={{ once: true }}
      action={sendEmail}
      className="mx-auto flex w-full max-w-xl flex-col items-center gap-8 pt-16 lg:justify-center  lg:pt-0"
    >
      <motion.label variants={fieldVariants} className="relative w-full">
        <input
          type="email"
          name="email"
          required
          placeholder=" "
          maxLength={500}
          className="peer flex h-12 w-full rounded-md  border-2 bg-transparent  px-2 text-center shadow-md outline-none  focus:invalid:border-red-500"
        />
        <span className="pointer-events-none absolute -top-6 left-1/2 inline-block -translate-x-1/2 transition duration-300 after:ml-0.5 peer-placeholder-shown:translate-y-[2.2rem] peer-placeholder-shown:transform peer-valid:after:text-blue-500  peer-valid:after:content-['✓']  peer-invalid:after:text-red-500 peer-invalid:after:content-['*'] peer-focus:-top-6 peer-focus:-translate-y-0  ">
          Your Email
        </span>
      </motion.label>
      <motion.label variants={fieldVariants} className="relative w-full">
        <textarea
          name="message"
          required
          placeholder=" "
          minLength={10}
          maxLength={500}
          className="peer flex h-32 w-full rounded-md border-2 bg-transparent px-2  pt-12 text-center shadow-md outline-none  focus:invalid:border-red-500"
        />
        <span className="pointer-events-none  absolute  -top-6 left-1/2 -translate-x-1/2 transition duration-300 peer-placeholder-shown:translate-y-[4.5rem] peer-placeholder-shown:transform peer-valid:after:text-blue-500  peer-valid:after:content-['✓']  peer-invalid:after:text-red-500 peer-invalid:after:content-['*'] peer-focus:-top-6 peer-focus:-translate-y-0  ">
          Your Message
        </span>
      </motion.label>

      <SubmitBtn />
    </motion.form>
  );
};

export default Form;
