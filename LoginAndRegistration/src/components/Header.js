

import { AppBar, Badge, Grid, IconButton, InputBase, Toolbar } from '@material-ui/core'
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew"
import React from 'react'
import NotficationNoneIcon from "@material-ui/icons/NotificationsNone"
import SearchIcon from "@material-ui/icons/Search"
import { makeStyles } from '@material-ui/styles'


const useStyles = makeStyles(theme =>({
  root:{
    background:'#1ba785',
    float:'right',
  },
  header1:{
    position:'absolute',
    top:'0.6rem',
    right:'1rem'
  },
  header2:{
    background:'#fff',
    color:"#222",
    width:'100%',
    borderRadius:'0.75rem',
    height:'3rem',
  },
  input:{
    opacity:'0.6',
    fontSize:'0.8rem',
    padding:'0 0.8rem',
    width:'100%',
    height:'100%',
    fontSize:'2rem',
    letterSpacing:'0.1rem',
    textTransform:'capitalize',
    '&:hover':{
      background:'#222',
      color:'#fff'
    },
    '& .MuiSvgIcon-root':{
      marginRight:'1rem',
    }
  },
}))

const Header = () => {
  const classes = useStyles()
  return (
    <div className='header'>
      <AppBar position='ststic' className={classes.root}>
        <Toolbar>
          <Grid container
          alignItems='center'
          >
            <Grid item xs={4} lg={4} className={classes.header2} >
             <InputBase 
             className={classes.input}
               placeholder='Search with Nerus'
               startAdornment={<SearchIcon fontSize='medium'/>}
             />
            </Grid>
            <Grid item xs={8} lg={8} className={classes.header1} >
             <IconButton>
               <Badge badgeContent={6} color='secondary'>
                 <NotficationNoneIcon/>
               </Badge>
            </IconButton>
            <IconButton>
               <Badge badgeContent={6} color='primary'>
                <PowerSettingsNewIcon/>
              </Badge>
             </IconButton>
             <IconButton >
                <NotficationNoneIcon/>
             </IconButton>
            </Grid>
          

          
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
