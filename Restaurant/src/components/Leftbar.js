
import { Container,  makeStyles, Typography } from '@material-ui/core'
import { Home, People, Person , List, PlayCircleOutline, Bookmark, Settings } from '@material-ui/icons'
import React from 'react'

const useStyles  = makeStyles((theme)=>({
   container:{
     height:'100vh',
     paddingTop:'2.5rem',
     background:theme.palette.primary.main ,
     [theme.breakpoints.up("sm")]:{
      // marginBottom:theme.spacing(2.5),
      // cursor:'pointer',
      background:'#222',
      color:'#fff',
      boder:'1px solid #fff'
     },
   },
   item:{
     display:'flex',
     alignItems:'center',
     marginBottom:theme.spacing(4),
     color:'#fff',
     [theme.breakpoints.up("sm")]:{
      marginBottom:theme.spacing(2.5),
      cursor:'pointer',
     }
   },
   text:{
     fontWeight:'500',
     [theme.breakpoints.down("sm")]:{
       display:'none'
     }
   },
   icon:{
     marginRight:theme.spacing(1),
     [theme.breakpoints.up("sm")]:{
       fontSize:"18px",
     },
     cursor:'pointer'
   }
}))

const Leftbar = () => {
  const classes = useStyles()
  return (
    <div>
      <Container className={classes.container}>
        <div className={classes.item}>
          <Home className={classes.icon}></Home>
          <Typography className={classes.text} variant='h5' component='h2' >Homepage</Typography>
        </div>
        <div className={classes.item}>
          <Person className={classes.icon}></Person>
          <Typography className={classes.text} variant='h5' 
          component='h2' >People</Typography>
        </div>
        <div className={classes.item}>  
          <List className={classes.icon}></List>
          <Typography className={classes.text} variant='h5' 
          component='h2' >Items</Typography>
        </div>
        <div className={classes.item}>
          <PlayCircleOutline className={classes.icon}></PlayCircleOutline>
          <Typography className={classes.text} variant='h5' 
          component='h2' >Circle Page</Typography>
        </div>
        <div className={classes.item}>  
          <Bookmark className={classes.icon}></Bookmark>
          <Typography className={classes.text} variant='h5' 
          component='h2' >Bookmark</Typography>
        </div>
        <div className={classes.item}>
          <Settings className={classes.icon}></Settings>
          <Typography className={classes.text} variant='h5' 
          component='h2' >Settings</Typography>
        </div>
      </Container>
      {/* <People/> */}
    </div>
  )
}

export default Leftbar
