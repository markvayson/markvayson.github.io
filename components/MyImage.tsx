"use client";
import useActiveSectionContext from "@/lib/activeSection";
import Image from "next/image";

const MyImage = ({ url }: { url: string }) => {
  const { activeSection } = useActiveSectionContext();
  const validSections = ["home", "about"];
  return (
    <div
      className={`${activeSection === "home" && "opacity-20"} ${
        !validSections.includes(activeSection) && "opacity-0"
      } fixed bottom-0 left-1/2 -z-10 m-auto h-[400px] w-full max-w-3xl -translate-x-1/2 transform  transition-opacity  duration-300  md:h-[700px] `}
    >
      <Image
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        src={url}
        alt="my profile"
        fill
        priority
      />
    </div>
  );
};

export default MyImage;
