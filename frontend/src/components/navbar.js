import React from 'react'
import { AppBar, Avatar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

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
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  cancel: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  icons: {
    alignItems: "center",
    display: (props) => (props.open ? "none" : "flex"),
  },
  badge: {
    marginRight: theme.spacing(2),
  },
}));


function Navbar() {

  const classes = useStyles()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' style={{backgroundColor: '#008037'}}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ display:'flex'}}
            >
              <img 
                src="https://www.img.in.th/images/43a53673ca4b29c99027d9ff513cc5c7.png" 
                alt="Treecher.png" 
                width="35"
              />
            </IconButton>
          <Typography variant='h6' sx={{ display: 'flex' }}> 
            TreeCher
          </Typography>
          <Box sx={{ flexGrow: 100 }} />
          <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'flex' } }}> 
            คุณครู 
          </Typography>
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
                <Avatar sx={{ bgcolor: '#81DBEA', display: { xs: 'none', sm: 'flex' }}} size="small" aria-label="avatar" >
                  P
                </Avatar>
              </IconButton> 
          </Box>       
        </Toolbar>
    </AppBar>
    </Box>

  );
}

export default Navbar