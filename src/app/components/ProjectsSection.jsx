"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Clicon E-commerce",
    description:
      "Clicon Ecommerce is a team project developed during an internship, offering a user-friendly online shopping experience with product browsing, search, and easy checkout. It highlights collaboration and web development skills.",
    image: "/images/projects/20.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/karim283/Clicon-ecommerce",
    previewUrl: "https://clicon-ecommerce-chi.vercel.app/",
  },
  {
    id: 2,
    title: "To-Do Website",
    description:
      "The website is a simple to-do app built with vite, designed to help users manage tasks effectively. It features an intuitive interface where users can add, edit, and delete tasks.",
    image: "/images/projects/14.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/karim283/Todo-App",
    previewUrl: "https://todo-app-ruby-omega.vercel.app/",
  },
  {
    id: 3,
    title: "Momkn Net3rf Website",
    description:
      "This project uses a person's ID to retrieve specific details about them, such as their place of residence, birth date, and gender.",
    image: "/images/projects/13.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/karim283/momkn-net3rf",
    previewUrl: "https://karim283s-projects.vercel.app/",
  },
  {
    id: 4,
    title: "Tic-Tak-Toe Website",
    description:
      "The website is a simple and interactive Tic-Tac-Toe game. It allows users to play the classic game against another player or the computer. ",
    image: "/images/projects/16.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/karim283/TicTakToe-game",
    previewUrl: "https://tic-tak-toe-game-eta.vercel.app/",
  },

  {
    id: 5,
    title: "News Mobile Application",
    description:
      "a Mobile Aplication using flutter using news api for news and system themes for android and ios",
    image: "/images/projects/10.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/karim283/Lask_NEWS",
    previewUrl: "https://github.com/karim283/Lask_NEWS",
  },
  {
    id: 6,
    title: "Shapes Website",
    description:
      "likely involves creating or detecting various shapes in an interactive or visual way. It might allow users to draw or identify shapes and offers a fun and educational experience related to shape recognition or creation.",
    image: "/images/projects/17.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/karim283/shapes-scanner-creating",
    previewUrl: "https://karim283.github.io/shapes-scanner-creating/",
  },

  {
    id: 7,
    title: "Series Website",
    description:
      "A fully functional fullstack website using html,css,javascript,php & database(Mysql)",
    image: "/images/projects/8.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/karim283/series-website",
    previewUrl: "https://github.com/karim283/series-website",
  },
  {
    id: 8,
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
    id: 9,
    title: "React Portfolio Website",
    description: "an animated profile portfolio using react",
    image: "/images/projects/11.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/karim283/portfolio",
    previewUrl: "https://github.com/karim283/portfolio",
  },
  {
    id: 10,
    title: "Fixwork Application Design",
    description:
      "FixWork is a service platform design for booking freelancers services, featuring a user-friendly layout for easy access to professionals and job tracking.",
    image: "/images/projects/18.png",
    tag: ["All", "UI/UX"],
    gitUrl:
      "https://www.figma.com/design/okGmPcCwzle14754LQj1Cm/fixwork?node-id=0-1&t=VDbHDupqOlYqEHly-1",
    previewUrl:
      "https://www.figma.com/proto/okGmPcCwzle14754LQj1Cm/fixwork?page-id=0%3A1&node-id=31-323&viewport=601%2C-173%2C0.21&t=jHfEl9KNNHNmgULY-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=10%3A214",
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
      <div className="text-white flex flex-row justify-center items-center gap-[6px] sm:gap-2 py-6">
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
