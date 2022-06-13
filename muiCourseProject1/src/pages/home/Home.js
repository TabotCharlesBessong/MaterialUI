
import React from 'react'
import Lottie from 'react-lottie'
import useStyles from './Styles.js'
import animationData from '../../animations/landinganimation/data'
import customSoftwareIcon from '../../assets/Custom Software Icon.svg'
import MobileIcon from '../../assets/mobileIcon.svg'
import websiteIcon from '../../assets/websiteIcon.svg'
import {Grid, Button , Typography, useMediaQuery , Card ,CardContent , CardMedia,CardActionArea,CardActions} from '@material-ui/core'
import ButtonArrow from '../../components/ui/ButtonArrow'
import Theme from '../../components/ui/Theme.js'
import {Link} from 'react-router-dom'

const Home = (props) => {
  const classes = useStyles()
  // const theme = useStyles()
  const matcheSm = useMediaQuery(Theme.breakpoints.down('sm'))
  const matchesXS = useMediaQuery(Theme.breakpoints.down('xs'))
  const defaultOptions = {
    loop:true,
    autoplay:true,
    animationData,
    rendererSettings:{
      preserveAspectRatio:'xMidYMid slice'
    }
  }
  return (
    <>
      <Grid className={classes.mainContainer} container direction='column' >
        <Grid sm item>
        {/* Herro block */}
          <Grid container   justify='flex-end' alignItems='center' direction='row' >
            <Grid item className={classes.heroTextContainer} >
              <Typography variant='h2' align='center'>
                bringing west cast technology <br /> to the mid west
              </Typography>
              <Grid container justify='center' clasName={classes.buttonContainer} >
                <Grid item>
                  <Button className={classes.estimateButton} variant='contained'>free estimate</Button>
                </Grid>
                <Grid item>
                  <Button className={classes.learnButtonHero} variant='outlined'> <span style={{marginRight:10}} >learn more</span> 
                  <ButtonArrow width={15} height={15} fill={Theme.palette.common.blue} />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid sm item className={classes.animation}>
              <Lottie 
      options={defaultOptions} height={"100%"} width={"100%"}
    />
            </Grid>
          </Grid>
        </Grid>
        {/* hero block */}

        {/* custom software block */}
        <Grid item>
          <Grid justify={ matcheSm ? "center" : undefined } container direction='row' className={classes.serviceContainer} >
            <Grid item style={{marginLeft: matcheSm ? '0' : '2.2.2.2.2.2.2.2.5em', textAlign: matcheSm ? 'center' : undefined   }} >
              <Typography variant='h4' >custom software developemtn</Typography>
              <Typography className={classes.subtitle} variant='subtitle1'>
                save energy , save time , save money
              </Typography>
              <Typography variant='subtitle1'>
                complete digital solutions from investigation to <span className={classes.specialText} >celebration</span> 
              </Typography>
              <Button className={classes.learnButton} variant='outlined'> <span style={{marginRight:'10px'}} >learn more</span>
              <ButtonArrow width={10} height={10} fill={Theme.palette.common.blue}/>
               </Button>
            </Grid>
            <Grid item>
              <img className={classes.icon} src={customSoftwareIcon} alt={customSoftwareIcon} />
            </Grid>
          </Grid>
        </Grid>

        {/* custom software bloc */}
 
       {/* android developement block */}
        <Grid item>
          <Grid justify={ matcheSm ? "center" : 'flex-end' } container direction='row' className={classes.serviceContainer} >
            <Grid item style={{ textAlign: matcheSm ? 'center' : undefined   }} >
              <Typography variant='h4' >IOS & Andoid App developemtn</Typography>
              <Typography className={classes.subtitle} variant='subtitle1'>
                extend functionality , extend access , increase engagement
              </Typography>
              <Typography variant='subtitle1'>
                integrate your web experience or create stand alone {matcheSm ? <br /> : undefined}  with either mobile or web
              </Typography>
              <Button className={classes.learnButton} variant='outlined'> <span style={{marginRight:'10px'}} >learn more</span>
              <ButtonArrow width={10} height={10} fill={Theme.palette.common.blue}/>
               </Button>
            </Grid>
            <Grid item>
              <img style={{marginRight: matcheSm ? '0' : '2.2.2.2.2.2.2.2.5em'}} className={classes.icon} src={MobileIcon} alt={customSoftwareIcon} />
            </Grid>
          </Grid>
        </Grid>
        {/* android ios block */}

        {/* website developement block */}
        <Grid item>
          <Grid justify={ matcheSm ? "center" : undefined } container direction='row' className={classes.serviceContainer} >
            <Grid item style={{marginLeft: matcheSm ? '0' : '2.2.2.2.2.2.2.2.5em' ,  textAlign: matcheSm ? 'center' : undefined   }} >
              <Typography variant='h4' >website developmetn</Typography>
              <Typography className={classes.subtitle} variant='subtitle1'>
                reach more , diccover more and sell more
              </Typography>
              <Typography variant='subtitle1'>
                optimize for search engine built for speed
              </Typography>
              <Button className={classes.learnButton} variant='outlined'> <span style={{marginRight:'10px'}} >learn more</span>
              <ButtonArrow width={10} height={10} fill={Theme.palette.common.blue}/>
               </Button>
            </Grid>
            <Grid item>
              <img  className={classes.icon} src={websiteIcon} alt={customSoftwareIcon} />
            </Grid>
          </Grid>
        </Grid>
        {/* website block */}

        {/* revolution block */}
        <Grid item>
          
          <Grid container style={{height:'100em',marginTop:'12em'}}  alignItems='center' justifyContent='center' >
            <Card className={classes.revolutionCard} >
            <CardContent>
              <Grid style={{ textAlign:'center' }} container direction='column' justify='center' alignItems='center' >
                <Grid item>
                  <Typography variant='h3' gutterBottom >
                    The revolution
                  </Typography>
                </Grid>
                <Grid item  >
                  <Typography variant='subtitle1'>
                    visionary insight coupled with cutting age technology is a recipe for  revolution 
                  </Typography>
                  <Button className={classes.learnButtonHero} variant='outlined'> <span style={{marginRight:10}} >learn more</span> 
                  <ButtonArrow width={15} height={15} fill={Theme.palette.common.blue} />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground}  />

        
          </Grid>
        </Grid>
        {/* revolution block */}
      <Grid item>
        {/*-----Information Block-----*/}
        <Grid
          container
          style={{ height: "80em" }}
          alignItems="center"
          direction="row"
          className={classes.infoBackground}
        >
          <Grid
            item
            container
            style={{
              textAlign: matchesXS ? "center" : "inherit"
            }}
            direction={matchesXS ? "column" : "row"}
          >
            <Grid
              item
              sm
              style={{ marginLeft: matchesXS ? 0 : matcheSm ? "2em" : "5em" }}
            >
              <Grid
                container
                style={{ marginBottom: matchesXS ? "10em" : 0 }}
                direction="column"
              >
                <Typography variant="h2" style={{ color: "white" }}>
                  About Us
                </Typography>
                <Typography variant="subtitle2">Let's get personal.</Typography>
                <Grid item>
                  <Button
                    component={Link}
                    to="/about"
                    variant="outlined"
                    style={{ color: "white", borderColor: "white" }}
                    className={classes.learnButton}
                    onClick={() => props.setValue(3)}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow width={10} height={10} fill="white" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sm
              style={{
                marginRight: matchesXS ? 0 : matcheSm ? "2em" : "5em",
                textAlign: matchesXS ? "center" : "right"
              }}
            >
              <Grid container direction="column">
                <Typography variant="h2" style={{ color: "white" }}>
                  Contact Us
                </Typography>
                <Typography variant="subtitle2">
                  Say hello!{" "}
                  <span role="img" aria-label="waving hand">
                    👋🏻
                  </span>
                </Typography>
                <Grid item>
                  <Button
                    component={Link}
                    to="/contact"
                    variant="outlined"
                    style={{ color: "white", borderColor: "white" }}
                    className={classes.learnButton}
                    onClick={() => props.setValue(4)}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow width={10} height={10} fill="white" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </Grid>
      
    </>
  )
}

export default Home