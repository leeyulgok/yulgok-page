import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { sendEmail } from "../../../redux/reducers/contactSlice";

import InputField from "./InputField";
import TextAreaField from "./TextAreaField";
import Button from "../../UI/Button";
import EmailStatus from "./EmailStatus";

import classes from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();
  const [isValid, setIsValid] = useState({
    name: null,
    phone: null,
    email: null,
    message: null,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid) {
      const name = event.target.elements.name.value;
      const phone = event.target.elements.phone.value;
      const email = event.target.elements.email.value;
      const message = event.target.elements.message.value;

      dispatch(sendEmail({ name, phone, email, message }));
    } else {
      console.log("The form is not valid");
    }
  };

  const updateValidation = useCallback((name, value) => {
    setIsValid((prevState) => ({ ...prevState, [name]: value }));
  }, []);

  const isFormValid = Object.values(isValid).every((value) => value);

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
              <field.Component
                key={idx}
                {...field}
                updateValidation={updateValidation}
              />
            ))}
          </div>
          <div className={classes.textAreaFields}>
            <TextAreaField
              label="Message"
              name="message"
              updateValidation={updateValidation}
            />
          </div>
        </div>
        <div className={classes.submitBtn}>
          <Button
            className={`${classes.contactBtn} ${
              isFormValid ? classes.activeBtn : ""
            }`}
            type="submit"
            disabled={!isFormValid}
          >
            Send
          </Button>
        </div>
        <EmailStatus />
      </form>
    </section>
  );
};

export default ContactForm;
