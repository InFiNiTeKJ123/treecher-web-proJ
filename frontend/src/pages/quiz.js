import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react'
import Avartarst_mobile from '../components/avartarst_mobile'
import Left_Menu from '../components/left_menu'
import Main_quiz from '../components/main_quiz'
import Navbarst from '../components/navbarst'
import Quiz_popup from '../components/quiz_popup';

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
}) )

function Quiz() {

  const classes = useStyles()

  const [open, setOpen] = useState(false)
  
  const handleOpenPopup = () => {
    setOpen(true)
  }

  const handleClosePopup = () => {
    setOpen(false)
  }

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
            <Main_quiz Openpopup={handleOpenPopup}/>
            <Quiz_popup Open={open} handleclose={handleClosePopup} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Quiz