import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import classes from "./MenuSection.module.css";
import { useState, useEffect, useMemo } from "react";

const MenuSection = () => {
  const menus = useMemo(() => [
    {
      path: "/resume",
      component: <Button className={classes.introMenu1}>Resume</Button>,
      key: "/resume",
      delay: 0,
    },
    {
      path: "/projects",
      component: <Button className={classes.introMenu2}>Projects</Button>,
      key: "/projects",
      delay: 1,
    },
    {
      path: "/contact",
      component: <Button className={classes.introMenu3}>Contact</Button>,
      key: "/contact",
      delay: 2,
    },
  ], []);

  const [displayMenus, setDisplayMenus] = useState([]);

  useEffect(() => {
    menus.forEach((menu, index) => {
      setTimeout(() => {
        setDisplayMenus((prev) => [...prev, menu]);
      }, index * 500);
    });
  }, [menus]);

  return (
    <TransitionGroup className={classes.menuContainer}>
      {displayMenus.map(({ path, component, key }) => (
        <CSSTransition
          key={key}
          in={true}
          timeout={1000}
          classNames={{
            enter: classes.menuTransitionEnter,
            enterActive: classes.menuTransitionEnterActive,
            exit: classes.menuTransitionExit,
            exitActive: classes.menuTransitionExitActive,
          }}
          unmountOnExit
        >
          <Link to={path} key={key} className={classes.menuItem}>
            {component}
          </Link>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default MenuSection;
