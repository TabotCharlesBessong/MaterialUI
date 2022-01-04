// import logo from './logo.svg';
import './App.css';
import {Button, Grid, makeStyles} from "@material-ui/core"
// import {Person} from "@material-ui/icons"
import Navbar from './components/Navbar';
import Leftbar from './components/Leftbar';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';

const useStyles = makeStyles((theme)=>({
  button:{
    color:'#fff',
    background:theme.palette.primary.main,
  },
  main:{
    // marginTop:'5rem',
  }
}))

function App() {
  const classes = useStyles()
  return (
    <>
      <div className="">
        {/* <h1>Hello my world</h1> */}
        <div>
          <Navbar/>
          
        </div>
        <div className={classes.main}>
          <Grid container>
            <Grid item sm={2}>
              <Leftbar/>
            </Grid>
            <Grid item sm={7}>
              <Feed/>
            </Grid>
            <Grid item sm={3}>
              <Sidebar/>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default App;
