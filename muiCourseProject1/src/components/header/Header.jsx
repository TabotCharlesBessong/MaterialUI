
import React, { useEffect, useState } from 'react'
import {AppBar , Toolbar , useScrollTrigger , Tabs , Tab , Button } from '@material-ui/core'
import {Link} from 'react-router-dom'

import useStyles from './Styles.js'

import logo from '../../assets/logo.svg'

const  ElevationScroll = (props)=> {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
    // target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}



const Header = (props) => {
  const classes = useStyles()
  const [value,setValue] = useState(0)

  const handleChange = (e,value)=>{
    setValue(value)
  }

  useEffect(()=>{
    if(window.location.pathname === "/" && value !== 0 ){
      setValue(0)
    } else if(window.location.pathname === "/services" && value !== 1){
      setValue(1)
    } 
    else if(window.location.pathname === "/revolution" && value !== 2){
      setValue(2)
    }
     else if(window.location.pathname === "/about" && value !== 3){
      setValue(3)
    } 
    else if(window.location.pathname === "/contact" && value !== 4){
      setValue(4)
    }
    else if(window.location.pathname === "/estimate" && value !== 5){
      setValue(5)
    }
  },[value])
  return (
    <>
      <ElevationScroll>
        <AppBar position='fixed' color='primary' >
          <Toolbar disableGutters={true} className={classes.toolbar} >
            <Link to="/" onClick={()=> setValue(0)} >
              <img  className={classes.logo} src={logo} alt={logo} />
            </Link>
            
            <Tabs onChange={handleChange} value={value} className={classes.tabContainer}  >
              <Tab  className={classes.tab} component={Link} to="/" label="Home" />
              <Tab className={classes.tab} component={Link} to="/services" label="Services" />
              <Tab className={classes.tab} component={Link} to="/revolution"  label="The Revolution" />
              <Tab className={classes.tab} component={Link} to="/contact" label="Contact Us" />
              <Tab className={classes.tab} component={Link} to="/about" label="About Us" />
            </Tabs>
            {/* <Link to="/estimate"> */}
              <Button className={classes.button} variant="contained" color="secondary" component={Link} to="/estimate"  >
              Free Estimate
            </Button>
            {/* </Link> */}
            
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  )
}

export default Header