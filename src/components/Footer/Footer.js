import ContactIcons from "../ContactIcons/ContactIcons";
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footer__row}>
        <ContactIcons />
      </div>
      <hr />
      <div className={classes.footer__copyright}>
        Copyright &copy; {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Footer;
