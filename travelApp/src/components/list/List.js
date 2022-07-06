
import React,{useState,useEffect,createRef} from 'react'
import { CircularProgress , Grid , Typography , InputLabel , MenuItem , FormControl , Select } from '@material-ui/core'

import useStyles from './Styles.js'
import Details from '../placeDetails/Details'



const List = ({places,childClicked,loading}) => {
  const classes = useStyles()
  const [type,setType] = useState('restaurants')
  const [rating,setRating] = useState('')
  console.log({childClicked})   // consoleloging in this way  , gives you more info 

  const [lRef,setLRef] = useState([])

  useEffect(()=>{
    const refs = Array(places?.length).fill().map((_,i)=>lRef[i] || createRef())
    setLRef(refs)
    // console.log(refs)
  },[places])
  return (
    <div className={classes.container}>
      <Typography variant='h4'>
        Restaurant , Hotesl and Attractions around you
      </Typography>

      {
        loading ? (
          <div className={classes.loading}>
            <CircularProgress size='6rem' />
          </div>
        ) : (
      <>
      <FormControl className={classes.formControl}>
        <InputLabel >Type</InputLabel>
        <Select value={type} onChange={(e)=>setType(e.target.value)} >
          <MenuItem value='restaurants'>Restaurants</MenuItem>
          <MenuItem value='hotels'>Hotels</MenuItem>
          <MenuItem value='attractions'>Attractions</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel >Rating</InputLabel>
        <Select value={rating} onChange={(e)=>setRating(e.target.value)} >
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list} >
        {places?.map((p,i)=>(
          <Grid  item xs={12}  key={i}>
            <Details place={p} selected={Number(childClicked) === i} refProp={lRef[i]} />
          </Grid>
        ))}
      </Grid>
      </>
      )
      }
    </div>
  )
}

export default List