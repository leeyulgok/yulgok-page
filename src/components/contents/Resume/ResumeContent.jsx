import classes from './ResumeContent.module.css';

const ResumeContent = ({ title, years, contentTitle, contentText }) => {
  return (
    <div className={classes.content}>
      <div className={classes.title}>
        <h2>{title}</h2>
      </div>
      <div className={classes.contentsMain}>
        <div className={classes.years}>
          <p>{years}</p>
        </div>
        <div className={classes.contents}>
          <div className={classes.contentsTitle}>
            <h4>{contentTitle}</h4>
          </div>
          <div className={classes.contentsText}>
            <p>{contentText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeContent;