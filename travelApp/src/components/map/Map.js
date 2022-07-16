
import React from 'react'
import GoogleMapReact  from 'google-map-react'
import { Rating } from '@material-ui/lab'
import useStyles from './Styles.js'
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import {LocationOnOutlined} from '@material-ui/icons'

const Map = ({setCoordinate,setBounds,coordinate,places,setChildClicked}) => {
  const classes = useStyles()
  // const isMobile = useMediaQuery('(min-width:600px)')
  const matches = useMediaQuery('(min-width:600px)')

  return (
    <div className={classes.mapContainer} >
      <GoogleMapReact
      bootstrapURLKeys = {{key:process.env.MAP_API_KEY}}
      defaultCenter={coordinate}
      center = {coordinate}
      defaultZoom = {16}
      margin={[50,50,50,50]}
      options= {''}
      onChange= {(e)=>{
        console.log(e)
        setCoordinate({lat:e.center.lat,lng:e.center.lng})
        setBounds({ne:e.marginBounds.ne,sw:e.marginBounds.sw})
      }}
      onChildClick = {(child)=>{
        setChildClicked(child)
      }}
      >
      {places?.map((place, i) => (
          <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {!matches
              ? <LocationOnOutlined color="primary" fontSize="large" />
              : (
                <Paper elevation={3} className={classes.paper}>
                  <Typography className={classes.typography} variant="subtitle2" gutterBottom> {place.name}</Typography>
                  <img
                    className={classes.pointer}
                    src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                  />
                  <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                </Paper>
              )}
          </div>
        ))}
      </GoogleMapReact>
    </div>
  )
}

export default Map