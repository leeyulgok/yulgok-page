import { Link } from 'react-router-dom';

import classes from './HeaderItem.module.css';

const HeaderItem = ({link, children}) => {
  return (
    <li className={classes.menuItem}>
      <Link to={link}>{children}</Link>
    </li>
  );
};

export default HeaderItem;
