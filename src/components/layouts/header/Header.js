import { Link } from "react-router-dom";

import Button from "../../UI/Button";
import HeaderItem from "./HeaderItem";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.mainHeaderContainer}>
      <div className={classes.nameHeader}>
        <Link to="/">
          <Button className={classes.headerCircle}></Button>
        </Link>
        <h1>LEE YULGOK</h1>
        <p>Developer</p>
      </div>
      <div className={classes.menuHeader}>
        <ul className={classes.menuList}>
          <HeaderItem link="/resume">Resume</HeaderItem>
          <li>|</li>
          <HeaderItem link="/projects">Project</HeaderItem>
          <li>|</li>
          <HeaderItem link="/contact">Contact</HeaderItem>
        </ul>
      </div>
    </header>
  );
};

export default Header;
