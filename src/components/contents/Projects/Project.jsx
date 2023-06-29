import classes from './Project.module.css';

import img1 from "../../../assets/강아지1.jpg";

const Project = () => {
  return (
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
  );
};

export default Project;
