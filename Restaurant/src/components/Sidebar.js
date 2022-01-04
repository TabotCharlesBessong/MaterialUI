import React from 'react'

import { Container, makeStyles } from '@material-ui/core'


const useStyles  = makeStyles((theme)=>({
  container:{
    paddingTop:'2rem',
  }
}))
 
const Sidebar = () => {
  const classes = useStyles()
  return (
    <div>
       <Container className={classes.container}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sit voluptas fuga iure voluptates nisi doloribus totam ad accusamus. Veniam omnis optio laborum soluta sequi aperiam vel ////*nostrum. 
       </Container>
  
    </div>
  )
}

export default Sidebar
