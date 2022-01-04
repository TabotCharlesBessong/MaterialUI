import React from 'react'
import { Container, makeStyles } from '@material-ui/core'
import Post from './Post'


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
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </Container>

    </div>
  )
}

export default Feed
