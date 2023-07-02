import { Fragment } from "react";

import classes from "./Resume.module.css";
import ResumeContent from "./ResumeContent";

import Skills from "./Skills";

const Resume = () => {
  const resumeContents = [
    {
      title: "Work-Experience 1",
      years: "2022-2023",
      contentTitle: "제목 1",
      contentText: "내용 1",
    },
    {
      title: "Work-Experience 2",
      years: "2021-2022",
      contentTitle: "제목 2",
      contentText: "내용 2",
    },
    {
      title: "Skills",
      component: <Skills />
    },
  ];

  return (
    <Fragment>
      <div className={classes.resumeCntainer}>
        <div className={classes.resumeHeader}>
          <h1>Resume</h1>
        </div>
        <div className={classes.resumeMain}>
          {resumeContents.map((content, index) => (
            <Fragment key={index}>
              <ResumeContent {...content} />
              {index < resumeContents.length - 1 && (
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