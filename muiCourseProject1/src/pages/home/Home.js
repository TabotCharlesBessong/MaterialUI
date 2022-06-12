
import React from 'react'
import Lottie from 'react-lottie'
import useStyles from './Styles.js'
import animationData from '../../animations/landinganimation/data'

const Home = () => {
  const classes = useStyles()
  const defaultOptions = {
    loop:true,
    autoplay:true,
    animationData,
    rendererSettings:{
      preserveAspectRatio:'xMidYMid slice'
    }
  }
  return (
    <Lottie
      options={defaultOptions} height={"100%"} width={"100%"}
    />

    
  )
}

export default Home