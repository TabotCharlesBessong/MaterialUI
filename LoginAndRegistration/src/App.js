import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import { makeStyles } from '@material-ui/styles';
import Header from './components/Header';
import PageHeader from './components/PageHeader';
import { createTheme, CssBaseline } from '@material-ui/core';
import PeopleOutlinedTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone"
import SearchIcon from "@material-ui/icons/Search"


const theme = createTheme({
  // palette:'#ab1875',
  // light:'#fff',
  palette:{
    primary:{
      main:'#1ba785',
      light:'#fff'
    },
    secondary:{
      main:'#282c34',
      light:'ccc',
    },
    background:{
      default:'f4f5fd',
    }
  }
})

const useStyles = makeStyles({
  app:{
    // padding:'32rem',
    width:'100%',
    paddingLeft:'32rem',
    display:'grid',
  }
})

function App() {
  const classes = useStyles()
  return (
    <>
    
      <Sidebar/>
      <div className={classes.app}>
        <Header/>
        <PageHeader
          title='page heeadr'
          subtitle='page description'
          Icon = {<PeopleOutlinedTwoToneIcon/>}
          // Icon = {<SearchIcon/>}
        />
      </div>
      <CssBaseline/>
    </>
  );
}

export default App;
