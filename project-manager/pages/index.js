
import React,{useState} from 'react'
import {Grid,Typography,useTheme,makeStyles,TextField,InputAdornment,Switch,FormGroup,FormControlLabel,Table,TableBody,TableHead,TableContainer,TableRow,TableCell,Paper} from '@material-ui/core'
import {Add,FilterList} from '@material-ui/icons'
// import createData from '../utility/createData'

const useStyles = makeStyles(theme => ({

}))

const createData = (
	name,
	date,
	service,
	features,
	complexity,
	platforms,
	users,
	total
) => {
	return {
		name,
		service,
		date,
		features,
		complexity,
		platforms,
		users,
		total,
	};
};

export default function ProjectManager(){
  const classes = useStyles()
  const theme = useTheme
  const [rows, setRows] = useState([
		createData(
			"Charles",
			"26-09-2002",
			"Website",
			"E-Commerce",
			"N/A",
			"Android",
			"23",
			"$342"
		),
		createData(
			"Charles",
			"26-09-2002",
			"Website",
			"E-Commerce",
			"N/A",
			"Android",
			"23",
			"$342"
		),
		createData(
			"Charles",
			"26-09-2002",
			"Website",
			"E-Commerce",
			"N/A",
			"Android",
			"23",
			"$342"
		),
		createData(
			"Charles",
			"26-09-2002",
			"Website",
			"E-Commerce",
			"N/A",
			"Android",
			"23",
			"$342"
		),
		createData(
			"Charles",
			"26-09-2002",
			"Website",
			"E-Commerce",
			"N/A",
			"Android",
			"23",
			"$342"
		),
	]);
  const [websiteChecked,setWebsiteChecked] = useState(false)
  const [iOSChecked,setIOSChecked] = useState(false)
  const [androidChecked,setAndroidChecked] = useState(false)
  const [softwareChecked, setSoftwareChecked] = useState(false);

  return (
		<Grid container direction="column">
			<Grid item style={{ marginTop: "2em", marginLeft: "5em" }}>
				<Typography variant="h1">Project Manager</Typography>
			</Grid>
			<Grid item>
				<TextField
					placeholder="search project detail or create a new entry"
					style={{ width: "35em", marginLeft: "5em" }}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<Add color="primary" style={{fontSize:30}} />
							</InputAdornment>
						),
					}}
				/>
			</Grid>

			<Grid item style={{ marginLeft: "5em", marginTop: "2em" }}>
				<FormGroup row>
					<FormControlLabel
						style={{ marginRight: "5em" }}
						control={
							<Switch
								checked={websiteChecked}
								color="primary"
								onChange={() => setWebsiteChecked(!websiteChecked)}
							/>
						}
						label="Website"
						labelPlacement="start"
					/>

					<FormControlLabel
						style={{ marginRight: "5em" }}
						control={
							<Switch
								checked={iOSChecked}
								color="primary"
								onChange={() => setIOSChecked(!iOSChecked)}
							/>
						}
						label="iOS"
						labelPlacement="start"
					/>

					<FormControlLabel
						style={{ marginRight: "5em" }}
						control={
							<Switch
								checked={androidChecked}
								color="primary"
								onChange={() => setAndroidChecked(!androidChecked)}
							/>
						}
						label="Android"
						labelPlacement="start"
					/>

					<FormControlLabel
						style={{ marginRight: "5em" }}
						control={
							<Switch
								checked={softwareChecked}
								color="primary"
								onChange={() => setSoftwareChecked(!softwareChecked)}
							/>
						}
						label="Software"
						labelPlacement="start"
					/>
				</FormGroup>
			</Grid>

      <Grid item container style={{marginTop:'5em'}} justify='flex-end' >
        <Grid item style={{marginRight:50}} >
          <FilterList style={{fontSize:'5em',cursor:'pointer'}} color='secondary' />
        </Grid>
      </Grid>
			<Grid item  style={{marginTop:'5em',marginBottom:'15em'}} >
				<TableContainer component={Paper} elevation={0} >
					<Table>
						<TableHead>
							<TableRow>
								<TableCell align='center' >Name</TableCell>
								<TableCell align='center' >Date</TableCell>
								<TableCell align='center' >Service</TableCell>
								<TableCell align='center' >Features</TableCell>
								<TableCell align='center' >Complexity</TableCell>
								<TableCell align='center' >Platforms</TableCell>
								<TableCell align='center' >Users</TableCell>
								<TableCell align='center' >Total</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row, index) => (
								<TableRow key={index}>
									<TableCell align='center' >{row.name}</TableCell>
									<TableCell align='center' >{row.date}</TableCell>
									<TableCell align='center' >{row.service}</TableCell>
									<TableCell align='center' style={{maxWidth:'5em'}} >{row.features}</TableCell>
									<TableCell align='center' >{row.complexity}</TableCell>
									<TableCell align='center' >{row.platforms}</TableCell>
									<TableCell align='center' >{row.users}</TableCell>
									<TableCell align='center' >{row.total}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Grid>
		</Grid>
	);
}