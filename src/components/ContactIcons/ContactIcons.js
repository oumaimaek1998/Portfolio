import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

import classes from "./ContactIcons.module.scss";

const ContactIcons = () => {
  return (
    <div className={classes.contactIcons}>
      <a target="_blank" href="https://github.com/oumaimaek1998">
        <GitHubIcon />
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/oumaima-elkadiri/">
        <LinkedInIcon />
      </a>
      <a href="mailto: oumaimaelkadiri1998@gmail.com">
        <EmailIcon />
      </a>
    </div>
  );
};

export default ContactIcons;
