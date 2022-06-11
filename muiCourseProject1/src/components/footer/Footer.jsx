
import React from 'react'
import useStyles from './Styles.js'
import footerImg from '../../assets/Footer Adornment.svg'
import { Grid, Hidden } from '@material-ui/core'
import { Link } from 'react-router-dom'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'
const Footer = (props) => {
  const classes = useStyles()
  return (
    <footer className={classes.footer} >
      <Hidden smDown >
      <Grid container justify='center' className={classes.mainContainer} >
        <Grid item className={classes.gridItem} onClick={()=> props.setValue(0) }  >
          <Grid container direction='column' spacing={2} >
            <Grid component={Link} to='/' item className={classes.link} >
              home
            </Grid>
          </Grid>
        </Grid>

        <Grid item className={classes.gridItem}  >
          <Grid container direction='column' spacing={2} >
            <Grid component={Link} to='/services' item className={classes.link} onClick={()=> {props.setValue(1) ; props.setSelectedIndex(0) }} >
              services
            </Grid>
            <Grid component={Link} to='/customsoftware' item className={classes.link} onClick={()=> {props.setValue(1) ; props.setSelectedIndex(1) }} >
              custom software
            </Grid>
            <Grid component={Link} to='/mobileapps' item className={classes.link} onClick={()=> {props.setValue(1) ; props.setSelectedIndex(2) }} >
              mobile app development
            </Grid>
            <Grid component={Link} to='/websites' item className={classes.link} onClick={()=> {props.setValue(1) ; props.setSelectedIndex(3) }} >
               website development
            </Grid>
          </Grid>
        </Grid>

        <Grid item className={classes.gridItem}  >
          <Grid container direction='column' spacing={2} >
            <Grid component={Link} to='/revolution' item className={classes.link} onClick={()=> props.setValue(2) } >
              revolution
            </Grid>
            <Grid component={Link} to='/vision' item className={classes.link} >
              vision
            </Grid>
            <Grid component={Link} to='/technology' item className={classes.link} >
              technology
            </Grid>
            <Grid component={Link} to='/process' item className={classes.link} >
              process
            </Grid>
          </Grid>
        </Grid>

        <Grid item className={classes.gridItem}  >
          <Grid container direction='column' spacing={2} >
            <Grid component={Link} to='/about' item className={classes.link} onClick={()=> props.setValue(3) } >
              abous us
            </Grid>
            <Grid component={Link} to='/history' item className={classes.link} >
              history
            </Grid>
            <Grid component={Link} to='/team' item className={classes.link} >
              team
            </Grid>
          </Grid>
        </Grid>

        <Grid item className={classes.gridItem} onClick={()=> props.setValue(4) } >
          <Grid container direction='column' spacing={2} >
            <Grid component={Link} to='/about' item className={classes.link} >
              contact us
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </Hidden>
       <img className={classes.adornment} src={footerImg} alt={footerImg} />

       <Grid container className={classes.socialContainer} justify="flex-end" spacing={2}  >
        <Grid item  component={"a"} href={"https://www.facebook.com"} rel="noopener noreferrer" target="_blank" >
          <img className={classes.icon} src={facebook} alt={facebook} />
        </Grid>
        <Grid item component={"a"} href={"https://www.twitter.com"} rel="noopener noreferrer" target="_blank" >
          <img className={classes.icon} src={twitter} alt={twitter} />
        </Grid>
        <Grid item component={"a"} href={"https://www.instagram.com"} rel="noopener noreferrer" target="_blank" >
          <img className={classes.icon} src={instagram} alt={instagram} />
        </Grid>
       </Grid>
    </footer>
  )
}

export default Footer