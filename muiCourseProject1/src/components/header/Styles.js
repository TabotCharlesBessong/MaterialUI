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
    height:'6rem',
    [theme.breakpoints.down("md")]:{
      height:'5rem'
    }
  },
  tabContainer:{
    marginLeft:'auto',
    // [theme.breakpoints.down('sm')]:{
    //   display:'none'
    // },
    // [theme.breakpoints.down('md')]:{
    //   marginRight:'7rem'
    // },
    "&:hover":{
      backgroundColor:'transparent'
    }
    
  },
  tab:{
    ...theme.typography.tab,
    minWidth:10,
    marginLeft:'15px',
    // [theme.breakpoints.down('md')]:{
    //   marginLeft:'2px',
    //   minWidth:7.5
    // }
  },
  button:{
    ...theme.typography.estimate ,
    borderRadius:'50px',
    marginLeft:'50px',
    marginRight:'25px',
    height:'40px',
    // [theme.breakpoints.down('md')]:{
    //   padding:'0.2rem 0.4rem',
    //   fontSize:'1.0rem',
    //   // marginRight:'2.5rem',
    //   position:'absolute',
    //   right:'0.75rem'
    // }
  },
  menu:{
    backgroundColor:theme.palette.common.blue,
    color:'#fff',
    borderRadius:"0px"
  },
  menuItem:{
    ...theme.typography.tab,
    opacity:0.7,
    "&:hover":{
      opacity:1
    }
  },
  drawerIconContainer:{
    marginLeft:"auto",
    "&:hover":{
      backgroundColor:'transparent'
    }
  },
  drawerIcon:{
    height:'50px',
    width:"50px",
    [theme.breakpoints.up("md")]:{
      display:"none",
    }
  },
  list:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-between'
  },
  drawer:{
    background:theme.palette.common.blue
  },
  drawerItem:{
    ...theme.typography.tabs,
    color:'#fff',
    opacity:0.7
  },
  drawerItemEstimate:{
    background:theme.palette.common.orange,
    borderRadius:'1rem'
  },
  drawerItemSelected:{
    // opacity:1,
    "& .MuiListItemText-root":{
      opacity:1
    }
  },
  appbar:{
    zIndex:theme.zIndex.modal + 1
  }
}))


