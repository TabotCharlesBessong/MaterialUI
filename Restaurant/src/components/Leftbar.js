
import { Container, makeStyles, Typography } from '@material-ui/core'
import { Home, People } from '@material-ui/icons'
import React from 'react'

const useStyles  = makeStyles((theme)=>({
   container:{
     height:'100vh',
     paddingTop:'2.5rem',
     background:theme.palette.primary.main 
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
     [theme.breakpoints.down("sm")]:{
       display:'none'
     }
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
          <Home className={classes.icon}></Home>
          <Typography className={classes.text} variant='h5' 
          component='h2' >Homepage</Typography>
        </div>
        <div className={classes.item}>  
          <Home className={classes.icon}></Home>
          <Typography className={classes.text} variant='h5' 
          component='h2' >Homepage</Typography>
        </div>
        <div className={classes.item}>
          <Home className={classes.icon}></Home>
          <Typography className={classes.text} variant='h5' 
          component='h2' >Homepage</Typography>
        </div>
        <div className={classes.item}>  
          <Home className={classes.icon}></Home>
          <Typography className={classes.text} variant='h5' 
          component='h2' >Homepage</Typography>
        </div>
        <div className={classes.item}>
          <Home className={classes.icon}></Home>
          <Typography className={classes.text} variant='h5' 
          component='h2' >Homepage</Typography>
        </div>
      </Container>
      {/* <People/> */}
    </div>
  )
}

export default Leftbar
