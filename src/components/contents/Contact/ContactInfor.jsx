import { Link } from "react-router-dom";

import Blog from "../../layouts/footer/Blog";
import Git from "../../layouts/footer/Git";

import classes from './ContactInfor.module.css';

const ContactInfor = () => {
  return (
    <section className={classes.contact}>
      <div className={classes["contact-main"]}>
        <h1>Contact</h1>
        <p>내용</p>
      </div>
      <div className={classes["contact-sub"]}>
        <div className={classes["contact-item"]}>
          <h3>Phone</h3>
          <small>010-5548-9567</small>
        </div>
        <div className={classes["contact-item"]}>
          <h3>E-mail</h3>
          <small>dbfrhr20@gmail.com</small>
        </div>
        <div className={classes["contact-item"]}>
          <h3>Etc</h3>
          <div className={classes["icon-container"]}>
            <Link to="https://velog.io/@dbfrhr20" target="_blank">
              <Blog />
            </Link>
            <Link to="https://github.com/leeyulgok" target="_blank">
              <Git />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfor;
