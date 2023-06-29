import Blog from "../../layouts/footer/Blog";
import Git from "../../layouts/footer/Git";

import classes from './ContactInfor.module.css';

const ContactInfor = () => {
  const contacts = [
    { title: "Phone", text: "010-5548-9567" },
    { title: "E-mail", text: "dbfrhr20@gmail.com" },
    { title: "Etc", 
      icons: [
        { component: <Blog />, link: "https://velog.io/@dbfrhr20" },
        { component: <Git />, link: "https://github.com/leeyulgok" }
      ] 
    },
  ];

  return (
    <section className={classes.contact}>
      <div className={classes.contactMain}>
        <h1>Contact</h1>
        <p>내용</p>
      </div>
      <div className={classes.contactSub}>
        {contacts.map((contact, index) => (
          <div className={classes.contactItem} key={index}>
            <h3>{contact.title}</h3>
            {contact.text && <small>{contact.text}</small>}
            {contact.icons && (
              <div className={classes["icon-container"]}>
                {contact.icons.map((icon, i) => (
                  <a href={icon.link} target="_blank" rel="noopener noreferrer" key={i}>
                    {icon.component}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactInfor;
