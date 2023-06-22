import classes from "./Contact.module.css";

const Contact = (props) => {
  return (
    <div className={classes["contact-container"]}>
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
            <small>아이콘</small>
          </div>
        </div>
      </section>
      <section className={classes["contact-form"]}>
        <form>
          <div className={classes["form-container"]}>
            <div className={classes["form-row"]}>
              <div className={classes["form-contents"]}>
                <label>Name</label>
                <input type="text" name="name" />
              </div>
              <div className={classes["form-contents"]}>
                <label>Phone</label>
                <input type="text" name="phone" />
              </div>
              <div className={classes["form-contents"]}>
                <label>E-mail</label>
                <input type="text" name="email" />
              </div>
              <div className={classes["form-btn"]}>
                <button type="submit">Submit</button>
              </div>
            </div>
            <div className={classes["form-msg"]}>
              <label>Message</label>
              <textarea name="message" />
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
