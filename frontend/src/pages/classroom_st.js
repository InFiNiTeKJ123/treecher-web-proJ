import React, { useState } from 'react';
import { Drawer, Grid } from '@mui/material'
import { useTheme, createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system'
import Avartarst_mobile from '../components/students/avartarst_mobile'
import Classroom_feed from '../components/classroom_feed';
import Left_Menu_class_st from '../components/students/left_menu_class_st';
import Navbarst from '../components/students/navbarst';
import Left_slidebar_class_st from '../components/students/left_slidebar_class_st';

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

  const [openslide, setOpenslide] = useState(false)

  const toggleslider = () => {
    setOpenslide(!openslide)
  }
  

  return (
    <Box position='flex'>
      <Navbarst toggleslider={toggleslider}/>
      <Grid container item spacing={0.5}>
        <Grid item xs={1.8} sx={{ display: { xs: 'none', md: 'flex' }}}>
            <Left_Menu_class_st changecolor={color} handleClick={handleClick}/>
        </Grid>
        <Drawer open={openslide} anchor="left" onClose={toggleslider}>
            <Left_slidebar_class_st />
          </Drawer>
        <Grid item xs > 
          <Grid item classname={classes.gridavartar}>
            <Avartarst_mobile className={classes.avartar_mobile}/>
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