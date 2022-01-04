import React from 'react'
import { Container, makeStyles } from '@material-ui/core'


const useStyles  = makeStyles((theme)=>({
  container:{
    paddingTop:'2rem',
  },
})) 

const Feed = () => {
  const classes = useStyles()
  return (
    <div>
      <Container className={classes.container}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est neque, illo harum porro earum debitis iusto 
      </Container>
      {/* <h1> 
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eius quam, dolorum velit maiores molestias asperiores consequatur aliquam iure, sit nisi porro officia inventore tempora alias, laborum nobis totam ipsam? *
       </h1> */}

    </div>
  )
}

export default Feed
