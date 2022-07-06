import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
// import {Search} from '';
import {Search} from '@material-ui/icons'

import useStyles from './Styles.js';
import { useState } from 'react';

const Navbar = ({ setCoordinate }) => {
  const classes = useStyles();
  const [autoComplete, setAutoComplete] = useState(null)

  const onLoad = (autoC) =>{
    setAutoComplete(autoC)
  }

  const onPlaceChanged = ()=>{
    const lat = autoComplete.getPlace().geometry.location.lat() || null  
    const lng = autoComplete.getPlace().geometry.location.lng() || null 

    setCoordinate({lat,lng})
  }

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Advisor
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore new places
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <Search />
              </div>
              <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;