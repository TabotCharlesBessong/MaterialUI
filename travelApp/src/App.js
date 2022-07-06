import './App.css';
// import Navbar from './components/Navbar/Navbar';
import {CssBaseline, Grid } from '@material-ui/core'
// import List from './components/list/List';
// import Map from './components/map/Map';
import {Navbar , Map,List,Details} from './components';


function App() {
  return (
    <div className="App">
    hello
      <CssBaseline/>
      <Navbar/>
      <Grid container spacing={3} style={{width:'100%'}} >
        <Grid item xs={12} md={4}  >
          <List/>
        </Grid>
        <Grid item xs={12} md={8}  >
          <Map/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
