import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
	lighten,
	makeStyles,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TablePagination,
	TableSortLabel,
	Toolbar,
	Typography,
	Paper,
	Checkbox,
	IconButton,
	Tooltip,
	FormControlLabel,
	Switch,
	Snackbar,
	Button,
	Menu,
	MenuItem,
	TextField
} from "@material-ui/core";
import { Delete, FilterList } from "@material-ui/icons";

function descendingComparator(a, b, orderBy) {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}

function getComparator(order, orderBy) {
	return order === "desc"
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
	const stabilizedThis = array.map((el, index) => [el, index]);
	stabilizedThis.sort((a, b) => {
		const order = comparator(a[0], b[0]);
		if (order !== 0) return order;
		return a[1] - b[1];
	});
	return stabilizedThis.map((el) => el[0]);
}

const headCells = [
	{
		id: "name",
		label: "Name",
	},
	{ id: "date", label: "Date" },
	{ id: "service", label: "Service" },
	{ id: "features", label: "Features" },
	{ id: "complexity", label: "Complexity" },
	{ id: "platforms", label: "Platforms" },
	{ id: "users", label: "Users" },
	{ id: "total", label: "Total" },
];

function EnhancedTableHead(props) {
	const {
		classes,
		onSelectAllClick,
		order,
		orderBy,
		numSelected,
		rowCount,
		onRequestSort,
	} = props;
	const createSortHandler = (property) => (event) => {
		onRequestSort(event, property);
	};

	return (
		<TableHead>
			<TableRow>
				<TableCell padding="checkbox">
					<Checkbox
						indeterminate={numSelected > 0 && numSelected < rowCount}
						checked={rowCount > 0 && numSelected === rowCount}
						onChange={onSelectAllClick}
						inputProps={{ "aria-label": "select all desserts" }}
					/>
				</TableCell>
				{headCells.map((headCell) => (
					<TableCell
						key={headCell.id}
						align="center"
						sortDirection={orderBy === headCell.id ? order : false}
					>
						<TableSortLabel
							hideSortIcon
							active={orderBy === headCell.id}
							direction={orderBy === headCell.id ? order : "asc"}
							onClick={createSortHandler(headCell.id)}
						>
							{headCell.label}
							{orderBy === headCell.id ? (
								<span className={classes.visuallyHidden}>
									{order === "desc" ? "sorted descending" : "sorted ascending"}
								</span>
							) : (
								<Typography>{null}</Typography>
							)}
						</TableSortLabel>
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
}

EnhancedTableHead.propTypes = {
	classes: PropTypes.object.isRequired,
	numSelected: PropTypes.number.isRequired,
	onRequestSort: PropTypes.func.isRequired,
	onSelectAllClick: PropTypes.func.isRequired,
	order: PropTypes.oneOf(["asc", "desc"]).isRequired,
	orderBy: PropTypes.string.isRequired,
	rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
	root: {
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(1),
	},
	highlight:
		theme.palette.type === "light"
			? {
					color: theme.palette.secondary.main,
					backgroundColor: lighten(theme.palette.secondary.light, 0.85),
			  }
			: {
					color: theme.palette.text.primary,
					backgroundColor: theme.palette.secondary.dark,
			  },
	title: {
		flex: "1 1 100%",
	},
	menu:{
		'&:hover':{
			backgroundColor:'#fff'
		},
		'&.Mui-focusVisible':{
			backgroundColor:'#fff'
		}
	}
}));

const EnhancedTableToolbar = (props) => {
	const classes = useToolbarStyles();
	const { numSelected } = props;
	const [undo, setUndo] = useState([]);
	const [alert, setAlert] = useState({
		open: false,
		backgroundColor: "#FF3232",
		message: "row deleted",
	});
	const [anchorEl, setAnchorEl] = useState(null)
	const [openMenu, setOpenMenu] = useState(false)

	const handleDelete = () => {
		const newRows = [...props.rows];
		const selectedRows = newRows.filter((row) =>
			props.selected.includes(row.name)
		);
		selectedRows.map((row) => (row.search = false));
		// console.log(newRows);
		props.setRows(newRows);
		setUndo(selectedRows);
		props.setSelected([]);
		setAlert({ ...alert, open: true });
	};

	const handleClick = (e) => {
		setAnchorEl(e.target.value)
		setOpenMenu(true)
	}

	const handleClose = (e) => {
    setAnchorEl(null)
		setOpenMenu(false) 
	}

	const handleUndo = () => {
		// console.log(undo);
		setAlert({ ...alert, open: false });
		const newRows = [...props.rows];
		const redo = [...undo];
		redo.map((row) => (row.search = true));
		Array.prototype.push.apply(newRows, ...redo);
		props.setRows(newRows);
	};

	return (
		<Toolbar
			className={clsx(classes.root, {
				[classes.highlight]: numSelected > 0,
			})}
		>
			{numSelected > 0 ? (
				<Typography
					className={classes.title}
					color="inherit"
					variant="subtitle1"
					component="div"
				>
					{numSelected} selected
				</Typography>
			) : (
				<Typography
					className={classes.title}
					color="inherit"
					variant="subtitle1"
				>
					{null}
				</Typography>
			)}

			{numSelected > 0 ? (
				<Tooltip title="Delete">
					<IconButton onClick={handleDelete} aria-label="delete">
						<Delete style={{ fontSize: 30 }} color="primary" />
					</IconButton>
				</Tooltip>
			) : (
				<Tooltip title="Filter list">
					<IconButton onClick={handleClick} aria-label="filter list">
						<FilterList style={{ fontSize: 50 }} color="secondary" />
					</IconButton>
				</Tooltip>
			)}
			<Snackbar
				open={alert.open}
				ContentProps={{
					style: {
						backgroundColor: alert.backgroundColor,
					},
				}}
				anchorOrigin={{ vertical: "top", horizontal: "center" }}
				message={alert.message}
				// autoHideDuration={4000}
				onClose={(event, reason) => {
					if (reason === "clickaway") {
						setAlert({ ...alert, open: false });
						const newRows = [...props.rows];
						const names = [...undo.map((row) => row.name)];
						props.setRows(newRows.filter((row) => !names.includes(row.name)));
					}
				}}
				action={
					<Button onClick={handleUndo} style={{ color: "#fff" }}>
						undo
					</Button>
				}
			/>

			<Menu
				id="simple-menu"
				anchorEl={anchorEl}
				open={openMenu}
				onClick={handleClose}
				style={{ zIndex: 1302 }}
				elevation={0}
				keepMounted
			>
				<MenuItem classes={{root:classes.menu}} >
					<TextField/>
				</MenuItem>
			</Menu>
		</Toolbar>
	);
};

EnhancedTableToolbar.propTypes = {
	numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
	},
	paper: {
		width: "100%",
		marginBottom: theme.spacing(2),
	},
	table: {
		minWidth: 750,
	},
	visuallyHidden: {
		border: 0,
		clip: "rect(0 0 0 0)",
		height: 1,
		margin: -1,
		overflow: "hidden",
		padding: 0,
		position: "absolute",
		top: 20,
		width: 1,
	},
}));



const EnhancedTable = ({ rows, setRows, page, setPage,androidChecked,websiteChecked,iOSChecked,softwareChecked }) => {
	const classes = useStyles();
	const [order, setOrder] = React.useState("asc");
	const [orderBy, setOrderBy] = React.useState("name");
	const [selected, setSelected] = React.useState([]);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);

	const handleRequestSort = (event, property) => {
		const isAsc = orderBy === property && order === "asc";
		setOrder(isAsc ? "desc" : "asc");
		setOrderBy(property);
	};

	const handleSelectAllClick = (event) => {
		if (event.target.checked) {
			const newSelecteds = rows.map((n) => n.name);
			setSelected(newSelecteds);
			return;
		}
		setSelected([]);
	};

	const handleClick = (event, name) => {
		const selectedIndex = selected.indexOf(name);
		let newSelected = [];

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, name);
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(
				selected.slice(0, selectedIndex),
				selected.slice(selectedIndex + 1)
			);
		}

		setSelected(newSelected);
	};

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const switchFilters = () => {
		const websites = rows.filter(row => websiteChecked ? row.service === 'Website' : null)
		const software = rows.filter(row => softwareChecked ? row.service === 'Custom Software' : null)
		const android = rows.filter(row => androidChecked ? row.platforms.includes('Android') : null)
		const iOS = rows.filter(row => iOSChecked ? row.platforms.includes('iOS') : null)
		// const websites = rows.filter((row) =>
		// 	websiteChecked ? row.platforms === "Android" : null
		// );
		// console.log([websites,software,android,iOS])
		if(!websiteChecked && !iOSChecked && !softwareChecked && !androidChecked){
			return rows
		}else{
			let newRows = websites.concat(iOS.filter(item => websites.indexOf(item) < 0))
			let newRows2 = newRows.concat(android.filter(item => newRows.indexOf(item) < 0))
			let newRows3 = newRows2.concat(software.filter(item => newRows2.indexOf(item) < 0))

			// console.log(newRows3)
			return newRows3
		}
	}

	const isSelected = (name) => selected.indexOf(name) !== -1;

	return (
		<div className={classes.root}>
			<Paper elevation={0} className={classes.paper}>
				<EnhancedTableToolbar
					rows={rows}
					setRows={setRows}
					selected={selected}
					setSelected={setSelected}
					numSelected={selected.length}
				/>
				<TableContainer>
					<Table
						className={classes.table}
						aria-labelledby="tableTitle"
						size="medium"
						aria-label="enhanced table"
					>
						<EnhancedTableHead
							classes={classes}
							numSelected={selected.length}
							order={order}
							orderBy={orderBy}
							onSelectAllClick={handleSelectAllClick}
							onRequestSort={handleRequestSort}
							rowCount={rows.length}
						/>
						<TableBody>
							{stableSort(
								switchFilters().filter((row) => row.search),
								getComparator(order, orderBy)
							)
								.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								.map((row, index) => {
									const isItemSelected = isSelected(row.name);
									const labelId = `enhanced-table-checkbox-${index}`;

									return (
										<TableRow
											hover
											onClick={(event) => handleClick(event, row.name)}
											role="checkbox"
											aria-checked={isItemSelected}
											tabIndex={-1}
											key={row.name}
											selected={isItemSelected}
										>
											<TableCell padding="checkbox">
												<Checkbox
													checked={isItemSelected}
													inputProps={{ "aria-labelledby": labelId }}
												/>
											</TableCell>
											<TableCell
												component="th"
												id={labelId}
												scope="row"
												padding="none"
												align="center"
											>
												{row.name}
											</TableCell>
											<TableCell align="center">{row.date}</TableCell>
											<TableCell align="center">{row.service}</TableCell>
											<TableCell style={{ maxWidth: "5em" }} align="center">
												{row.features}
											</TableCell>
											<TableCell align="center">{row.complexity}</TableCell>
											<TableCell align="center">{row.platforms}</TableCell>
											<TableCell align="center">{row.users}</TableCell>
											<TableCell align="center">${row.total}</TableCell>
										</TableRow>
									);
								})}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[5, 10, 25]}
					component="div"
					count={rows.filter((row) => row.search).length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			</Paper>
		</div>
	);
};

export default EnhancedTable;
