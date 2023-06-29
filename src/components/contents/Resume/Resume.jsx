import { Fragment } from "react";

import classes from "./Resume.module.css";
import ResumeContent from "./ResumeContent";

const Resume = () => {
  return (
    <Fragment>
      <div className={classes["resume-container"]}>
        <div className={classes["resume-header"]}>
          <h1>Resume</h1>
        </div>
        <div className={classes["resume-main"]}>
          <ResumeContent />
          <hr />
          <br />
          <ResumeContent />
          <hr />
          <br />
          <ResumeContent />
        </div>
      </div>
    </Fragment>
  );
};

export default Resume;
