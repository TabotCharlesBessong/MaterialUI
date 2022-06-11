
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
    link:"/services",
    activeIndex:1,
    selectedIndex:0
  },
  {
    name:"Custom Software Developement",
    link:"/customsoftware",
    activeIndex:1,
    selectedIndex:1
  },
  {
    name:"Mobile App Development",
    link:"/mobileapps",
    activeIndex:1,
    selectedIndex:2
  },
  {
    name:"Website Developement",
    link:"/websites",
    activeIndex:1,
    selectedIndex:3
  },
]

const routes = [
  {name:"Home",link:"/",activeIndex:0},
  {name:"Services",link:"/services",activeIndex:1,ariaOwns:anchorEl ? "simple-menu" : undefined  , ariaPopup:anchorEl ? "true" : undefined  , mouseOver:(e)=> handleClick(e) },
  {name:"Revolution",link:"/revolution",activeIndex:2},
  {name:"About Us",link:"/about",activeIndex:3},
  {name:"Contact Us",link:"/contact",activeIndex:4},
  // {name:"Free Estimate",link:"/estimate"},
]

  useEffect(()=>{
    [...menuOptions,...routes].forEach(route => {
      switch(window.location.pathname){
        case `${route.link}`:
          if(value !== route.activeIndex){
            setValue(route.activeIndex)
            if(route.selectedIndex && route.selectedIndex !== selectedIndex){

              setSelectedIndex(route.selectedIndex)

              selectedIndex(route.selectedIndex)

            }
          }
          break
        default:
          break 
      }
    } )
  },[value,menuOptions,selectedIndex,routes])

  const tabs = (
    <>
      <Tabs onChange={handleChange} value={value} className={classes.tabContainer}  >
        
        {routes.map((route,index)=> (
          <Tab key={`${route}${index}`} className={classes.tab} component={Link} to={route.link} label={route.name} aria-owns={route.ariaOwns} aria-haspopup={route.ariaPopup} onMouseOver={route.mouseOver} />
        ) )}
      </Tabs>
            {/* <Link to="/estimate"> */}
        <Button className={classes.button} variant="contained" color="secondary" component={Link} to="/estimate"  >
              Free Estimate
      </Button>
            {/* </Link> */}
      <Menu id="simple-menu" anchorEl={anchorEl} open={openMenu} onClick={handleClose} MenuListProps={{onMouseLeave:handleClose}} style={{zIndex:1302}}
              classes={{paper:classes.menu}} elevation={0}
              keepMounted
              >
      {
        menuOptions.map((opt,idx)=> (

        <MenuItem key={`${opt}${idx}`} classes={{root:classes.menuItem}} component={Link} to={opt.link} onClick={(event)=> {handleMenuItemClick(event,idx); setValue(1) ; handleClose() }   }  selected={idx === selectedIndex  } >

        <MenuItem key={`${opt}${i}`} classes={{root:classes.menuItem}} component={Link} to={opt.link} onClick={(event)=> {handleMenuItemClick(event,idx); setValue(1) ; handleClose() }   }  selected={idx === selectedIndex  } >

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
      <div className={classes.toolbarMargin} />
        <List disablePadding className={classes.list} >
        {routes.map((route,index)=>(
          <ListItem key={`${route}${route.activeIndex}`} onClick={()=> {setOpenDrawer(false) ; setValue(route.activeIndex) }} selected={value === route.selectedIndex  } classes={{selected:classes.selectedIndex}} devider button component={Link}  >
            <ListItemText disableTypography classes={{root:classes.drawerItem}} > {route.name} </ListItemText>
          </ListItem>
        ))}
        
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
        <AppBar className={classes.appbar} position='fixed' color='primary' >
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