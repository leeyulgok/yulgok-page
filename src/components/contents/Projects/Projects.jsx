import { Fragment } from "react";

import classes from "./Projects.module.css";
import Project from "./Project";

import img1 from "../../../assets/강아지1.jpg";
import img2 from "../../../assets/강아지2.jpg";
import img3 from "../../../assets/강아지3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "설명 1",
      image: img1,
      alt: "project1"
    },
    {
      title: "Project 2",
      description: "설명 2",
      image: img2,
      alt: "project2"
    },
    {
      title: "Project 3",
      description: "설명 3",
      image: img3,
      alt: "project3"
    }
  ];

  return (
    <Fragment>
      <div className={classes.projectsContainer}>
        <div className={classes.projectsHeader}>
          <h1>Projects</h1>
        </div>
        <div className={classes.projectsMain}>
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;
