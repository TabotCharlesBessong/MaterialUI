import './App.css';
import {CssBaseline, Grid } from '@material-ui/core'
import {Navbar , Map,List,Details} from './components';

import {getPlacesData} from './api'
import { useEffect , useState } from 'react';
 

function App() {
  const [places,setPlaces] = useState([])
  const [coordinate,setCoordinate] = useState({})
  const [bounds,setBounds] = useState({}) //{ne:{lat:0,lng:0},sw:{lat:0,lng:0}}
  const [childClicked,setChildClicked] = useState(null) 
  const [loading,setLoading] = useState(false)
  const [type,setType] = useState('restaurants')
  const [rating,setRating] = useState('')
  const [filteredPlaces, setFilteredPlaces] = useState([])

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(({coords})=>{
      setCoordinate({lat:coords.latitude,lng:coords.longitude})
    })
  },[])

  useEffect(()=>{
    const filteredPlaces = places.filter((place)=> place.rating > rating )
    setFilteredPlaces(filteredPlaces) 
  },[rating])

  useEffect(()=>{
    // console.log(coordinate,bounds)  
    if(bounds.sw && bounds.ne) {
      setLoading(true)
      getPlacesData(type,bounds.sw,bounds.ne).then((data)=>{
      console.log(data) //data is an array of objects
      setPlaces(data?.filter((place)=> place.name && place.num_reviews > 0))
      setFilteredPlaces([])
      setLoading(false)
    }).catch((err)=>{
      console.log(err) //error handling
    })
    }
    
  },[type,bounds])

  console.log({places})
  console.log({filteredPlaces})
  return (
    <div className="App">
      <CssBaseline/>
      <Navbar setCoordinate={setCoordinate} />
      <Grid container spacing={3} style={{width:'100%'}} >
        <Grid item xs={12} md={4}  >
          <List places={filteredPlaces.length ? filteredPlaces : places} childClicked={childClicked} loading={loading} setType={setType} type={type} rating={rating} setRating={setRating} />
        </Grid>
        <Grid item xs={12} md={8}  >
          <Map
            setCoordinate={setCoordinate}
            setBounds={setBounds}
            coordinate={coordinate}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}

          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
