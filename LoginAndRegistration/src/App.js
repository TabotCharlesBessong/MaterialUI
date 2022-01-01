import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import { makeStyles } from '@material-ui/styles';
import Header from './components/Header';
import { CssBaseline } from '@material-ui/core';

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
