
import React from 'react'
import GoogleMapReact  from 'google-map-react'
import { Rating } from '@material-ui/lab'
import useStyles from './Styles.js'
import { useMediaQuery } from '@material-ui/core'
import {LocationOutlined} from '@material-ui/icons'

const Map = () => {
  const classes = useStyles()
  const isMobile = useMediaQuery('(min-width:600px)')
  const coordinate = {lat:0,lng:0}
  return (
    <div className={classes.mapContainer} >
      <GoogleMapReact
      bootstrapURLKeys = {{key:''}}
      defaultCenter={coordinate}
      center = {coordinate}
      defaultZoom = {16}
      margin={[50,50,50,50]}
      options= {''}
      onChnage= {''}
      onChildClick = {''}
      >

      </GoogleMapReact>
    </div>
  )
}

export default Map