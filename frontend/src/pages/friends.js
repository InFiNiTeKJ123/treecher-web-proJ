import React, { useState } from 'react'
import { Avatar, Button, Card, Container, Drawer, Grid, Paper, Typography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system'
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FaceIcon from "@mui/icons-material/Face";
import { ExitToApp, Person, Settings, } from "@mui/icons-material";
import SchoolIcon from '@mui/icons-material/School';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import AssignmentIcon from '@mui/icons-material/Assignment';

import Navbarst from '../components/students/navbarst'
import Avartarst_mobile from '../components/students/avartarst_mobile';
import Left_slidebar_st from '../components/students/left_slidebar_st';
import Left_Menu_class_st from '../components/students/left_menu_class_st';
import Left_slidebar_class_st from '../components/students/left_slidebar_class_st';


const useStyles = makeStyles(({ theme = createTheme() }) => ({
    container: {
      paddingTop: theme.spacing(2),
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

function Friends() {

    const classes = useStyles()

    const [color, setColor] = useState(true)
  
    const handleClick = () => {
      setColor(!color)
    };
  
    const [openslide, setOpenslide] = useState(false)
  
    const toggleslider = () => {
      setOpenslide(!openslide)
    }

const left_menu_class_st_friend = () => (
    <ThemeProvider theme={theme}>
        <Container className={classes.container} >
            <Button startIcon = {<SchoolIcon className={classes.icon} />} variant="contained" color="success" href="/home_st"
                sx={{ width: '95%', height: 50, fontSize: 16, marginBottom: theme.spacing(3) }} href='/home_st'>
                หน้าหลัก
            </Button>
            <Button startIcon = {<Person className={classes.icon} />} variant="contained" color="success" href="/profile"
                sx={{ width: '95%', height: 50, fontSize: 16, marginBottom: theme.spacing(3) }}>
                โปรไฟล์
            </Button>
            <Button startIcon = {<PeopleAltIcon className={classes.icon} />} variant="contained" color="check" 
                sx={{ width: '95%', height: 50, fontSize: 16, marginBottom: theme.spacing(3), color: "white" }}  href='/friends'>
                เพื่อน
            </Button>
            <Button startIcon = {<AssignmentIcon className={classes.icon} />} variant="contained" color='success'
                sx={{ width: '95%', height: 50, fontSize: 16, marginBottom: theme.spacing(3), color: 'white'}} 
                 href='/quiz' >
                แบบฝึกหัด
            </Button>
            <Button startIcon = {<FilterVintageIcon className={classes.icon} />} variant="contained" color="success" 
                sx={{ width: '95%', height: 50, fontSize: 16, marginBottom: theme.spacing(3) }}>
                คะแนน
            </Button>
            <Button startIcon = {<ExitToApp className={classes.icon} />} variant="contained" color="error" href="/login"
                sx={{ width: '95%', height: 50, fontSize: 16, marginBottom: theme.spacing(3) }}>
                ออกจากระบบ
            </Button>
    
        </Container>
    </ThemeProvider>
)

const Friends_list = () => (
    <Container className={classes.container}>
    <div>
        <Box component='div'
          sx={{ width: {xs: "50%", md:"15%"} , height: 'auto', alignItems: 'center',
                bgcolor: '#008037', color: 'white', display: 'flex',
                paddingleft: theme.spacing(3), 
                borderRadius: 3, }}>
            <AccountCircleIcon sx={{ paddingLeft: theme.spacing(2), width: "20%" }}/>
          <Typography
            sx={{ display:'flex' , fontWeight: "bold" , fontSize: "20px",
                  padding: theme.spacing(2) , }}>
            เพื่อน
          </Typography>
        </Box>
      <Box
        sx={{
          width: "100%",
          height: 40,
          borderRadius: 20,
          paddingTop: 3,
          marginBottom: 10,
        }}
      >
        <Card variant="contained" sx={{ borderRadius: 4 }}>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            sx={{ background: "#E4E4E5", padding: 3 }}
          >
            <Avatar 
                  sx={{ width: {xs:"18%", md:"5%"}, height: 46,fontWeight: 'bold',bgcolor: '#fcf872',color:'#000000', 
                        }} 
                  aria-label="avatar" >
                  ฉ
            </Avatar>
            <Typography sx={{ marginLeft: 3, fontSize: "18px" }}>
                ฉัตรชัย จันทร์แก้ว
            </Typography>
          </Grid>
        </Card>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: 40,
          borderRadius: 20,
          marginTop: 3,
          marginBottom: 10,
        }}
      >
        <Card variant="contained" sx={{ borderRadius: 4 }}>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            sx={{ background: "#E4E4E5", padding: 3 }}
          >
            <Avatar 
                  sx={{ width: {xs:"18%", md:"5%"}, height: 46,fontWeight: 'bold',bgcolor: '#fcf872',color:'#000000', 
                       }} 
                  aria-label="avatar" >
                  ธ
            </Avatar>
            <Typography sx={{ marginLeft: 3, fontSize: "18px" }}>
                ธนภัทร์ เพ็ชร์ดวงจันทร์
            </Typography>
          </Grid>
        </Card>
      </Box>
    
      {/* ----------------------------------------------------------------------------------------------------------------------------------------------------- */}
    </div>
    </Container>
)


  return (
    <ThemeProvider theme={theme}>
    <Box position='flex'>
      <Navbarst toggleslider={toggleslider}/>
      <Grid container item spacing={0.5}>
        <Grid item xs={1.8} sx={{ display: { xs: 'none', md: 'flex', position: 'fixed' }}}>
            {/* <Left_Menu_class_st changecolor={color} handleClick={handleClick}/> */}
            {left_menu_class_st_friend()}
        </Grid>
        <Drawer open={openslide} anchor="left" onClose={toggleslider}>
            <Left_slidebar_class_st />
          </Drawer>
        <Grid item xs sx={{ marginLeft: {md: "15%"}}}> 
          <Grid item classname={classes.gridavartar}>
            <Avartarst_mobile className={classes.avartar_mobile}/>
          </Grid>
          <Grid item xs >
            {Friends_list()}
          </Grid>
        </Grid>
      </Grid>
    </Box>
    </ThemeProvider>
  )
}

export default Friends