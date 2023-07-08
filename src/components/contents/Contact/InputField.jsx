import classes from "./InputField.module.css";

function InputField({ label, type, name }) {
  return (
    <div className={classes.contents}>
      <label>{label}</label>
      <input type={type} name={name} placeholder={`${label}을 입력해주세요.`} required />
    </div>
  );
}

export default InputField;