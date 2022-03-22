import { useContext } from "react";
import RefContext from "../../context/RefContext/RefContext";

import classes from "./About.module.scss";

const About = () => {
  const { refAbout } = useContext(RefContext);

  return (
    <div className={classes.about} ref={refAbout}>
      <h1>About Me</h1>
      <div className={classes.about__details}>
        I'm a web developer based in Casablanca, Morocco, currently working at
        Capgemini as Full stack developer React.js/Node.js.
        <br />
        I have graduated with an Engineer degree, from National School of
        Computer Science and Systems Analysis (ENSIAS). Through this lifelong
        learning process, I am able to provide solutions in database technology
        and programming.
        <br />
        Fast learner, Self-motivating with a passion to learn more technologies,
        I enjoy working closely in a team and independently.
        <br />
        My Motto in life : EVERYTHING CAN BE LEARNED
      </div>
    </div>
  );
};

export default About;
