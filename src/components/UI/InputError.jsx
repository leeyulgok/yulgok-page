import classes from './InputError.module.css';

const InputError = props => {
    const error = props.error;
    
    return (
        <div className={classes.errorMessage}>
            <p>{error}</p>
        </div>
    );
};

export default InputError;