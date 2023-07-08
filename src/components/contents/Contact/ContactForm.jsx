import { useDispatch } from "react-redux";
import { sendEmail } from "../../../redux/reducers/contactSlice";

import InputField from "./InputField";
import TextAreaField from "./TextAreaField";
import Button from "../../UI/Button";
import EmailStatus from "./EmailStatus";

import classes from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const phone = event.target.elements.phone.value;
    const email = event.target.elements.email.value;
    const message = event.target.elements.message.value;

    dispatch(sendEmail({ name, phone, email, message }));
  };

  const inputFields = [
    { label: "Name", type: "text", name: "name", Component: InputField },
    { label: "Phone", type: "text", name: "phone", Component: InputField },
    { label: "E-mail", type: "email", name: "email", Component: InputField },
  ];

  return (
    <section className={classes.contactSection}>
      <form
        className={classes.contactForm}
        method="POST"
        onSubmit={handleSubmit}
      >
        <div className={classes.formFieldContainer}>
          <div className={classes.inputFields}>
            {inputFields.map((field, idx) => (
              <field.Component key={idx} {...field} />
            ))}
          </div>
          <div className={classes.textAreaFields}>
            <TextAreaField label="Message" name="message" />
          </div>
        </div>
        <div className={classes.submitBtn}>
          <Button className={classes.contactBtn} type="submit">
            Send
          </Button>
        </div>
        <EmailStatus />
      </form>
    </section>
  );
};

export default ContactForm;
