import React, { useState } from 'react';
import { Grid } from '@mui/material'
import { useTheme, createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system'
import Mainfeed from '../components/teacher/mainfeed'
import Left_Menu from '../components/teacher/left_menu'
import Navbar from '../components/teacher/navbar'
import Avartar_mobile from '../components/teacher/avartar_mobile'
import Add_classroomPopup_th from '../components/teacher/add_classroompopup_th';
import Left_Menu_class_th from '../components/teacher/left_menu_class_th';
import Classroom_feed from '../components/classroom_feed';

const useStyles = makeStyles(({ theme = useTheme() }) => ({
  container: {
    paddingTop: theme.spacing(3),
  },
  avartar_mobile: {
    alignItems: 'right', 
    justifyContent: 'flex-end',
    paddingTop: theme.spacing(5),
    paddingLeft: theme.spacing(12),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  gridavartar :{
    paddingTop: theme.spacing(10),
    border: "1px solid black", 
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  
}));


function Classroom_Teacher() {

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
      <Navbar/>
      <Grid container item spacing={0.5}>
        <Grid item xs={1.8} sx={{ display: { xs: 'none', md: 'flex' }}}>
            <Left_Menu_class_th />
        </Grid>
        <Grid item xs > 
          <Grid item classname={classes.gridavartar}>
            <Avartar_mobile className={classes.avartar_mobile}/>
          </Grid>
          <Grid item xs >
            <Classroom_feed/>
          </Grid>
        </Grid>
      </Grid>
    </Box>
    
  )
}

export default Classroom_Teacher