import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import { makeStyles } from '@material-ui/styles';
import Header from './components/Header';

const useStyles = makeStyles({
  app:{
    // padding:'32rem',
    width:'100%',
    // margin:'10rem'
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
    </>
  );
}

export default App;
