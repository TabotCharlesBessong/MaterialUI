
import React , {useState} from 'react'
import { Grid, Typography  , TextField , InputAdornment  , Switch , FormGroup , FormControlLabel , Table , TableBody , TableCell ,  TableHead , TableContainer , TableRow , Paper  } from '@material-ui/core'
import { makeStyles, useTheme } from "@material-ui/core/styles"; 

import {Add , FilterList } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({

}) )

const createData = (names,date,services,features,complexity,platforms,users,total) => {
  return {names,date , services , features , complexity , platforms , users , total}
}

const ProjectManager = ()=>{
  const classes = useStyles()
  const theme = useTheme()

  const [rows,setRows] = useState([createData("Charles Bessong","26/09/2002","Websites","logistiks","N/A","N/A","N/A","$1510"),
  createData('Nerus Zaumu','21/04/2001','UI/UX Design','Classic','N/A','N/A','N/A',''),
  createData('Balemba Junior','27/07/2000','Cyber Security','Hacking','N/A','N/A','N/A','1320'),
  createData("Charles Bessong","26/09/2002","Websites","logistiks","N/A","N/A","N/A","$1510"),
  createData('Nerus Zaumu','21/04/2001','UI/UX Design','Classic','N/A','N/A','N/A',''),
  createData('Balemba Junior','27/07/2000','Cyber Security','Hacking','N/A','N/A','N/A','1320')
])
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
        <TextField placeholder="search project detail or create a new entry" style={{width:'35em'  , marginLeft:'5em'}}  InputProps={{endAdornment: <InputAdornment style={{fontSize:30}} position='end' > <Add color='primary' /> </InputAdornment> }} /> 
      </Grid>

      <Grid item style={{marginTop:"2em"}} >
        <FormGroup style={{marginLeft:'5em'}}  row >
          <FormControlLabel style={{marginRight:"5em"}} control={<Switch checked={website} color='primary' onClick={()=> setWebsite(!website) }  />} label='Website' labelPlacement='start' />

          <FormControlLabel style={{marginRight:"5em"}} control={<Switch checked={iOS} color='primary' onClick={()=> setIOS(!iOS) }  />} label='iOS' labelPlacement='start' />

          <FormControlLabel style={{marginRight:"5em"}} control={<Switch checked={android} color='primary' onClick={()=> setAndroid(!android) }  />} label='Android' labelPlacement='start' />

          <FormControlLabel control={<Switch checked={software} color='primary' onClick={()=> setSoftware(!software) }  />} label='Software' labelPlacement='start' />
        </FormGroup>
      </Grid>

      {/* table  */}
      <Grid item container style={{marginTop:"5em"}} justify="flex-end" >
        <Grid item style={{marginRight:75}} >
          <FilterList color='secondary' style={{fontSize:50}} /> 
        </Grid>
      </Grid>
      <Grid item style={{marginBottom:"15em"}} >
        <TableContainer component={Paper} elevation={0} >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align='center' >
                  Name
                </TableCell>
                <TableCell align='center' >
                  Date
                </TableCell>
                <TableCell align='center' >
                  Services
                </TableCell>
                <TableCell align='center' >
                  Features
                </TableCell>
                <TableCell align='center' >
                  Complexity
                </TableCell>
                <TableCell align='center' >
                  Platforms
                </TableCell>
                <TableCell align='center' >
                  Users
                </TableCell>
                <TableCell align='center' >
                  Total
                </TableCell>
                
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map((row,index)=> (
                <TableRow key={index} >
                  <TableCell align='center' >{row.names}</TableCell>
                  <TableCell align='center' >{row.date}</TableCell>
                  <TableCell align='center' >{row.services}</TableCell>
                  <TableCell style={{maxWidth:'5em'}} align='center' >{row.features}</TableCell>
                  <TableCell align='center' >{row.complexity}</TableCell>
                  <TableCell align='center' >{row.platforms}</TableCell>
                  <TableCell align='center' >{row.users}</TableCell>
                  <TableCell align='center' >{row.total}</TableCell>
                </TableRow> 
              ) )}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  )
}


export default ProjectManager