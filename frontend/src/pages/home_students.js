import React, { useState } from 'react'
import { Grid } from '@mui/material'
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system'
import Mainfeed from '../components/teacher/mainfeed'
import Navbarst from '../components/students/navbarst'
import Avartarst_mobile from '../components/students/avartarst_mobile'
import Add_classroomPopup_st from '../components/students/add_classroompopup_st';
import Left_Menu_st from '../components/students/left_menust';

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

  const [open, setOpen] = useState(false)
  
  const handleOpenPopup = () => {
    setOpen(true)
  }

  const handleClosePopup = () => {
    setOpen(false)
  }

  return (
    <Box > 
      <Navbarst/>
      <Grid container>
        <Grid item sm={1.8} sx={{display: { xs: 'none', sm: 'flex' }}}>
          <Left_Menu_st openpopup={handleOpenPopup}/>
        </Grid>
        <Grid item xs> 
          <Grid item classname={classes.gridavartar}>
            <Avartarst_mobile className={classes.avartar_mobile}/>
          </Grid>
          <Grid item xs >
            <Mainfeed/>
            <Add_classroomPopup_st Open={open} handleClose={handleClosePopup}/>
          </Grid>
        </Grid>
      </Grid>
    </Box>
    
  )
}

export default Home_teacher