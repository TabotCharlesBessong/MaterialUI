
import React from 'react'

import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, makeStyles, Typography } from '@material-ui/core'


const useStyles  = makeStyles((theme)=>({
  container:{
    paddingTop:'2rem',
  },
  media:{
    height:350,
    // width:'100%',
    [theme.breakpoints.up("sm")]:{
      height:'450px'
    }
  },
  text:{
    display:'flex',
    flexWrap:'wrap'
  },
  card:{
    marginBottom:theme.spacing(5)
  }
}))
 
const Post = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
       {/* <Container className={classes.container}> */}
{/*           */}
       {/* </Container> */}
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia className={classes.media} image='images/avulionAgents (7).jpg' title="My first Estate" />
          <CardContent>
            <Typography gutterButton  className={classes.text} variant='h6' component='h2'>
              My first investment 
            </Typography>
            <Typography className={classes.text} variant='body' component='div'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eligendi voluptatibus at, voluptatum quasi id ducimus earum sit enim adipisci et, reprehenderit reiciendis commodi labore minus accusamus sapiente molestiae sequi! 
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size='small' color='primary' > Share</Button>
          <Button size='small' color='primary' >Learn More</Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default Post
