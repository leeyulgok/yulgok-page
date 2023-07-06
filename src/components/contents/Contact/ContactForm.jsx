import { useDispatch, useSelector } from "react-redux";
import { sendEmail } from "../../../redux/reducers/contactSlice";

import FormField from "./FormField";
import Button from "../../UI/Button";

import classes from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contactStatus = useSelector((state) => state.contact.status);
  const contactError = useSelector((state) => state.contact.error);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const phone = event.target.elements.phone.value;
    const email = event.target.elements.email.value;
    const message = event.target.elements.message.value;

    dispatch(sendEmail({ name, phone, email, message }));
  };

  return (
    <section className={classes.contactSection}>
      <form
        className={classes.contactForm}
        method="POST"
        onSubmit={handleSubmit}
      >
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
        <div>
          {contactStatus === "loading" && <div>Sending email...</div>}
          {contactStatus === "succeeded" && <div>Email successfully sent!</div>}
          {contactStatus === "failed" && (
            <div>Error sending email: {contactError}</div>
          )}
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
