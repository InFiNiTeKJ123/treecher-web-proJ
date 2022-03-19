import React, { useEffect, useState } from 'react'
import { Avatar, Button, Card, Container, Drawer, Grid, Paper, Typography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system'
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Navbar from '../components/navbar'
import Left_Menu_class_th from '../components/teacher/left_menu_class_th';
import Left_slidebar_class_th from '../components/teacher/left_slidebar_class_th';
import axiosInstance from '../config/axios';
import Friends_list from '../components/students/friends_list';
import Navbar_moblie from '../components/navbar_mobile';


const useStyles = makeStyles(({ theme = createTheme() }) => ({
    container: {
      paddingTop: theme.spacing(2),
    },
    left_menu_container:{
      paddingTop: theme.spacing(5),
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ece7e7",
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

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    check: createColor('#70ff68'),
  },
});

function Member_th() {

    const classes = useStyles()

    const [color, setColor] = useState(true)
  
    const handleClick = () => {
      setColor(!color)
    };
  
    const [openslide, setOpenslide] = useState(false)

    const [membersList, setmembersList] = useState([])
  
    const toggleslider = () => {
      setOpenslide(!openslide)
    }

    useEffect( async () => {
      let result = await axiosInstance.get('classrooms/classroom')
          console.log(result.data[0].Students)
          setmembersList(result.data[0].Students)
          
    }, [])

  return (
    <ThemeProvider theme={theme}>
    <Box position='flex'>
      <Box component='div' sx={{ display: {sm: 'none'} }}>
        <Navbar_moblie toggleslider={toggleslider} />
      </Box>
      <Grid container item spacing={0.5}>
        <Grid item xs={1.8} sx={{ display: { xs: 'none', md: 'flex', position: 'fixed' }}}>
            <Left_Menu_class_th changecolor={color} handleClick={handleClick}/>
        </Grid>
        <Drawer open={openslide} anchor="left" onClose={toggleslider}>
            <Left_slidebar_class_th />
          </Drawer>
        <Grid item xs sx={{ marginLeft: {md: "15%"}}}> 
          <Grid item classname={classes.gridavartar}>
            <avartar_mobile className={classes.avartar_mobile}/>
          </Grid>
          <Grid item xs >
            <Box component='div'
            sx={{ width: {xs: "50%", md:"15%"} , height: 'auto', alignItems: 'center',
                  bgcolor: '#008037', color: 'white', display: 'flex',
                  paddingleft: theme.spacing(3), marginTop: theme.spacing(3), marginLeft: theme.spacing(5),
                  borderRadius: 3, }}>
              <AccountCircleIcon sx={{ paddingLeft: theme.spacing(2), fontSize: 35 }}/>
              <Typography
                sx={{ fontFamily: "Kanit", display:'flex' , fontWeight: "bold" , fontSize: "20px",
                      padding: theme.spacing(2) , }}>
                นักเรียน
              </Typography>
            </Box>
            {membersList.map(r => <Friends_list friends={r} key={r.id}/>)}
          </Grid>
        </Grid>
      </Grid>
    </Box>
    </ThemeProvider>
  )
}

export default Member_th