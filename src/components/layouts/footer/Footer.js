import { Link } from "react-router-dom";

import FooterItem from "./FooterItem";

import Blog from "./Blog";
import Git from "./Git";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footerContainer}>
      <hr />
      <div className={classes.itemList}>
        <ul className={classes.items}>
          <FooterItem title="Phone">010-5548-9567</FooterItem>
          <FooterItem title="E-mail">dbfrhr20@gmail.com</FooterItem>
          <FooterItem title="Follow Me">
            <div className={classes.iconContainer}>
              <Link to="https://velog.io/@dbfrhr20" target="_blank">
                <Blog />
              </Link>
              <Link to="https://github.com/leeyulgok" target="_blank">
                <Git />
              </Link>
            </div>
          </FooterItem>
          <FooterItem>010-####-####</FooterItem>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
