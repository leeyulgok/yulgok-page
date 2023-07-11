import Percent from "../../UI/Percent";

import FrontEndData from "../../json/FrontEndData.json";
import BackEndData from "../../json/BackEndData.json";
import DatabaseData from "../../json/DatabaseData.json";

import classes from "./Skills.module.css";
import { Fragment } from "react";

const Skills = () => {
  const data = [
    { name: "FrontEnd", percentData: FrontEndData },
    { name: "BackEnd", percentData: BackEndData },
    { name: "DataBase", percentData: DatabaseData },
  ];

  return (
    <div className={classes.skillsContainer}>
      <div className={classes.title}>
        <h2>Skills</h2>
      </div>
      <div className={classes.componentContainer}>
        {data.map((d, idx) => (
          <Fragment key={idx}>
            <div>
              <h3>{d.name}</h3>
            </div>
            <div>
              <Percent percentData={d.percentData} />
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Skills;
