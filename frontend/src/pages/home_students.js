import React, { useState } from 'react'
import { Grid } from '@mui/material'
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system'
import Mainfeed from '../components/mainfeed'
import Left_Menu from '../components/left_menu'
import Navbarst from '../components/navbarst'
import Avartarst_mobile from '../components/avartarst_mobile'

const useStyles = makeStyles(({ theme = createTheme() }) => ({
  container: {
    paddingTop: theme.spacing(3),
  },
  avartar_mobile: {
    alignItems: 'right', 
    justifyContent: 'flex-end',
    paddingTop: theme.spacing(5),
    paddingLeft: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  gridavartar :{
    paddingTop: theme.spacing(10),
    border: "1px solid black", 
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }
}));


function Home_teacher() {

  const classes = useStyles()
  
  const theme = createTheme()

  return (
    <Box > 
      <Navbarst/>
      <Grid container>
        <Grid item sm={1.8} sx={{display: { xs: 'none', sm: 'flex' }}}>
          <Left_Menu />
        </Grid>
        <Grid item xs> 
          <Grid item classname={classes.gridavartar}>
            <Avartarst_mobile className={classes.avartar_mobile}/>
          </Grid>
          <Grid item xs >
            <Mainfeed/>
          </Grid>
        </Grid>
      </Grid>
    </Box>
    
  )
}

export default Home_teacher