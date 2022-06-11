
import React, { useEffect, useState } from 'react'
import {AppBar , Toolbar , useScrollTrigger , Tabs , Tab , Button , Menu , MenuItem , useMediaQuery ,SwipeableDrawer , IconButton , List, ListItem , ListItemText , ListItemIcon } from '@material-ui/core'
// import {Menu} from '@material-ui/icons'
import MenuIcon from '@material-ui/icons/Menu'
import {useTheme} from '@material-ui/core/styles'
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
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  const [value,setValue] = useState(0)
  const [anchorEl,setAnchorEl] = useState(null)
  const [openMenu,setOpenMenu] = useState(false)
  const [openDrawer,setOpenDrawer] = useState(false)
  const [selectedIndex,setSelectedIndex] = useState(0)
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  

  const handleChange = (e,newValue)=>{
    setValue(newValue)
  }

  const handleClick = (e)=>{
    setAnchorEl(e.currentTarget)
    setOpenMenu(true)
  }

  const handleMenuItemClick = (e,i)=>{
    setAnchorEl(null)
    setOpenMenu(false)
    setSelectedIndex(i)
  }

  const handleClose = (e) => {
    setAnchorEl(null)
    setOpenMenu(false)
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

  const tabs = (
    <>
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
      <Menu id="simple-menu" anchorEl={anchorEl} open={openMenu} onClick={handleClose} MenuListProps={{onMouseLeave:handleClose}}
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
    </>
  )

  const drawer = (
    <>
      <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} open={openDrawer} onClose={()=> setOpenDrawer(false)} onOpen={()=> setOpenDrawer(true)} classes={{paper:classes.drawer}}  >
        <List disablePadding className={classes.list} >
          <ListItem  onClick={()=> {setOpenDrawer(false) ; setValue(0) }} divider button disableTypography  component={Link} to="/" selected={value === 0} >
             <ListItemText className={value === 0 ? [classes.drawerItem , classes.drawerItemSelected] :  classes.drawerItem}   >Home</ListItemText>
          </ListItem>
          <ListItem  onClick={()=> {setOpenDrawer(false) ; setValue(1) }} divider button disableTypography  component={Link} to="/services" selected={value === 1}  >
             <ListItemText className={value === 1 ? [classes.drawerItem , classes.drawerItemSelected] :  classes.drawerItem}   >Services</ListItemText>
          </ListItem>
          <ListItem  onClick={()=> {setOpenDrawer(false) ; setValue(2) }} divider button disableTypography  component={Link} to="/revolution" selected={value ===2}  >
             <ListItemText className={value === 2 ? [classes.drawerItem , classes.drawerItemSelected] :  classes.drawerItem}   >Revolution</ListItemText>
          </ListItem>
          <ListItem onClick={()=> {setOpenDrawer(false) ; setValue(3) }} divider button disableTypography  component={Link} to="/about" selected={value === 3}  >
             <ListItemText className={value === 3 ? [classes.drawerItem , classes.drawerItemSelected] :  classes.drawerItem}   >About Us</ListItemText>
          </ListItem>
          <ListItem  onClick={()=> {setOpenDrawer(false) ; setValue(4)}} divider button  disableTypography component={Link} to="/contact" selected={value === 4}  >
             <ListItemText className={value === 4 ? [classes.drawerItem , classes.drawerItemSelected] :  classes.drawerItem}    >Contact Us</ListItemText>
          </ListItem>
          <ListItem className={classes.drawerItemEstimate}   onClick={()=> {setOpenDrawer(false) ; setValue(5) }}divider button disableTypography  component={Link} to="/estimate" selected={value === 5}  >
             <ListItemText className={value === 5 ? [classes.drawerItem , classes.drawerItemSelected] :  classes.drawerItem}    >Free Estimate</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton className={classes.drawerIconContainer} onClick={()=>setOpenDrawer(!openDrawer)} disableRipple >
        <MenuIcon className={classes.drawerIcon}  />
      </IconButton>
    </>
  )
  return (
    <>
      <ElevationScroll>
        <AppBar position='fixed' color='primary' >
          <Toolbar disableGutters={true} className={classes.toolbar} >
            <Link to="/" onClick={()=> setValue(0)} >
              <img  className={classes.logo} src={logo} alt={logo} />
            </Link>
          {matches ? drawer : tabs }  
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  )
}

export default Header