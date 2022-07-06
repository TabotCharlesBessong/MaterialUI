
import React from 'react'
import useStyles from './Styles.js'

const Details = ({place}) => {
  const classes = useStyles()
  return (
    <h1>
      {place.name}
    </h1> 
  )
}

export default Details