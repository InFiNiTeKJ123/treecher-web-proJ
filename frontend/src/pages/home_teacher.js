import React from 'react'
import { Grid } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system'
import Mainfeed from '../components/mainfeed'
import Left_Menu from '../components/left_menu'
import Navbar from '../components/navbar'
import Avartar_mobile from '../components/avartar_mobile'

const useStyles = makeStyles(({ theme = useTheme() }) => ({
  container: {
    paddingTop: theme.spacing(3),
  },
  avartar_mobile: {
    justifyContent: 'flex-end',
    right: 20,
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }
}));

function Home_teacher() {

  const classes = useStyles()

  return (
  <Box sx={{ flexGrow: 1 }} position='flex'>
    <Navbar/>
    <Grid container>
      <Grid item xs={1.5} sm={1.5} sx={{ paddingLeft: "0"}}>
        <Left_Menu />
      </Grid>
      <Grid item xs={10} container>
        <Grid item xs={20} className={classes.avartar_mobile}>
          <Avartar_mobile />
        </Grid>
        <Grid >
          <Mainfeed/>
        </Grid>
      </Grid>
      
    </Grid>
  </Box>
    
  )
}

export default Home_teacher