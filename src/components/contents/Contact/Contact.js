import classes from "./Contact.module.css";
import ContactInfor from "./ContactInfor";
import ContactForm from "./ContactForm";


const Contact = (props) => {
  return (
    <div className={classes["contact-container"]}>
      <ContactInfor />
      <ContactForm />
    </div>
  );
};

export default Contact;
