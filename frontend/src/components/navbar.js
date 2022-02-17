
import { AppBar, Avatar, Box, Container, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import {
  Home,
} from "@mui/icons-material";


function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' sx={{ bgcolor: '#008037'}}>
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ display:'block'}}
            >
              <img 
                src="https://www.img.in.th/images/5a8e12b61d4c4b7096dc11a9cd9813af.png" 
                alt="5a8e12b61d4c4b7096dc11a9cd9813af.png" 
                border="0" 
                width="75"/>
            </IconButton>
          <Typography variant='h6' sx={{ display: 'block' }}> 
            TreeCher
          </Typography>
          <Box sx={{ flexGrow: 150 }} />
          <Box sx={{ flexGrow: 1 }}>
            <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls='#'
                aria-haspopup="true"
                onClick='#'
                color="inherit"
              >
                <Container sx={{display: { xs: 'none', md: 'flex' }}}>
                      <div>
                        <Home />
                      </div>
                </Container>
                <Avatar sx={{ bgcolor: '#81DBEA' , display: { xs: 'none', lg: 'flex' }}} aria-label="avatar" >
                  ศ
                </Avatar>
                
              </IconButton> 
          </Box>       
        </Toolbar>
    </AppBar>
    </Box>

  )
}

export default Navbar