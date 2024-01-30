import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    "Synapse Financial Technologies": {
      jobTitle: "Backend Software Engineer 2",
      duration: "NOV 2022 - Oct 2023",
      desc: [
        "Designed and developed an internal framework in Python that provided our microservices access to common internal functions and enabled monitoring and observability features (Logging, Distributed Tracing, Metrics).",
        "Collaborated with Product Managers to define requirements and implemented flow improvements on the public facing transaction dispute endpoints.",
        "Resolved backend issues related to Database capacity, high HTTP request throughput, coding bugs, and infrastructure scaling. (Python)",
        "Wrote playbooks for issues that reduced repeated issue troubleshooting time by nearly half.",           
        "Integrated, tested, and managed Datadog to enable monitoring and observability (logging, distributed tracing, and metrics) for our system."
      ]
    },
    "Google (Accenture)": {
      jobTitle: "API Support Engineer",
      duration: "JULY 2019 - NOV 2022",
      desc: [
        "Managed the integration of Financial Institutions to Google Payments API in their mobile and web applications.",
        "Worked independently with 20+ clients and managed accounts daily through the Salesforce CRM on integrating with the Google Payments API.",
        "Performed UI/UX reviews according to Google Pay guidelines and improved guidelines with additional rules.",
        "Resolved client discovered bugs and issues related to client access."
      ]
    },
    "CodePath": {
      jobTitle: "Tech Fellow",
      duration: "JAN 2019 - JULY 2019",
      desc: [
        "Co-lead a class of 16 students through CodePath's curriculum.",
        "Instructed them in understanding the many concepts of Android app development and using Android Studio.",
        "Completed 6 weeks of Android projects which can be found on my github."
      ]
    },
    "Planet Rocket": {
      jobTitle: "Full Stack Web Developer",
      duration: "JULY 2018 - JAN 2019",
      desc: [
        "Created a Web Application using the MERN (MongoDB, Express.js, React.js, Node.js) tech stack. It aimed to help users find the correct audience for their 'idea'.",
        "Worked closely with the CEO and a small team to design the product and its iteration.",
        "Features included: user authentication, adding “idea” cards, and taking a short quiz to find their target audience."
      ]
    },
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;