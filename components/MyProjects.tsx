"use client";

import useActiveSectionContext from "@/lib/activeSection";
import { PinnedItem } from "@/typings";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import SectionTitle from "./SectionTitle";
import Project from "./Project";

const MyProjects = ({ data }: { data: PinnedItem[] }) => {
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
      className="relative  flex flex-col items-center justify-center gap-2"
    >
      <SectionTitle title="Featured Projects" />
      {data.map((project) => (
        <Project project={project} key={project.homepageUrl} />
      ))}
    </section>
  );
};

export default MyProjects;
