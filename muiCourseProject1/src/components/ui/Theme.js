
import { createTheme } from "@material-ui/core/styles";

const arcBlue = "#0b72b9"
const arcOrange = "#ffba60"

export default createTheme({
  palette:{
    common:{
      blue:`${arcBlue}`,
      orange:`${arcOrange}`
    },
    primary:{
      main:`${arcBlue}`
    },
    secondary:{
      main:`${arcOrange}`
    }
  },
  typography:{
    tab:{
      fontFamily:'Raleway',
      textTransform:'none',
      fontWeight:'700',
      fontSize:'1.2rem',
    },
    estimate:{
      fontFamily:"Pacifico",
      fontSize:'1.1rem',
      textTransform:'none',
      color:'#fff'
    }
  }
})