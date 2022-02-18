import { Grid, Link } from '@mui/material'
import { Box } from '@mui/system'
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import React from 'react'
import Left_Menu from '../components/left_menu'
import Navbar from '../components/navbarst'
import Avartar_mobile from '../components/avartar_mobile'


const useStyles = makeStyles(({ theme = useTheme() }) => ({
  container: {
    paddingTop: theme.spacing(3),
  },
  avartar_mobile: {
    justifyContent: 'flex-end',
    paddingTop: theme.spacing(5),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  box :{
    backgroundColor: '#008037',
  }
}));

function Home_st() {

  const classes = useStyles()

  return (
    <Box sx={{ flexGrow: 1}}>
      <Navbar/>
      <Grid container item spacing={0.5}>
        <Grid item xs={1.8} sm={1.5}>
          <Left_Menu />
        </Grid>
        <Grid item xs container>
          <Grid className={classes.avartar_mobile}>
            <Avartar_mobile />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home_st