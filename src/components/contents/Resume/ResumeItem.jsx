import classes from  './ResumeItem.module.css';

const ResumeItem = props => {
  const years = props.data.item[0].years;
  const title = props.data.item[0].title;
  const content = props.data.item[0].content;
  
  return (
    <div className={classes.contentsMain}>
      <div className={classes.years}>
        <p>{years}</p>
      </div>
      <div className={classes.contents}>
        <div className={classes.contentsTitle}>
          <h4>{title}</h4>
        </div>
        <div className={classes.contentsText}>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default ResumeItem;
