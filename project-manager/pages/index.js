
import React , {useState} from 'react'
import { Grid, Typography  , TextField , InputAdornment  , Switch , FormGroup , FormControlLabel , Table , TableBody , TableCell ,  TableHead , TableContainer , TableRow , Paper  , Dialog , DialogContent , RadioGroup , Radio} from '@material-ui/core'
import { makeStyles, useTheme } from "@material-ui/core/styles"; 

import {MuiPickersUtilsProvider , KeyboardDatePicker } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

import {Add , FilterList } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  service:{
    fontWeight:300
  },
  user:{
    marginRight:0
  }
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

  const [dialogOPen,setDialogOpen] = useState(false)
  const [name,setName] = useState('')
  const [date,setDate] = useState(new Date())
  const [total,setTotal] = useState('')
  const [services,setServices] = useState('')
  const [complixity,setComplixity] = useState('')
  const [users,setUsers] = useState('')

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} >

    <Grid container direction='column'>
      <Grid item style={{marginTop:'2em',marginLeft:'5em'}} >
        <Typography variant='h1'>
          Project Manager
        </Typography>
      </Grid>
      <Grid item>
        <TextField placeholder="search project detail or create a new entry" style={{width:'35em'  , marginLeft:'5em'}}  InputProps={{endAdornment: <InputAdornment style={{fontSize:30}} position='end' > <Add style={{cursor:'pointer'}} onClick={()=> setDialogOpen(true) } color='primary' /> </InputAdornment> }} /> 
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

      <Dialog fullWidth maxWidth='md' open={dialogOPen} onClose={()=> setDialogOpen(false) }>
        <Grid container justify='center'>
          <Grid item>
            <Typography variant='h1' gutterBottom>
              add a new Project
            </Typography>
          </Grid>
        </Grid>
        <DialogContent >
          
          <Grid container justify='space-between' >
            <Grid item>
            <Grid item container direction='column' sm>
              <Grid item>
                <TextField fullWidth label='Name' id='name' value={name} onChnage={()=> setName(e.target.value) } >

                </TextField>
              </Grid>
              <Grid item container style={{marginTop:'5em'}} direction='column' >
                <Grid item>
                  <Typography variant='h4' >
                    Services
                  </Typography>
                </Grid>
                <Grid item>
                  <RadioGroup aria-label='Services' name='services' value={services} onChange={()=> setServices(e.target.value) }  >
                   <FormControlLabel classes={{label:classes.service}} value='website' label='Website' control={<Radio/>}/>

                   <FormControlLabel classes={{label:classes.service}} value='Mobile App' label='Mobile App' control={<Radio/>}/>

                   <FormControlLabel classes={{label:classes.service}} value='Custom Software' label='Custom Software' control={<Radio/>}/>
                  </RadioGroup>
                </Grid>
              </Grid>
            </Grid>
            </Grid>
            
            <Grid item>
            <Grid item alignItems='center' container direction='column' sm>
              <Grid item style={{marginTop:16}} >

                <KeyboardDatePicker   value=  {date} onChange = {()=> setDate(new Date()) }    />
              </Grid>
              <Grid item>
              <Grid item container style={{marginTop:'5em'}} direction='column' >
                <Grid item>
                  <Typography variant='h4' >
                    Complixity
                  </Typography>
                </Grid>
                <Grid item>
                  <RadioGroup aria-label='Complixity' name='complixity' value={complixity} onChange={()=> setComplixity(e.target.value) }  >
                   <FormControlLabel classes={{label:classes.service}} value='Low' label='Low' control={<Radio/>}/>

                   <FormControlLabel classes={{label:classes.service}} value='Medium' label='Medium' control={<Radio/>}/>

                   <FormControlLabel classes={{label:classes.service}} value='Hign' label='Hign' control={<Radio/>}/>
                  </RadioGroup>
                </Grid>
              </Grid>
              </Grid>
            </Grid>
            </Grid>
            
            <Grid item>
            <Grid item alignItems='flex-end' container direction='column' sm>
              <Grid item>
                <TextField inputProps={{startAdornment : <InputAdornment position='start' >$</InputAdornment> }} label='Total' id='total' value={total} onChnage={()=> setTotal(e.target.value) } >

                </TextField>
              </Grid>
              <Grid item>

              
              <Grid item container style={{marginTop:'5em'}} direction='column' >
                <Grid item>
                  <Typography variant='h4' >
                    Users
                  </Typography>
                </Grid> 
                <Grid item>
                  <RadioGroup aria-label='Users' name='users' value={services} onChange={()=> setUsers(e.target.value) }  >
                   <FormControlLabel classes={{label:classes.service , root:classes.users}} value='0-10' label='0-10' control={<Radio/>}/>

                   <FormControlLabel classes={{label:classes.service , root:classes.users}} value='10-100' label='10-100' control={<Radio/>}/>

                   <FormControlLabel classes={{label:classes.service , root:classes.users}} value='100+' label='100+' control={<Radio/>}/>
                  </RadioGroup>
                </Grid>
              </Grid>
              </Grid>
            </Grid>
            </Grid>
            
          </Grid>
        </DialogContent>
      </Dialog>
    </Grid>
    </MuiPickersUtilsProvider>

  )
}


export default ProjectManager