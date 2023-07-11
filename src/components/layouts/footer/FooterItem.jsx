import classes from './FooterItem.module.css';

const FooterItem = ({title, children}) => {
  return (
    <li className={classes.item}>
      <div className={classes.itemContainer}>
        <h2>{title}</h2>
        <div>{children}</div>
      </div>
    </li>
  );
};

export default FooterItem;
