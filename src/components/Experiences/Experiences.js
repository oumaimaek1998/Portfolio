import { useContext } from "react";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import PlaceIcon from "@mui/icons-material/Place";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Typography from "@mui/material/Typography";

import RefContext from "../../context/RefContext/RefContext";

import classes from "./Experiences.module.scss";

const Experiences = () => {
  const { refExperiences } = useContext(RefContext);

  const experiences = [
    {
      date: "10/2021 – present",
      title: "Full stack developer, Capgemini",
      project:
        "Web application that allows companies, territories and the French state to manage mobility offers",
    },
    {
      date: "03/2021 – 09/2021",
      title: "Computer vision intern, SNA",
      project:
        "Web application for online exam monitoring based on a facial recognition system",
    },
    {
      date: "08/2020 – 10/2020",
      title: "Web developer intern, Lear Corporation",
      project:
        " Web application for product tracking, order management and inventory management",
    },
    {
      date: "08/2019 – 09/2019",
      title: "Web developer intern, Ocp SA",
      project: "Web application for managing OCP employees' training",
    },
  ];

  const renderExperiences = () => {
    return (
      <Timeline position="alternate">
        {experiences.map((el, index) => {
          return (
            <TimelineItem key={index}>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                {el.date}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <PlaceIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "20px", px: 2 }}>
                <Typography variant="h6" component="span">
                  {el.title}
                </Typography>
                <Typography>{el.project}</Typography>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    );
  };
  return (
    <div className={classes.experiences} ref={refExperiences}>
      <h1>Experiences</h1>
      {renderExperiences()}
    </div>
  );
};

export default Experiences;
