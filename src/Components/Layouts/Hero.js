import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import BackgroundImage from "../../Assets/images/background.jpg";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import Button from "@material-ui/core/Button";
import { Link, animateScroll as scroll } from "react-scroll";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  Grid: {
    width: "100vw",
    height: "100vh"
  },
  heroContent: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${BackgroundImage}')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100vh",
    padding: theme.spacing("30vh", 0, "30vh")
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function Hero() {
  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm" align="center">
        <Typography
          component="h2"
          variant="h3"
          align="center"
          color="secondary"
          gutterBottom
        >
          FRANK YIU
        </Typography>
        <Typography variant="h5" align="center" color="primary" paragraph>
          A software developer
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Link to="About Me" smooth={true}>
                <Button variant="contained" color="primary">
                  Take a look about me
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link to="Contact Me" smooth={true}>
                <Button variant="outlined" color="primary">
                  Contact Me
                </Button>
              </Link>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
