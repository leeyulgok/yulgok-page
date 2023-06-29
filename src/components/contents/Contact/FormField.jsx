import classes from './FormField.module.css';

function FormField({label, type, name}) {
    if (type === "textarea") {
      return (
        <div className={classes.contents}>
          <label>{label}</label>
          <textarea name={name} />
        </div>
      );
    }
  
    return (
      <div className={classes.contents}>
        <label>{label}</label>
        <input type={type} name={name} />
      </div>
    );
  }
  
  export default FormField;
  