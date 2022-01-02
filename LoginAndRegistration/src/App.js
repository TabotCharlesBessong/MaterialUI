import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import { makeStyles } from '@material-ui/styles';
import Header from './components/Header';
import { createTheme, CssBaseline } from '@material-ui/core';


const theme = createTheme({
  // palette:'#ab1875',
  // light:'#fff',
  palette:{
    primary:{
      main:'#1ba785',
      light:'#fff'
    },
    secondary:{
      main:'#282c34',
      light:'ccc',
    },
    background:{
      default:'f4f5fd',
    }
  }
})

const useStyles = makeStyles({
  app:{
    // padding:'32rem',
    width:'100%',
    paddingLeft:'32rem'
  }
})

function App() {
  const classes = useStyles()
  return (
    <>
    
      <Sidebar/>
      <div className={classes.app}>
        <Header/>
      </div>
      <CssBaseline/>
    </>
  );
}

export default App;
