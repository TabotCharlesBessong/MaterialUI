
import React , {useState} from 'react'
import { Grid, Typography  , TextField , InputAdornment  , Switch , FormGroup , FormControlLabel} from '@material-ui/core'
import { makeStyles, useTheme } from "@material-ui/core/styles"; 
import {Add} from '@material-ui/icons'

const useStyles = makeStyles(theme => ({

}) )

const ProjectManager = ()=>{
  const classes = useStyles()
  const theme = useTheme()
  const [website,setWebsite] = useState(false)
  const [iOS,setIOS] = useState(false)
  const [android,setAndroid] = useState(false)
  const [software,setSoftware] = useState(false)

  return (
    <Grid container direction='column'>
      <Grid item style={{marginTop:'2em',marginLeft:'5em'}} >
        <Typography variant='h1'>
          Project Manager
        </Typography>
      </Grid>
      <Grid item>
        <TextField placeholder="search project detail or create a new entry" style={{width:'35em'  , marginLeft:'5em'}}  InputProps={{endAdornment: <InputAdornment position='end' > <Add color='primary' /> </InputAdornment> }} /> 
      </Grid>

      <Grid item style={{marginTop:"2em"}} >
        <FormGroup style={{marginLeft:'5em'}}  row >
          <FormControlLabel style={{marginRight:"5em"}} control={<Switch checked={website} color='primary' onClick={()=> setWebsite(!website) }  />} label='Website' labelPlacement='start' />

          <FormControlLabel style={{marginRight:"5em"}} control={<Switch checked={iOS} color='primary' onClick={()=> setIOS(!iOS) }  />} label='iOS' labelPlacement='start' />

          <FormControlLabel style={{marginRight:"5em"}} control={<Switch checked={android} color='primary' onClick={()=> setAndroid(!android) }  />} label='Android' labelPlacement='start' />

          <FormControlLabel control={<Switch checked={software} color='primary' onClick={()=> setSoftware(!software) }  />} label='Software' labelPlacement='start' />
        </FormGroup>
      </Grid>
    </Grid>
  )
}


export default ProjectManager