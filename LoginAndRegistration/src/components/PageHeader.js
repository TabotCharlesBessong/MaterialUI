

import { Card, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'

const useStyles = makeStyles(theme=>({
  root:{
    background:'f4f5fd',
  },
  PageHeader:{
    padding:'2rem',
    marginBottom:'5rem',
    display:'flex',
  }
}))

const PageHeader = (props) => {
  const classes = useStyles()
  const {Icon, title , subTitle} = props
  return (
    <Paper elevation={0} square className={classes.root}>
      <div className={classes.pageHeader}>
        <Card>
          {Icon}
        </Card>
        <div className="">
          <Typography 
            variant='h5'
            component="div"
          >
            {title}
          </Typography>

          <Typography 
            variant='subtitle2'
            component="div"
          >
            {subTitle}
          </Typography>
        </div>
      </div>
    </Paper>
  )
}

export default PageHeader
