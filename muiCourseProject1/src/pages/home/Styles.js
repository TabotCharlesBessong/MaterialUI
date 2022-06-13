
import { makeStyles } from "@material-ui/core";
import revolutionBackground from '../../assets/repeatingBackground.svg'
import infoBackground from '../../assets/infoBackground.svg'

export default makeStyles((theme)=>({
  animation:{
    maxWidth:'50em',
    minWidth:'21em',
    marginTop:'2em',
    marginLeft:'10%',
    [theme.breakpoints.down('sm')]:{
      maxWidth:'30em'
    }
  },
  estimateButton:{
    ...theme.typography.estimate,
    background:theme.palette.common.orange,
    borderRadius:50,
    height:45,
    width:145,
    marginRight:'40px',
    textTransform:'capitalize',
    '&:hover':{
      backgroundColor:theme.palette.secondary.light
    }
  },
  buttonContainer:{
    marginTop:'1em'
  },
  learnButtonHero:{
    ...theme.typography.learnButton,
    fontSize:'1em',
    width:145,
    height:45 
  },
  learnButton:{
    ...theme.typography.learnButton,
    fontSize:'0.7rem',
    height:35 ,
    padding:5 ,
    [theme.breakpoints.down('sm')]:{
      marginBottom:'2em'
    }
  },
  mainContainer:{
    marginTop:'5em',
    [theme.breakpoints.down('md')]:{
      marginTop:'3em'
    },
    [theme.breakpoints.down('xs')]:{
      marginTop:'2em'
    }
  },
  heroTextContainer:{
    minWidth:'21.5em',
    marginLeft:'1em',
    [theme.breakpoints.down('xs')]:{
      marginLeft:0
    }
  },
  specialText:{
    fontFamily:'Pacifico',
    color:theme.palette.common.orange
  },
  subtitle:{
    marginBottom:'1em'
  },
  icon:{
    marginLeft:'2em',
    [theme.breakpoints.down('xs')]:{
      marginLeft:0
    }
  },
  serviceContainer:{
    marginTop:'12em',
    [theme.breakpoints.down('sm')]:{
      padding:25
    }
  },
  revolutionBackground:{
    ...theme.background,
    backgroundImage:`url(${revolutionBackground})`,
    
  },
  revolutionCard:{
    position:'absolute',
    boxShadow:theme.shadows[10],
    borderRadius:15,
    padding:'10em',
    [theme.breakpoints.down('sm')]:{
      paddingTop:'8em',
      paddingBottom:'8em',
      paddingLeft:0,
      paddingRight:0,
      borderRadius:0,
      width:'100%'
    }
  },
  infoBackground:{
    ...theme.background,
    backgroundImage:`url(${infoBackground})`,
  }
}))