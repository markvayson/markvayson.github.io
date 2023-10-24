"use client";

import useActiveSectionContext from "@/lib/activeSection";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import SectionTitle from "./SectionTitle";
import cheerioText from "@/lib/cheerioText";
import Articles from "./Articles";
import { READMEType } from "@/typings";

const AboutMe = ({ data }: { data: READMEType }) => {
  const { ref, inView } = useInView({
    threshold: 0.75,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("about");
    }
  }, [inView, setActiveSection, timeOfLastClick]);
  const text = cheerioText(data.object.text);

  return (
    <section
      ref={ref}
      id="about"
      className="my-5 flex min-h-screen w-full snap-center flex-col items-center gap-5"
    >
      <SectionTitle title="About Me" />
      <Articles text={text} />
    </section>
  );
};

export default AboutMe;
