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
import Left_Menu_class_st from '../components/students/left_menu_class_st';
import Navbarst from '../components/students/navbarst';

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


function Classroom_Students() {

  const classes = useStyles()

  const [color, setColor] = useState(true)

  const handleClick = () => {
    setColor(!color)
  };


  return (
    <Box position='flex'>
      <Navbarst/>
      <Grid container item spacing={0.5}>
        <Grid item xs={1.8} sx={{ display: { xs: 'none', md: 'flex' }}}>
            <Left_Menu_class_st changecolor={color} handleClick={handleClick}/>
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

export default Classroom_Students