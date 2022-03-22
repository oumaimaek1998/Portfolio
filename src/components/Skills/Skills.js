import { useContext } from "react";
import RefContext from "../../context/RefContext/RefContext";

import classes from "./Skills.module.scss";

const Skills = () => {
  const { refSkills } = useContext(RefContext);

  return (
    <div className={classes.skills} ref={refSkills}>
      <h1>Skills</h1>
      <div className={classes.skills__container}>
        {itemData.map((item, index) => (
          <div key={index} className={classes.skills__container__shadow}>
            {/* <img
              src={item.img}
              alt={item.title}
              className={classes.skills__container__logo}
            /> */}
            <div className={classes.skills__container_title}> {item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

const itemData = [
  {
    title: "JAVASCRIPT",
  },
  {
    title: "REACTJS",
  },
  {
    title: "TYPESCRIPT",
  },
  {
    title: "ANGULAR",
  },
  {
    title: "FLASK",
  },
  {
    title: "DOCKER",
  },
  {
    title: "GIT",
  },
  {
    title: "NODEJS",
  },
  {
    title: "LARAVEL",
  },
  {
    title: "PYTHON",
  },
  {
    title: "JAVA",
  },
  {
    title: "MYSQL",
  },
  {
    title: "MONGODB",
  },
];
