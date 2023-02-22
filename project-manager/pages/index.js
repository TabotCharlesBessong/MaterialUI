import React, { useState } from "react";
import {
	Grid,
	Typography,
	useTheme,
	makeStyles,
	TextField,
	InputAdornment,
	Switch,
	FormGroup,
	FormControlLabel,
	Table,
	TableBody,
	TableHead,
	TableContainer,
	TableRow,
	TableCell,
	Paper,
	Dialog,
	DialogContent,
	RadioGroup,
	Radio,
} from "@material-ui/core";
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { Add, FilterList } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
	service: {
		fontWeight: 300,
	},
	users:{
		marginRight:0
	}
}));

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

export default function ProjectManager() {
	const classes = useStyles();
	const theme = useTheme;
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
	const [websiteChecked, setWebsiteChecked] = useState(false);
	const [iOSChecked, setIOSChecked] = useState(false);
	const [androidChecked, setAndroidChecked] = useState(false);
	const [softwareChecked, setSoftwareChecked] = useState(false);
	const [dialogOpen, setDialogOpen] = useState(false);
	const [name, setName] = useState("");
	const [date, setDate] = useState(new Date());
	const [total, setTotal] = useState(12000);
	const [service, setService] = useState("");
	const [complexity, setComplexity] = useState("");
	const [users, setUsers] = useState("");

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
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
									<Add
										onClick={() => setDialogOpen(true)}
										color="primary"
										style={{ fontSize: 30, cursor: "pointer" }}
									/>
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

				<Grid
					item
					container
					style={{ marginTop: "5em" }}
					justifyContent="flex-end"
				>
					<Grid item style={{ marginRight: 50 }}>
						<FilterList
							style={{ fontSize: "5em", cursor: "pointer" }}
							color="secondary"
						/>
					</Grid>
				</Grid>
				<Grid item style={{ marginTop: "5em", marginBottom: "15em" }}>
					<TableContainer component={Paper} elevation={0}>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell align="center">Name</TableCell>
									<TableCell align="center">Date</TableCell>
									<TableCell align="center">Service</TableCell>
									<TableCell align="center">Features</TableCell>
									<TableCell align="center">Complexity</TableCell>
									<TableCell align="center">Platforms</TableCell>
									<TableCell align="center">Users</TableCell>
									<TableCell align="center">Total</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{rows.map((row, index) => (
									<TableRow key={index}>
										<TableCell align="center">{row.name}</TableCell>
										<TableCell align="center">{row.date}</TableCell>
										<TableCell align="center">{row.service}</TableCell>
										<TableCell align="center" style={{ maxWidth: "5em" }}>
											{row.features}
										</TableCell>
										<TableCell align="center">{row.complexity}</TableCell>
										<TableCell align="center">{row.platforms}</TableCell>
										<TableCell align="center">{row.users}</TableCell>
										<TableCell align="center">{row.total}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</Grid>

				<Dialog
					fullWidth
					maxWidth="md"
					open={dialogOpen}
					onClose={() => setDialogOpen(false)}
				>
					<Grid container justifyContent="center">
						<Grid item>
							<Typography variant="h1" gutterBottom>
								add a new project
							</Typography>
						</Grid>
					</Grid>

					<DialogContent>
						<Grid container justifyContent="space-between">
							<Grid item>
								<Grid item container direction="column" sm>
									<Grid item>
										<TextField
											label="name"
											fullWidth
											value={name}
											id="name"
											onChange={(e) => setName(e.target.value)}
										/>
									</Grid>
									<Grid
										item
										style={{ marginTop: "5em" }}
										container
										direction="column"
									>
										<Grid item>
											<Typography variant="h4">Service</Typography>
										</Grid>
										<Grid item>
											<RadioGroup
												aria-label="service"
												name="service"
												value={service}
												onChange={(e) => setService(e.target.value)}
											>
												<FormControlLabel
													classes={{ label: classes.service }}
													variant="Website"
													label="Website"
													control={<Radio />}
												/>
												<FormControlLabel
													classes={{ label: classes.service }}
													variant="Mobile App"
													label="Mobile App"
													control={<Radio />}
												/>
												<FormControlLabel
													classes={{ label: classes.service }}
													variant="Custom Software"
													label="Custom Software"
													control={<Radio />}
												/>
											</RadioGroup>
										</Grid>
									</Grid>
								</Grid>
							</Grid>

							<Grid item>
								<Grid
									item
									style={{ marginTop: 16 }}
									container
									direction="column"
									sm
									alignItems="center"
								>
									<Grid item>
										<KeyboardDatePicker
											format="MM/dd/yyyy"
											value={date}
											onChange={(newDate) => setDate(newDate)}
										/>
									</Grid>
									<Grid item>
										<Grid
											item
											style={{ marginTop: "5em" }}
											container
											direction="column"
										>
											<Grid item>
												<Typography variant="h4">Complexity</Typography>
											</Grid>
											<Grid item>
												<RadioGroup
													aria-label="complexity"
													name="complexity"
													value={complexity}
													onChange={(e) => setComplexity(e.target.value)}
												>
													<FormControlLabel
														classes={{ label: classes.service }}
														variant="Low"
														label="Low"
														control={<Radio />}
													/>
													<FormControlLabel
														classes={{ label: classes.service }}
														variant="Medium"
														label="Medium"
														control={<Radio />}
													/>
													<FormControlLabel
														classes={{ label: classes.service }}
														variant="High"
														label="High"
														control={<Radio />}
													/>
												</RadioGroup>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</Grid>

							<Grid item>
								<Grid
									item
									container
									direction="column"
									sm
									alignItems="flex-end"
								>
									<Grid item>
										<TextField
											label="total"
											inputProps={{
												startAdornment: (
													<InputAdornment position="start">$</InputAdornment>
												),
											}}
											value={total}
											id="total"
											onChange={(e) => setTotal(e.target.value)}
										/>
									</Grid>
									<Grid item>
										<Grid
											item
											style={{ marginTop: "5em" }}
											container
											direction="column"
										>
											<Grid item>
												<Typography variant="h4">Users</Typography>
											</Grid>
											<Grid item>
												<RadioGroup
													aria-label="users"
													name="users"
													value={users}
													onChange={(e) => setUsers(e.target.value)}
												>
													<FormControlLabel
														classes={{ label: classes.service,root:classes.users }}
														variant="0-10"
														label="0-10"
														control={<Radio />}
													/>
													<FormControlLabel
														classes={{ label: classes.service,root:classes.users }}
														variant="11-100"
														label="11-100"
														control={<Radio />}
													/>
													<FormControlLabel
														classes={{ label: classes.service,root:classes.users }}
														variant="101-1000"
														label="101-1000"
														control={<Radio />}
													/>
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
	);
}
