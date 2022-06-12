
import React from 'react'
import Lottie from 'react-lottie'
import useStyles from './Styles.js'
import animationData from '../../animations/landinganimation/data'
import {Grid, Button , Typography} from '@material-ui/core'
import ButtonArrow from '../../components/ui/ButtonArrow'
import Theme from '../../components/ui/Theme.js'

const Home = () => {
  const classes = useStyles()
  // const theme = useStyles()
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
      </Grid>
      
    </>
  )
}

export default Home