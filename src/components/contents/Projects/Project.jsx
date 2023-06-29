import classes from './Project.module.css';

const Project = ({ title, description, image, alt }) => {
  return (
    <div className={classes.project}>
      <div className={classes.projectContent}>
        <div className={classes.projectTitle}>
          <h2>{title}</h2>
        </div>
        <div className={classes.projectDes}>
          <p>{description}</p>
        </div>
      </div>
      <div className={classes.projectImage}>
        <img src={image} alt={alt} />
      </div>
    </div>
  );
};

export default Project;
