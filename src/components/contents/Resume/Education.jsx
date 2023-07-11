import ResumeItem from "./ResumeItem";

import classes from "./Education.module.css";

import data from '../../json/EducationData.json';

const Education = () => {
  const [first, second] = data;

  return (
    <div className={classes.educationContainer}>
      <div className={classes.title}>
        <h2>Education</h2>
      </div>
      <div>
        <ResumeItem data={first} />
        <ResumeItem data={second} />
      </div>
    </div>
  );
};

export default Education;
