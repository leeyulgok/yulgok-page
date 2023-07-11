import { Fragment } from "react";

import classes from "./Resume.module.css";

import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Skills from "./Skills";

const Resume = () => {
  const resumeComponents = [
    {component: <WorkExperience />},
    {component: <Education />},
    {component: <Skills />},
  ];

  return (
    <Fragment>
      <div className={classes.resumeCntainer}>
        <div className={classes.resumeHeader}>
          <h1>Resume</h1>
        </div>
        <div className={classes.resumeMain}>
          {resumeComponents.map((content, index) => (
            <Fragment key={index}>
              {content.component}
              {index < resumeComponents.length - 1 && (
                <>
                  <hr />
                  <br />
                </>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Resume;
