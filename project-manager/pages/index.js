
import React from 'react'
import { Grid, Typography  } from '@material-ui/core'
import { makeStyles, useTheme } from "@material-ui/core/styles"; 

const useStyles = makeStyles(theme => ({
  
}) )

const ProjectManager = ()=>{
  const classes = useStyles()
  const theme = useTheme()

  return (
    <Grid container direction='column'>
      <Grid item>
        <Typography variant='h1'>
          Project Manager
        </Typography>
      </Grid>
    </Grid>
  )
}


export default ProjectManager