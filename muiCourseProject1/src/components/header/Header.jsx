
import React, { useEffect, useState } from 'react'
import {AppBar , Toolbar , useScrollTrigger , Tabs , Tab , Button , Menu , MenuItem } from '@material-ui/core'
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
  const [anchorEl,setAnchorEl] = useState(null)
  const [open,setOpen] = useState(false)
  const [selectedIndex,setSelectedIndex] = useState(0)

  const handleChange = (e,value)=>{
    setValue(value)
  }

  const handleClick = (e)=>{
    setAnchorEl(e.currentTarget)
    setOpen(true)
  }

  const handleMenuItemClick = (e,i)=>{
    setAnchorEl(null)
    setOpen(false)
    setSelectedIndex(i)
  }

  const handleClose = (e) => {
    setAnchorEl(null)
    setOpen(false)
  }

  const menuOptions = [
    {
    name:"Services",
    link:"/services"
  },
  {
    name:"Custom Software Developement",
    link:"/customsoftware"
  },
  {
    name:"Mobile App Development",
    link:"/mobileapps"
  },
  {
    name:"Website Developement",
    link:"/websites"
  },
]

  useEffect(()=>{
    
    switch(window.location.pathname){
      case "/":{
        if (value !== 0){
          setValue(0)
        }
        break;

        }
      case "/services":
        if (value !== 1){
          setValue(1)
        }
        break  
      case "/customsoftware":
        if (value !== 1){
          setValue(1)
          setSelectedIndex(1)
          
        }
        break
      case "/mobileapps":
        if (value !== 1){
          setValue(1)
          setSelectedIndex
          (2)
        }
        break
      case "/websites":
        if (value !== 1){
          setValue(1)
          setSelectedIndex(3)
        }
        break
      case "/revolution":
        if (value !== 2){
          setValue(2)
        }
        break
      case "/about":
        if (value !== 3){
          setValue(5)
        }
        break;
      case "/contact":
        if (value !== 4){
          setValue(5)
        }
        break;
      case "/estimate":
        if (value !== 5){
          setValue(5)
        }
       break;

      default:
        break
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
              <Tab aria-owns={anchorEl ? "simple-menu" : undefined } aria-haspopup = {anchorEl ? "true" : undefined }  className={classes.tab} component={Link} to="/services" onMouseOver ={(e)=> handleClick(e)} label="Services" />
              <Tab className={classes.tab} component={Link} to="/revolution"  label="The Revolution" />
              
              <Tab className={classes.tab} component={Link} to="/about" label="About Us" />
              <Tab className={classes.tab} component={Link} to="/contact" label="Contact Us" />
            </Tabs>
            {/* <Link to="/estimate"> */}
              <Button className={classes.button} variant="contained" color="secondary" component={Link} to="/estimate"  >
              Free Estimate
            </Button>
            {/* </Link> */}
            <Menu id="simple-menu" anchorEl={anchorEl} open={open} onClick={handleClose} MenuListProps={{onMouseLeave:handleClose}}
              classes={{paper:classes.menu}} elevation={0}
              >
              {
                menuOptions.map((opt,idx)=> (
                  <MenuItem key={opt} classes={{root:classes.menuItem}} component={Link} to={opt.link} onClick={(event)=> {handleMenuItemClick(event,idx); setValue(1) ; handleClose() }   }  selected={idx === selectedIndex  } >
                   {opt.name}
                  </MenuItem>
                  )  )
              }
            </Menu>
            
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  )
}

export default Header