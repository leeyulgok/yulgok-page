import classes from './ResumeContent.module.css';

const ResumeContent = () => {
  return (
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
  );
};

export default ResumeContent;
