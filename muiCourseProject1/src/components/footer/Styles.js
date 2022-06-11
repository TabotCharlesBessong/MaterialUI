import { makeStyles } from "@material-ui/core";

export default makeStyles((theme)=>({
  footer:{
    background:theme.palette.common.blue ,
    width:'100%',
    zIndex:1302,
    position:'relative'
  },
  adornment:{
    width:'25em',
    // height:'5rem',
    verticalAlign:"bottom",
    [theme.breakpoints.down('md')]:{
      width:'21em'
    },
    [theme.breakpoints.down('xs')]:{
      width:'15em'
    },
  },
  mainContainer:{
    position:'absolute'
  },
  link:{
    color:'#fff',
    fontFamily:'Aerial',
    fontSize:'0.75rem',
    fontWeight:'bold',
    textDecoration:'none',
    textTransform:'capitalize',

  },
  gridItem:{
    margin:'3rem'
  },
  icon:{
    height:'4em',
    width:'4em',
    [theme.breakpoints.down('md')]:{
      height:'2.5em',
      width:'2.5em'
    }
  },
  socialContainer:{
    position:'absolute',
    marginTop:'-6em',
    right:'1.5em',
    [theme.breakpoints.down('md')]:{
      right:'0.6em'
    }
  }
}))