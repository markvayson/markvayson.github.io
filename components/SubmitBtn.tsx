"use client";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { motion, Variants } from "framer-motion";

const btnVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <motion.button
      variants={btnVariants}
      className=" z-20  h-8 w-fit  rounded-lg bg-slate-900 px-2 py-1 text-slate-50 disabled:bg-transparent dark:bg-slate-800 dark:text-slate-50"
      type="submit"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-slate-900 dark:border-slate-100" />
      ) : (
        "Send The Message"
      )}
    </motion.button>
  );
};

export default SubmitBtn;
