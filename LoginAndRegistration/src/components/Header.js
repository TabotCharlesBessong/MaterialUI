

import { AppBar, Badge, Grid, IconButton, InputBase, Toolbar } from '@material-ui/core'
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew"
import React from 'react'
import NotficationNoneIcon from "@material-ui/icons/NotificationsNone"

const Header = () => {
  return (
    <div className='header'>
      <AppBar position='ststic'>
        <Toolbar>
          <Grid container>
            <Grid item >
             <InputBase/>
            </Grid>
            <Grid item  >
             <IconButton>
               <Badge badgeContent={6} color='secondary'>
                 <NotficationNoneIcon/>
               </Badge>
            </IconButton>
            <IconButton>
               <Badge badgeContent={6} color='primary'>
                <PowerSettingsNewIcon/>
              </Badge>
             </IconButton>
             <IconButton>
                <NotficationNoneIcon/>
             </IconButton>
            </Grid>
          

          
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
