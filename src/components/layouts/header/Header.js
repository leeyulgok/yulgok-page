import { Link } from 'react-router-dom';

import classes from './Header.module.css';

const Header = props => {
    return (
        <header className={classes['main-header-container']}>
            <div className={classes["name-header"]}>
                <Link to='/'><button className={classes["header-circle"]}></button></Link>
                <h1>LEE YULGOK</h1>
                <p>Developer</p>
            </div>
            <div className={classes["menu-header"]}>
                <ul className={classes["menu-list"]}>
                    <Link to='/resume'><li>Resume</li></Link>
                    <li>|</li>
                    <Link to='/projects'><li>Project</li></Link>
                    <li>|</li>
                    <Link to='/contact'><li>Contact </li></Link>
                </ul>
            </div>
        </header>
    );
};

export default Header;