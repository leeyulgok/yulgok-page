import FormField from "./FormField";
import Button from "../../UI/Button";

import classes from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <section className={classes.contactSection}>
      <form className={classes.contactForm} method="GET">
        <div className={classes.contactContainer}>
          <div className={classes.contactRow}>
            <FormField label="Name" type="text" name="name" />
            <FormField label="Phone" type="text" name="phone" />
          </div>
          <div className={classes.contactRow}>
            <FormField label="E-mail" type="text" name="email" />
            <div className={classes.submitBtn}>
              <Button className={classes.contactBtn} type="submit">
                Submit
              </Button>
            </div>
          </div>
          <div className={classes.contactRow}>
            <FormField label="Message" type="textarea" name="message" />
          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
