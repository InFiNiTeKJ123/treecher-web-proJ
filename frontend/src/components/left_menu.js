import { Container, Typography } from '@mui/material'
import React from 'react'
import {
  Bookmark,
  List,
  ExitToApp,
  Home,
  Person,
  PhotoCamera,
  PlayCircleOutline,
  Settings,
  Storefront,
  TabletMac,
} from "@mui/icons-material";
import { Box } from '@mui/system';


function Left_Menu() {
  return (
    <Box>
      <Container sx={{display: { xs: 'none', md: 'flex' }}}>
      <div>
        <Home />
        <Typography>Homepage</Typography>
      </div>
      <div >
        <Person />
        <Typography >Friends</Typography>
      </div>
      <div >
        <List />
        <Typography >Lists</Typography>
      </div>
      <div >
        <PhotoCamera />
        <Typography >Camera</Typography>
      </div>
      <div >
        <PlayCircleOutline />
        <Typography >Videos</Typography>
      </div>
      <div >
        <TabletMac />
        <Typography >Apps</Typography>
      </div>
      <div >
        <Bookmark />
        <Typography >Collections</Typography>
      </div>
      <div >
        <Storefront />
        <Typography >Market Place</Typography>
      </div>
      <div >
        <Settings/>
        <Typography >Settings</Typography>
      </div>
      <div >
        <ExitToApp />
        <Typography >Logout</Typography>
      </div>
    </Container>
    </Box>
  )
}

export default Left_Menu