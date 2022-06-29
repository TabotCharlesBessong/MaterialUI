import React, { useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import Navbar from "./Navbar";
import { useStyles } from "./HeaderStyle";
import SvgaComponent from "./SvgaComponent";

export default function HeaderComponent() {
  const classes = useStyles();
  const [Color, setColor] = useState("#d50000");

  const handleOnChange = ({ target }) => {
    setColor(target.value);
  };

  return (
    <Box className={classes.wrapper}>
      <Navbar Color={Color} handleOnChange={handleOnChange} />
      <Box className={classes.gridWrapper}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box p={2}>
              <Typography
                variant='h3'
                component='h5'
                style={{ color: Color, marginBottom: "25px" }}>
                React Tutorials for beginnerss
              </Typography>
              <Typography
                variant='h6'
                style={{ color: Color, marginBottom: "25px" }}>
                Learn React by bulding a color plate project for absolute
                begainnerss
              </Typography>
              {CustomButton({ label: "Let's Begin", color: Color })}
            </Box>
          </Grid>
          {/* Svg container  */}
          <Grid item xs={12} sm={6}>
            <Box p={1}>
              <SvgaComponent color={Color} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export const CustomButton = ({ label, color }) => {
  const classes = useStyles();
  return (
    <button
      className={classes.button}
      style={{ color: color, border: `2px solid ${color}` }}>
      {label}
    </button>
  );
};
