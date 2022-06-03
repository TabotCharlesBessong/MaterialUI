import { makeStyles } from "@material-ui/core";


export default   makeStyles ((theme)=>({
  toolbar:{
    position:'relative'
  },
  toolbarMargin:{
    ...theme.mixins.toolbar,
    marginBottom:'3rem'
  },
  logo:{
    height:'6rem'
  },
  tabContainer:{
    marginLeft:'auto',
    [theme.breakpoints.down('sm')]:{
      display:'none'
    },
    [theme.breakpoints.down('md')]:{
      marginRight:'7rem'
    },
    "&:hover":{
      backgroundColor:'transparent'
    }
    
  },
  tab:{
    ...theme.typography.tab,
    minWidth:10,
    marginLeft:'15px',
    [theme.breakpoints.down('md')]:{
      marginLeft:'2px',
      minWidth:7.5
    }
  },
  button:{
    ...theme.typography.estimate ,
    borderRadius:'50px',
    marginLeft:'50px',
    marginRight:'25px',
    height:'40px',
    [theme.breakpoints.down('md')]:{
      padding:'0.2rem 0.4rem',
      fontSize:'1.0rem',
      // marginRight:'2.5rem',
      position:'absolute',
      right:'0.75rem'
    }
  }
}))