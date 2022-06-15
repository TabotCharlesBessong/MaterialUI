import React from "react";
import {Grid , Button , useMediaQuery} from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {  useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";


import background from "../../assets/background.jpg";
import mobileBackground from "../../assets/mobileBackground.jpg";



export default function CallToAction(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      alignItems="center"
      justify={matchesSM ? "center" : "space-between"}
      className={classes.background}
      direction={matchesSM ? "column" : "row"}
    >
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : "5em",
          textAlign: matchesSM ? "center" : "inherit"
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h2">
              Simple Software.
              <br />
              Revolutionary Results.
            </Typography>
            <Typography variant="subtitle2" style={{ fontSize: "1.5rem" }}>
              Take advantage of the 21st Century.
            </Typography>
            <Grid container justify={matchesSM ? "center" : undefined} item>
              <Button
                component={Link}
                to="/revolution"
                variant="outlined"
                className={classes.learnButton}
                onClick={() => props.setValue(2)}
              >
                <span style={{ marginRight: 5 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          component={Link}
          to="/estimate"
          variant="contained"
          className={classes.estimateButton}
          onClick={() => props.setValue(5)}
        >
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
}
