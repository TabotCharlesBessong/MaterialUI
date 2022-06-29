import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { useStyles } from "./HeaderStyle";

export default function Navbar({ Color, handleOnChange }) {
  const classes = useStyles();

  return (
    <AppBar position='static'>
      <Toolbar className={classes.toolBar}>
        <Typography variant='h6' style={{ color: Color }}>
          Color Palette
        </Typography>
        <input
          type='color'
          value={Color}
          name='color'
          onChange={handleOnChange}
          className={classes.input}
          style={{ background: Color }}
        />
      </Toolbar>
    </AppBar>
  );
}
