
import React from 'react'
import useStyles from './Styles.js'
import { Card , Typography , Box , Button , CardMedia,CardContent,CardActions , Chip } from '@material-ui/core'
import { LocationOn , Phone } from '@material-ui/icons'
import { Rating } from '@material-ui/lab'

const Details = ({place,selected,refProp}) => {
  const classes = useStyles()

  if(selected) refProp?.current?.scrollIntoView({behavior:'smooth',block:'start'})
  
  return (
    <Card elevation={6} className={classes.card}>
      <CardMedia style={{height:360}} image={place.photo ? place.photo.images.large.url : 'https://imageio.forbes.com/specials-images/imageserve/628e3814b2b4253c117d4f13/Dining-Column-on-New-Heights-Restaurant/960x0.jpg?format=jpg&width=960'} title={place.name}/>

      <CardContent>
        <Typography gutterBottom variant='h5'>
          {place.name}
        </Typography>
        <Box display="flex" justifyContent="space-between" my={2}>
          <Rating name="read-only" value={Number(place.rating)} readOnly />
          <Typography component="legend">{place.num_reviews} review{place.num_reviews > 1 && 's'}</Typography>
        </Box>
        <Box display='flex' justifyContent='space-between' alignItems='center' className={classes.subtitle}>
          <Typography variant='subtitle1'>
            Price 
          </Typography>
          <Typography gutterBottom variant='subtitle1'>
            {place.price ? place.price : '$2.27'} 
          </Typography>
        </Box>

        <Box display='flex' justifyContent='space-between' alignItems='center' className={classes.subtitle}>
          <Typography variant='subtitle1'>
            Ranking 
          </Typography>
          <Typography gutterBottom variant='subtitle1'>
            {place.ranking ? place.ranking : ''} 
          </Typography>
        </Box>

        {
          place?.awards?.map((award)=>(
            <Box my={1} display='flex' justifyContent='space-between' alignItems='center'>
              <img src={award.images.small} alt={award.display_name} />
              <Typography variant='subtitle2' color='textSecondary'>
               {award.display_name}
              </Typography>
            </Box>
          ))
        }

        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {place.address && (
          <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
            <LocationOn />{place.address}
          </Typography>
        )}

        {place.phone && (
          <Typography variant="body2" color="textSecondary" className={classes.spacing}>
            <Phone /> {place.phone}
          </Typography>
        )}
      </CardContent>

      <CardActions>
        <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
          Trip Advisor
        </Button>
        <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
          Website
        </Button>
      </CardActions>
    </Card>
  )
}

export default Details