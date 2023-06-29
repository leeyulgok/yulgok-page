import classes from './Button.module.css';

const Button = props => {
    const { className, children } = props;
    
    return (
        <button className={`${classes.button} ${className}`}>{children}</button>
    );
};

export default Button;
