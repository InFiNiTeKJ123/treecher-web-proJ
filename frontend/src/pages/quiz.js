import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import React from 'react'
import Avartarst_mobile from '../components/avartarst_mobile'
import Left_Menu from '../components/left_menu'
import Main_quiz from '../components/main_quiz'
import Navbarst from '../components/navbarst'

const useStyles = makeStyles(({ theme = createTheme() }) => ({}) )

function Quiz() {

  const classes = useStyles()
  return (
    <Box position='flex'> 
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
            <Main_quiz/>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Quiz