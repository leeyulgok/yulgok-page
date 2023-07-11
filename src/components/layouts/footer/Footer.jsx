import FooterItem from "./FooterItem";

import Blog from "./Blog";
import Git from "./Git";

import classes from "./Footer.module.css";
import Weather from "./Weather";

const Footer = () => {
  const contactIcon = [
    { component: <Blog />, link: "https://velog.io/@dbfrhr20" },
    { component: <Git />, link: "https://github.com/leeyulgok" },
  ];

  return (
    <footer className={classes.footerContainer}>
      <hr />
      <div className={classes.itemList}>
        <ul className={classes.items}>
          <FooterItem title="Phone" children={"010-5548-9567"} />
          <FooterItem title="E-mail" children={"dbfrhr20@gmail.com"} />
          <FooterItem title="Follow Me">
            {contactIcon && (
              <div className={classes.iconContainer}>
                {contactIcon.map((icon, i) => (
                  <a
                    href={icon.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={i}
                  >
                    {icon.component}
                  </a>
                ))}
              </div>
            )}
          </FooterItem>
          <Weather />
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
