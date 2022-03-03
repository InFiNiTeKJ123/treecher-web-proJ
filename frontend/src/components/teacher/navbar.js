import React, { useState } from 'react'
import { AppBar, Avatar, Box, IconButton, Toolbar, Typography, List, ListItem, ListItemIcon, ListItemText, Drawer } from '@mui/material'
import { useTheme , createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { ExitToApp, Person } from '@mui/icons-material';
import SchoolIcon from '@mui/icons-material/School';
import AddCircleIcon from '@mui/icons-material/AddCircle';


const useStyles = makeStyles(({theme = useTheme()}) => ({
  appbar: {
    position: 'static',
    backgroundColor: '#008037'
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  avatar: {
    backgroundColor: '#81DBEA',
    display: 'flex', 
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  icons: {
    alignItems: "center",
    display: (props) => (props.open ? "none" : "flex"),
  },
  menuSliderContainer: {
    width: 200,
    background: "#008037",
    height: "100%"
  },
  listItem: {
    color: "white"
  },
}));


function Navbar(props) {

  const classes = useStyles()

  const theme = createTheme();

  return (
    <Box sx={{ flexGrow: 1 , position: 'sticky', top: 0 }}>
      <AppBar position='static' style={{backgroundColor: '#008037'}}>
        <Toolbar className={classes.toolbar}>
          <IconButton sx={{display: { xs: 'flex', md: 'none' }, color: 'white' , 
                      marginRight: { xs: theme.spacing(6), sm: theme.spacing(1)}}} 
                      onClick={props.toggleslider}>
            <MenuIcon sx={{display: { xs: 'flex', md: 'none' }}} className={classes.hamburger_icon}/>
          </IconButton>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ display:'flex' }}
            >
              <Avatar sx={{width: 35, height: 35, backgroundColor: 'success.main',}} 
                >
                <img 
                    src="https://www.img.in.th/images/5c82f85a69a47c74cf09dedd00fd4890.png" 
                    alt="TreeCherLOGO.png"  
                    border="0"
                    width="36"/>
                </Avatar>
            </IconButton>
          <Typography variant='h6' sx={{ display: 'flex', fontFamily: "Kanit" }}> 
            TreeCher
          </Typography>
          <Box sx={{ flexGrow: 100 }} />
          <container>
            <Box sx={{ flexGrow: 50}} />
            <Typography variant='h4'  sx={{ fontFamily: "Kanit", fontWeight: 'bold',color:'#ffffff',display: { xs: 'none', sm: 'flex' } }}> 
                คุณครู
            </Typography>
            <Box sx={{ flexGrow: 5 }} /> 
            <Typography variant='h6' sx={{ fontFamily: "Kanit", color: '#fcf872', display: { xs: 'none', sm: 'flex' } }}> 
                เพ็ชรัตน์ สุริยะไชย
            </Typography>
          </container>
          <Box>
            <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls='#'
                aria-haspopup="true"
                onClick='#'
                color="inherit"
              >
                <Avatar 
                  sx={{ fontFamily: "Kanit", fontWeight: 'bold',bgcolor: '#81DBEA',color:'#000000', 
                        display: { xs: 'none', sm: 'flex' }}} 
                  size="small" aria-label="avatar" >
                  พ
                </Avatar>
              </IconButton> 
          </Box>
        </Toolbar>
      </AppBar>
    </Box>

  );
}

export default Navbar;