import { Fragment } from "react";

import classes from "./Resume.module.css";
import ResumeContent from "./ResumeContent";

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
      title: "Work-Experience 3",
      years: "2020-2021",
      contentTitle: "제목 3",
      contentText: "내용 3",
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