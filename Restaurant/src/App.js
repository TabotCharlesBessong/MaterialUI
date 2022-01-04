// import logo from './logo.svg';
import './App.css';
import {Button, makeStyles} from "@material-ui/core"
import {Person} from "@material-ui/icons"
import Navbar from './components/Navbar';

const useStyles = makeStyles((theme)=>({
  button:{
    color:'#fff',
    background:theme.palette.primary.main,
  }
}))

function App() {
  const classes = useStyles()
  return (
    <>
      <div className="">
        {/* <h1>Hello my world</h1> */}
        <Navbar/>
      </div>
    </>
  );
}

export default App;
