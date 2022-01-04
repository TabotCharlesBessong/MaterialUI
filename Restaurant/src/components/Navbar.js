import React, { useState } from 'react'
import { alpha, AppBar, Avatar, Badge, InputBase, makeStyles, Toolbar, Typography } from '@material-ui/core'
import { Mail, Search ,Notifications, Cancel} from '@material-ui/icons'


const useStyles  = makeStyles((theme)=>({
  logoLg:{
    // display:'none',
    // [theme.breakpoints.up("sm")]:{
      // display:'block'
    // }
  },
  input:{
    // display:'none',
    // [theme.breakpoints.up("sm")]:{
      // display:'block'
    // }
  },
  toolbar:{
    display:'flex',
    justifyContent:'space-between'
  },
  search:{
    display:'flex',
    // justifyContent:'space-between'
    alignItems:'center',
    padding:'0.25rem 0.5rem',
    borderRadius:'0.75rem',
    background:alpha(theme.palette.common.white,0.95),
    textTransform:'capitalize',
    width:'40%',
    position:'relative',
    // right:'1%',
    [theme.breakpoints.down("sm")]:{
      display:(props)=>props.open ? "flex" : "none",
      // width:'10%',
    },
    
    '&:hover':{
      background:alpha(theme.palette.common.white,0.28)
    }
  },
  cancel:{
    color:'#bc3412',
    [theme.breakpoints.up("sm")]:{
      display:'none',
    }
  },
  searchIcon:{
    marginRight:'1.25rem',
    color:theme.palette.primary.main,
    fontSize:'2rem',
  },
  searchIcon1:{
    marginRight:'1.25rem',
    color:'#fff',
    fontSize:'2rem',
    // display:'block',
    // display:'block',
    marginRight:theme.spacing(2),
    [theme.breakpoints.up("sm")]:{
      display:'none',
    }, 
    // [theme.breakpoints.up("sm")]:{
      // display:(props)=>props.open ? "none":"flex" ,
      // width:'10%',
    // },
  },
  icons:{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-evenly',
  },
  badge:{
    marginRight:theme.spacing(2),
    display:(props)=>props.open ? "none":"flex" ,
  }
}))

const Navbar = () => {
  const [open,setOpen] = useState(false)
  const classes  = useStyles({open})
  return (
    <AppBar position='static'>
      <Toolbar className={classes.toolbar}>
        <Typography variant='h6'className={classes.logoLg} >
          Mr Nerus
        </Typography>
        {/* <Typography variant='h6'className={classes.logoSmall} > */}
          {/* Sir Charles */}
        {/* </Typography> */}
        <div className={classes.search}>
          <Search className={classes.searchIcon}/>
          <InputBase className={classes.input} placeholder='Search for ...' />
          <Cancel
            onClick={()=> setOpen(false)}
            className={classes.cancel}
          />
        </div>
        <div className={classes.icons}>
        <Search className={classes.searchIcon1} 
          onClick={()=> setOpen(true)}
        />
          <Badge badgeContent={4} color="secondary" className={classes.badge} >
           <Mail />
          </Badge>
          <Badge badgeContent={13} color="success" className={classes.badge} >
           <Notifications />
          </Badge>
          <Avatar alt="Indian Actress" src='images/avulionAgents (6).jpg'></Avatar>
        </div>
      </Toolbar>
    </AppBar> 
  )
}

export default Navbar
