import Blog from "../../layouts/footer/Blog";
import Git from "../../layouts/footer/Git";

import classes from "./ContactInfor.module.css";

const ContactInfor = () => {
  const contacts = [
    { title: "Phone", text: "010-5548-9567" },
    { title: "E-mail", text: "dbfrhr20@gmail.com" },
    {
      title: "Etc",
      icons: [
        { component: <Blog />, link: "https://velog.io/@dbfrhr20" },
        { component: <Git />, link: "https://github.com/leeyulgok" },
      ],
    },
  ];

  return (
    <div className={classes.contact}>
      <div className={classes.contactSub}>
        {contacts.map((contact, index) => (
          <div className={classes.contactItem} key={index}>
            <h2>{contact.title}</h2>
            {contact.text && <p>{contact.text}</p>}
            {contact.icons && (
              <div className={classes["icon-container"]}>
                {contact.icons.map((icon, i) => (
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfor;
