import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import Typography from "@material-ui/core/Typography";
import EmailIcon from "@material-ui/icons/Email";
import { Link, animateScroll as scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500
  },
  bot: {
    padding: theme.spacing(5, 0),
    fontSize: 12
  }
}));

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  return (
    <div>
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="LinkedIn"
          icon={<LinkedInIcon />}
          href="https://linkedin.com/in/frank-yiu"
          target="_blank"
        />
        <BottomNavigationAction
          label="GitHub"
          icon={<GitHubIcon />}
          href="https://github.com/frankyiu"
          target="_blank"
        />
        <BottomNavigationAction
          label="MAIL"
          icon={<EmailIcon />}
          href="mailto:frankyiu1020111@gmail.com"
        />
      </BottomNavigation>
      <Typography align="center" className={classes.bot}>
        Design and Build by FRANK YIU, 2020
      </Typography>
    </div>
  );
}
