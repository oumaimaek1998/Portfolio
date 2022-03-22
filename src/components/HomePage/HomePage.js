import { useContext } from "react";
import RefContext from "../../context/RefContext/RefContext";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import classes from "./HomePage.module.scss";

import image from "../../assets/images/image.jpg";

const HomePage = () => {
  const { refHome, refAbout } = useContext(RefContext);

  const executeScrollOnAbout = () =>
    window.scrollTo({
      top: refAbout.current.offsetTop - 80,
      behavior: "smooth",
    });

  return (
    <div
      className={classes.home}
      style={{
        backgroundImage: `url(${image})`,
      }}
      ref={refHome}
    >
      <div className={classes.home__font}>
        HI THERE,
        <br /> <h2> I am Oumaima,</h2> <br /> A web developer.
      </div>

      {/* <img
          className={classes.home__picture}
          alt="picture_oumaima"
          src={image2}
        /> */}

      <div className={classes.home__scroll}>
        <button
          onClick={executeScrollOnAbout}
          className={classes.home__scroll__button}
        >
          <KeyboardArrowRightIcon style={{ fontSize: 30 }} />
        </button>
      </div>
    </div>
  );
};

export default HomePage;
