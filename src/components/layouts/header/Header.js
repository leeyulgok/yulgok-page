import classes from './Header.module.css';

const Header = props => {
    return (
        <header className={classes['main-header-container']}>
            <div className={classes["name-header"]}>
                <button className={classes["header-circle"]}></button>
                <h1>LEE YULGOK</h1>
                <p>Developer</p>
            </div>
            <div className={classes["menu-header"]}>
                <ul className={classes["menu-list"]}>
                    <li>Resume</li>
                    <li>|</li>
                    <li>Project</li>
                    <li>|</li>
                    <li>Contact </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;