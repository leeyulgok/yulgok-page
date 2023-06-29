import classes from './IntroSection.module.css';

const IntroSection = () => {
  return (
    <div className={classes.introContainer}>
      <h1 className={classes.greeting}>Hello</h1>
      <h4 className={classes.introText}>나를 소개할게.</h4>
      <p className={classes.introText}>나는 이율곡이고 앞으로 하고 싶은게 많아.</p>
    </div>
  );
};

export default IntroSection;
