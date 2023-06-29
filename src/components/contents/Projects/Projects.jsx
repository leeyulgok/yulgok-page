import { Fragment } from "react";

import classes from "./Projects.module.css";

import Project from "./Project";

const Projects = () => {
  return (
    <Fragment>
      <div className={classes["projects-container"]}>
        <div className={classes["projects-header"]}>
          <h1>Projects</h1>
        </div>
        <div className={classes["projects-main"]}>
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;
