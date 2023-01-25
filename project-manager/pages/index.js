
import React from 'react'
import {Grid,Typography,useTheme,useMediaQuery,makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme => ({

}))

export default function ProjectManager(){
  const classes = useStyles()
  const theme = useTheme

  return (
    <Grid container direction='column'>
      <Grid item>
        <Typography variant='h1'>Project Manager</Typography>
      </Grid>
    </Grid>
  )
}