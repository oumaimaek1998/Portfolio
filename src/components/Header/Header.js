import { useState, useEffect, useRef, useContext } from "react";
import RefContext from "../../context/RefContext/RefContext";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import classes from "./Header.module.scss";

import ContactIcons from "../ContactIcons/ContactIcons";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: null,
  });
  const ref = useRef();
  const { refHome, refAbout, refExperiences, refSkills } =
    useContext(RefContext);

  /*
   * USE EFFECTS
   */
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (menuOpen && ref.current && !ref.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [menuOpen]);

  /*
   * FUNCTIONS
   */

  const scrollToRef = (myref) => {
    window.scrollTo({
      top: myref.current.offsetTop - 80,
      behavior: "smooth",
      block: "start",
    });
  };
  const executeScroll = (element) => {
    if (element === "home") {
      scrollToRef(refHome);
    } else if (element === "about") {
      scrollToRef(refAbout);
    } else if (element === "experiences") {
      scrollToRef(refExperiences);
    } else if (element === "skills") {
      scrollToRef(refSkills);
    } else return;
  };

  const menuItems = ["home", "about", "experiences", "skills"];

  const renderMenuItems = () => {
    return (
      <div ref={ref} className={classes.header__content__nav__items}>
        <ul>
          {menuItems.map((item, index) => {
            return (
              <li key={index}>
                <a
                  onClick={() => {
                    setMenuOpen(false);
                    executeScroll(item, index);
                  }}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
        <div className={classes.header__content__nav__icons}>
          <ContactIcons />
        </div>
      </div>
    );
  };

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <div
          className={`${classes.header__content__nav} ${
            menuOpen ? classes.isMenu : ""
          }`}
        >
          {renderMenuItems()}
        </div>
        <div
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
          className={classes.header__content__toggle}
        >
          {menuOpen ? <CloseIcon></CloseIcon> : <MenuIcon></MenuIcon>}
        </div>
      </div>
    </header>
  );
};

export default Header;
