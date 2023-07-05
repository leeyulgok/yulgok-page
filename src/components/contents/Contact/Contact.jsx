import classes from "./Contact.module.css";

import ContactInfor from "./ContactInfor";
import ContactForm from "./ContactForm";
import Map from "./Map";

const Contact = (props) => {
  return (
    <div className={classes.contactMain}>
      <div className={classes.contactMainHeader}>
        <h1>Contact</h1>
      </div>
      <div className={classes.contactContainer}>
        <div className={classes.rows}>
          <ContactInfor />
          <ContactForm />
        </div>
        <div className={classes.map}>
          <small>경기도 수원시 팔달구 지동</small>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Contact;
