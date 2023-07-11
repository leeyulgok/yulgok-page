import ResumeItem from "./ResumeItem";

import classes from "./WorkExperience.module.css";

import data from '../../json/WorkExperienceData.json';

const WorkExperience = () => {
  const [first, second] = data;

  return (
    <div className={classes.WEContainer}>
      <div className={classes.title}>
        <h2>WorkExperience</h2>
      </div>
      <div>
        <ResumeItem data={first} />
        <ResumeItem data={second} />
      </div>
    </div>
  );
};

export default WorkExperience;
