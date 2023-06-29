import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import classes from './MenuSection.module.css';

const MenuSection = () => {
  return (
    <div className={classes.menuContainer}>
      <Link to="/resume" className={classes.menuItem}>
        <Button className={classes.introMenu1}>Resume</Button>
      </Link>
      <Link to="/projects" className={classes.menuItem}>
        <Button className={classes.introMenu2}>Projects</Button>
      </Link>
      <Link to="/contact" className={classes.menuItem}>
        <Button className={classes.introMenu3}>Contact</Button>
      </Link>
    </div>
  );
};

export default MenuSection;
