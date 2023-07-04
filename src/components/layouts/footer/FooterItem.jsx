import classes from './FooterItem.module.css';

const FooterItem = ({title, children}) => {
  return (
    <li className={classes.item}>
      <div className={classes.itemContainer}>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
    </li>
  );
};

export default FooterItem;
