import { Drawer, Grid,Container } from '@mui/material'
import { Box } from '@mui/system'
import {useTheme ,createTheme,ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react'
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import Navbar from '../components/navbar'
import Left_Menu_class_th from '../components/teacher/left_menu_class_th';
import Left_slidebar_class_th from '../components/teacher/left_slidebar_class_th';
import Avartar_mobile from '../components/teacher/avartar_mobile'
import Main_quiz from '../components/students/main_quiz'
import Quiz_popup from '../components/quiz_popup1';
import Quizth_made from '../components/teacher/quizth_made';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { ExitToApp, Person } from '@mui/icons-material';
import SchoolIcon from '@mui/icons-material/School';
import AddTaskIcon from "@mui/icons-material/AddTask";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";
import { Button } from "@mui/material";

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    check: createColor('#70ff68'),
  },
});

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

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


function Quizmade() {
  const left_menu_class_th_quizmade = () => (
    <ThemeProvider theme={theme}>
        <Container className={classes.container} >
            <Button startIcon = {<SchoolIcon className={classes.icon} />} variant="contained" color="success" href="/home_th"
                sx={{ fontFamily: "Kanit", width: '95%', height: 50, fontSize: 16, marginBottom: theme.spacing(3) }}>
                หน้าหลัก
            </Button>
            <Button startIcon = {<Person className={classes.icon} />} variant="contained" color="success" href="/profile_th"
                sx={{ fontFamily: "Kanit", width: '95%', height: 50, fontSize: 16, marginBottom: theme.spacing(3) }}>
                โปรไฟล์
            </Button>
            <Button startIcon = {<PeopleAltIcon className={classes.icon} />} variant="contained" color="success" 
                sx={{ fontFamily: "Kanit", width: '95%', height: 50, fontSize: 16, marginBottom: theme.spacing(3), color: "white" }}  href='/member_th'>
                นักเรียน
            </Button>
            <Button startIcon = {<AddTaskIcon className={classes.icon} />} variant="contained" color="check" 
                sx={{ fontFamily: "Kanit", width: '95%', height: 50, fontSize: 16, marginBottom: theme.spacing(3), color: 'white'}} 
                 href='/quizmade' >
                สร้างแบบฝึกหัด
            </Button>
            <Button startIcon = {<FilterVintageIcon className={classes.icon} />} variant="contained" color="success"  
                sx={{ fontFamily: "Kanit", width: '95%', height: 50, fontSize: 16, marginBottom: theme.spacing(3) , color: 'white'}} href='/score_th'>
                คะแนน
            </Button>
            <Button startIcon = {<ExitToApp className={classes.icon} />} variant="contained" color="error" href="/login"
                sx={{ fontFamily: "Kanit", width: '95%', height: 50, fontSize: 16, marginBottom: theme.spacing(3) }}>
                ออกจากระบบ
            </Button>
        </Container>
    </ThemeProvider>
)

  const classes = useStyles()

  const [color, setColor] = useState(true)

  const [open, setOpen] = useState(false)
  
  const handleOpenPopup = () => {
    setOpen(true)
  }

  const handleClosePopup = () => {
    setOpen(false)
  }

  const [openslide, setOpenslide] = useState(false)

  const toggleslider = () => {
    setOpenslide(!openslide)
  }

  const [opensnackbar, setOpensnackbar] = useState(false);

  const handleClick = () => {
    setOpensnackbar(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpensnackbar(false);
  };

  const Checkpoint = () => (
    <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={opensnackbar} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ fontFamily: "Kanit", width: '100%' }}>
            เย้ คุณได้รดน้ำต้นไม้แล้ว
          </Alert>
        </Snackbar>
      </Stack>
  )

  return (
    <Box position='flex'> 
      <Box component='div' sx={{ display: {md: 'none'}, position: 'sticky', top: 0}}>
        <Navbar toggleslider={toggleslider} />
      </Box>
      <Grid container>
        <Grid item sm={1.8} sx={{display: { xs: 'none', md: 'flex' }, position: 'fixed'}}>
          {left_menu_class_th_quizmade()}
        </Grid>
        <Drawer open={openslide} anchor="left" onClose={toggleslider}>
            <Left_slidebar_class_th />
        </Drawer>
        <Grid item xs> 
          <Grid item classname={classes.gridavartar}>
            <Avartar_mobile className={classes.avartar_mobile}/>
          </Grid>
          <Grid item xs sx={{ marginLeft: {md:"15%"}}} >
            <Main_quiz Openpopup={handleOpenPopup}/>
            <Quiz_popup Open={open} handleclose={handleClosePopup} clickcheckpoint={handleClick}/>
            {Checkpoint()}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}


export default Quizmade

