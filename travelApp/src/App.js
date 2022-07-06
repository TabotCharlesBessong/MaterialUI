import './App.css';
import {CssBaseline, Grid } from '@material-ui/core'
import {Navbar , Map,List,Details} from './components';

import {getPlacesData} from './api'
import { useEffect , useState } from 'react';
 

function App() {
  const [places,setPlaces] = useState([])
  const [coordinate,setCoordinate] = useState({})
  const [bounds,setBounds] = useState({}) //{ne:{lat:0,lng:0},sw:{lat:0,lng:0}}

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(({coords})=>{
      setCoordinate({lat:coords.latitude,lng:coords.longitude})
    })
  },[])

  useEffect(()=>{
    console.log(coordinate,bounds)  
    getPlacesData(bounds.sw,bounds.ne).then((data)=>{
      console.log(data) //data is an array of objects
      setPlaces(data)
    }).catch((err)=>{
      console.log(err) //error handling
    })
  },[coordinate,bounds])
  return (
    <div className="App">
      <CssBaseline/>
      <Navbar/>
      <Grid container spacing={3} style={{width:'100%'}} >
        <Grid item xs={12} md={4}  >
          <List places={places} />
        </Grid>
        <Grid item xs={12} md={8}  >
          <Map
            setCoordinate={setCoordinate}
            setBounds={setBounds}
            coordinate={coordinate}

          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
