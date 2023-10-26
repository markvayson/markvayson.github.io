"use client";

import useActiveSectionContext from "@/lib/activeSection";
import { PinnedItem } from "@/typings";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
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
      className="relative flex flex-col items-center justify-center gap-2 "
    >
      {data.map((project) => (
        <Project project={project} key={project.homepageUrl} />
      ))}
    </section>
  );
};

export default MyProjects;
