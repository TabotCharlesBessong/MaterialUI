// import logo from './logo.svg';
import './App.css';
import {Button, makeStyles} from "@material-ui/core"
import {Person} from "@material-ui/icons"

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
      <div className="App">
        <h1>Hello my world</h1>
      </div>
    </>
  );
}

export default App;
