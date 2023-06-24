import { Fragment } from "react";

import classes from "./Resume.module.css";

const Resume = () => {
  return (
    <Fragment>
      <div className={classes["resume-container"]}>
        <div className={classes["resume-header"]}>
          <h1>Resume</h1>
        </div>
        <div className={classes["resume-main"]}>
          <div className={classes.content}>
            <div className={classes.title}>
              <h2>Work-Experience</h2>
            </div>
            <div className={classes["contents-main"]}>
              <div className={classes.years}>
                <p>2022-2023</p>
              </div>
              <div className={classes.contents}>
                <div className={classes["contents-title"]}>
                  <h4>일본</h4>
                </div>
                <div className={classes["contents-text"]}>
                  <p>내용</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <br />
          <div className={classes.content}>
            <div className={classes.title}>
              <h2>Education</h2>
            </div>
            <div className={classes["contents-main"]}>
              <div className={classes.years}>
                <p>2022-2023</p>
              </div>
              <div className={classes.contents}>
                <div className={classes["contents-title"]}>
                  <h4>일본</h4>
                </div>
                <div className={classes["contents-text"]}>
                  <p>내용</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <br />
          <div className={classes.content}>
            <div className={classes.title}>
              <h2>Skills & Expertise</h2>
            </div>
            <div className={classes["contents-main"]}>
              <div className={classes.contents}>
                <div className={classes["contents-text"]}>
                  <p>내용</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Resume;
