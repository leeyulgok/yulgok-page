import { Fragment } from "react";

import classes from "./Projects.module.css";

import img1 from "../../../assets/강아지1.jpg";

const Projects = () => {
  return (
    <Fragment>
      <div className={classes["projects-container"]}>
        <div className={classes["projects-header"]}>
          <h1>Projects</h1>
        </div>
        <div className={classes["projects-main"]}>
          <div className={classes.project}>
            <div className={classes["project-content"]}>
              <div className={classes["project-title"]}>
                <h2>Project 1</h2>
              </div>
              <div className={classes["project-des"]}>
                <p>설명</p>
              </div>
            </div>
            <div className={classes["project-image"]}>
              <img src={img1} alt="project1" />
            </div>
          </div>
          <div className={classes.project}>
            <div className={classes["project-content"]}>
              <div className={classes["project-title"]}>
                <h2>Project 2</h2>
              </div>
              <div className={classes["project-des"]}>
                <p>설명</p>
              </div>
            </div>
            <div className={classes["project-image"]}>
              <img src={img1} alt="project1" />
            </div>
          </div>
          <div className={classes.project}>
            <div className={classes["project-content"]}>
              <div className={classes["project-title"]}>
                <h2>Project 3</h2>
              </div>
              <div className={classes["project-des"]}>
                <p>설명</p>
              </div>
            </div>
            <div className={classes["project-image"]}>
              <img src={img1} alt="project1" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;
