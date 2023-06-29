import classes from './FooterItem.module.css';

const FooterItem = ({title, children}) => {
  return (
    <li className={classes.item}>
      <div className={classes.itemContainer}>
        <h3>{title}</h3>
        <small>{children}</small>
      </div>
    </li>
  );
};

export default FooterItem;
