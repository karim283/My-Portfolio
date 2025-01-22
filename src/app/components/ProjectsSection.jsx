"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "an animated profile portfolio using react",
    image: "/images/projects/11.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/karim283/portfolio",
    previewUrl: "https://github.com/karim283/portfolio",
  },
  {
    id: 2,
    title: "Series Website",
    description:
      "A fully functional fullstack website using html,css,javascript,php & database(Mysql)",
    image: "/images/projects/8.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/karim283/series-website",
    previewUrl: "https://github.com/karim283/series-website",
  },
  {
    id: 3,
    title: "E-commerce Donut Application Design",
    description:
      "fully functional e-commerce Donut Application Design using Figma",
    image: "/images/projects/12.png",
    tag: ["All", "UI/UX"],
    gitUrl:
      "https://www.figma.com/proto/Dh6UBI2p0Yi7XcuXJSReXP/web?page-id=0%3A1&node-id=2230-388&viewport=166%2C1297%2C0.15&t=3QhEXBi1Qnkeuz2w-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2114%3A645&show-proto-sidebar=1",
    previewUrl:
      "https://www.figma.com/proto/Dh6UBI2p0Yi7XcuXJSReXP/web?page-id=0%3A1&node-id=2230-388&viewport=166%2C1297%2C0.15&t=3QhEXBi1Qnkeuz2w-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2114%3A645&show-proto-sidebar=1",
  },
  {
    id: 4,
    title: "News Mobile Application",
    description:
      "a Mobile Aplication using flutter using news api for news and system themes for android and ios",
    image: "/images/projects/10.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/karim283/Lask_NEWS",
    previewUrl: "https://github.com/karim283/Lask_NEWS",
  },
 
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="UI/UX"
          isSelected={tag === "UI/UX"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
