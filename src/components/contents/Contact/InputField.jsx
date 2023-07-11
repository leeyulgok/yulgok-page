import { useState, useEffect } from "react";
import useCheckValidation from "../../../hooks/useCheckValidation";
import classes from "./InputField.module.css";
import InputError from "../../UI/InputError";

const InputField = ({ label, type, name, updateValidation }) => {
  const [value, setValue] = useState("");
  const { isValid, error, touchHandler } = useCheckValidation(name, value);

  const handleChange = (event) => {
    setValue(event.target.value);
    touchHandler();
  };

  const inputClass = isValid
    ? classes.contents
    : `${classes.contents} ${classes.error}`;

  useEffect(() => {
    updateValidation(name, isValid);
  }, [isValid, updateValidation, name]);

  return (
    <div className={inputClass}>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={`${label}을 입력해주세요.`}
        required
        value={value}
        onChange={handleChange}
      />
      {!isValid && <InputError error={error} />}
    </div>
  );
}

export default InputField;
