"use client";
import Image from "next/image";
import Link from "next/link";
import { Variants, motion } from "framer-motion";

const socialChildVariants: Variants = {
  closed: {
    opacity: 0,
    y: 100,
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const Social = ({ url, provider }: { url: string; provider: string }) => {
  return (
    <motion.div variants={socialChildVariants} className="flex items-center">
      <Link target="_blank" className="flex items-center gap-2" href={url}>
        <Image
          alt={provider}
          width={35}
          height={35}
          src={`/assets/socials/${provider}.png`}
        />
        {provider}
      </Link>
    </motion.div>
  );
};

export default Social;
