

import React from 'react'
import { makeStyles} from "@material-ui/core"

const useStyles = makeStyles( {
  sidebar:{
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    left: '0px',
    width: '20%',
    minWidth: '20rem',
    height: '100%',
    background: '#1ba785',
  }
}) 

const Sidebar = () => {
  const classes = useStyles()
  console.log(classes);
  return (
    <div className={classes.sidebar}>
      <h2>Sidebar</h2>
    </div>
  )
}

export default Sidebar
