import classes from './Footer.module.css';

const Footer = props => {
    return (
        <footer className={classes["footer-container"]}>
            <hr />
            <div className={classes["item-list"]}>
                <ul className={classes.items}>
                    <li className={classes.item}>
                        <div className={classes["item-container"]}>
                            <h3>Phone</h3>
                            <p>010-5548-9567</p>
                        </div>
                    </li>
                    <li className={classes.item}>
                        <div className={classes["item-container"]}>
                            <h3>E-mail</h3>
                            <p>dbfrhr20@gmail.com</p>
                        </div>
                    </li>
                    <li className={classes.item}>
                        <div className={classes["item-container"]}>
                            <h3>Follow Me</h3>
                            <p>아이콘</p>
                        </div>
                    </li>
                    <li className={classes.item}>
                        <div className={classes["item-container"]}>
                            <p>010-####-####</p>
                        </div>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;