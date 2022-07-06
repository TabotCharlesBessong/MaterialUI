
import React from 'react'
import GoogleMapReact  from 'google-map-react'
import { Rating } from '@material-ui/lab'
import useStyles from './Styles.js'
import { useMediaQuery } from '@material-ui/core'
import {LocationOnOutlined} from '@material-ui/icons'

const Map = ({setCoordinate,setBounds,coordinate}) => {
  const classes = useStyles()
  const isMobile = useMediaQuery('(min-width:600px)')
  return (
    <div className={classes.mapContainer} >
      <GoogleMapReact
      bootstrapURLKeys = {{key:'AIzaSyD8TzymNFuAXo8WSTJxBgIQ-np_5VfEJOg'}}
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
      onChildClick = {''}
      >

      </GoogleMapReact>
    </div>
  )
}

export default Map