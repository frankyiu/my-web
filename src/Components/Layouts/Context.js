import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import CardMedia from "@material-ui/core/CardMedia";
import ProgrammingImage from "../../Assets/images/Programming.jpg";
import SchoolImage from "../../Assets/images/hkust.jpg";
import APIcert from "../../Assets/images/freeCodeCamp/API.jpg";
import JavaScriptcert from "../../Assets/images/freeCodeCamp/JavaScript.jpg";
import notComplete from "../../Assets/images/freeCodeCamp/notComplete.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  Container: {
    align: "center",
    padding: theme.spacing("8vh", 0, "5vh")
  },
  Heading: {
    padding: theme.spacing(0, 0, "2vh")
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  media: {
    height: 0,
    paddingTop: "56%"
  }
}));

export default function Context() {
  const classes = useStyles();
  return (
    <div>
      <session id="About Me">
        <Container maxWidth="sm" className={classes.Container}>
          <Typography
            id="About Me"
            component="h5"
            variant="h4"
            align="center"
            color="secondary"
            gutterBottom
          >
            About Me
          </Typography>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardMedia className={classes.media} image={ProgrammingImage} />
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography align="justify">
                Hi There! My name is Frank. I'm a Computer Science student from
                HKUST and a software engineer. Currently, I'm leaving from study
                and working as an Analysis Programmer placement at Hong Kong
                Monteray Authority. I love solving problem and taking challenge.
                Nice to meet you! Stranger.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </session>
      <session id="Education">
        <Container maxWidth="sm" className={classes.Container}>
          <Typography
            component="h5"
            variant="h4"
            align="center"
            color="secondary"
            gutterBottom
          >
            Education
          </Typography>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <Typography align="justify">
                Here is my college - Hong Kong University of Science and
                Technology. I am taking a bachelor degree of Computer Science
                Major and meeting with many brilliant people here. Also, I am
                once a Robotic Team Member here and represent our college to
                have competition during my study.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardMedia className={classes.media} image={SchoolImage} />
              </Card>
            </Grid>
          </Grid>
        </Container>
      </session>
      <session id="Challenge">
        <Container maxWidth="sm" className={classes.Container}>
          <Typography
            component="h5"
            variant="h4"
            align="center"
            color="secondary"
            gutterBottom
          >
            Challenge
          </Typography>
          <Typography align="justify" paragraph>
            Challenge Time! I love development and I always keep practising my
            programming and developing skill and so I will take some challenges
            from time to time.
          </Typography>
          <Typography align="center" variant="h6" color="error">
            Current Challenge : FreeCodeCamp Full-Stack Developer (2/6)
          </Typography>
        </Container>
        <Container>
          <Grid container spacing={6} maxWidth="md">
            {[
              {
                "Responsive Web Design": notComplete
              },
              {
                "JavaScript Algorithms and Data Structures": JavaScriptcert
              },
              {
                "Front End Libraries": notComplete
              },
              {
                "Data Visualization": notComplete
              },
              {
                "APIs and Microservices": APIcert
              },
              {
                "Quality Assurance": notComplete
              }
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                    className={classes.media}
                    image={Object.values(item)[0]}
                    title={Object.keys(item)[0]}
                  />
                </Card>
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    align="center"
                  >
                    Certificate:{Object.keys(item)[0]}
                  </Typography>
                </CardContent>
              </Grid>
            ))}
          </Grid>
        </Container>
      </session>
      <session id="Contact Me">
        <Container maxWidth="sm" className={classes.Container}>
          <Typography
            component="h5"
            variant="h4"
            align="center"
            color="secondary"
            gutterBottom
          >
            Contact Me
          </Typography>
          <Typography align="center">
            Nice to meet you Stranger! Please feel free to talk with me by
            clicking the following link.
          </Typography>
        </Container>
      </session>
    </div>
  );
}
