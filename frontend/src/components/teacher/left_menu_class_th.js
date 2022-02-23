import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react';
import { ExitToApp, Person,  } from "@mui/icons-material";
import SchoolIcon from '@mui/icons-material/School';
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';

import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import AddTaskIcon from '@mui/icons-material/AddTask';


const useStyles = makeStyles(({ theme = createTheme() }) => ({
  container: {
    height: "100vh",
    color: "white",
    paddingTop: theme.spacing(5),
    [theme.breakpoints.up("md")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ece7e7",
    },
  },
  box: {
    display: 'flex', 
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(3),
    cursor: "pointer",
    [theme.breakpoints.up("md")]: {
      backgroundColor: "#008037", 
      padding: theme.spacing(1),
      width: 'auto',
      height: 'auto'
    },
  },
  boxlogout: {
    display: 'flex',
    alignItems: "center",
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(3),
    cursor: "pointer",
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(1),
      backgroundColor: "#FF0000",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      fontSize: "18px",
      color: "white",
    },
  },
  text: {
    fontWeight: 500,
    color: "white",
    [theme.breakpoints.down("md")]: {
      color: "white",
      display: "none",
    },
  },
  icon_button: {
    width: 'auto',
    height: 'auto'
  }
}));

function Left_Menu_class_th() {

  const classes = useStyles()

  const theme = createTheme()
  
  return (
    <Container className={classes.container} >
          <Button startIcon = {<SchoolIcon className={classes.icon} />} variant="contained" color="success" 
              sx={{ width: 170, height: 50, fontSize: 16, marginBottom: theme.spacing(3) }}>
            หน้าหลัก
          </Button>
          <Button startIcon = {<Person className={classes.icon} />} variant="contained" color="success" 
              sx={{ width: 170, height: 50, fontSize: 16, marginBottom: theme.spacing(3) }}>
            โปรไฟล์
          </Button>
          <Button startIcon = {<PeopleAltIcon className={classes.icon} />} variant="contained" color="success" 
              sx={{ width: 170, height: 50, fontSize: 16, marginBottom: theme.spacing(3) }}>
            นักเรียน
          </Button>
          <Button startIcon = {<AddTaskIcon className={classes.icon} />} variant="contained" color="success" 
              sx={{ width: 170, height: 50, fontSize: 16, marginBottom: theme.spacing(3) }}>
            สร้างแบบฝึกหัด
          </Button>
          <Button startIcon = {<FilterVintageIcon className={classes.icon} />} variant="contained" color="success" 
              sx={{ width: 170, height: 50, fontSize: 16, marginBottom: theme.spacing(3) }}>
            คะแนนของนักเรียน
          </Button>
          <Button startIcon = {<ExitToApp className={classes.icon} />} variant="contained" color="error" 
               sx={{ width: 170, height: 50, fontSize: 16, marginBottom: theme.spacing(3) }}>
            ออกจากระบบ
          </Button>
          {/* <Box className={classes.box} >
            <Button  href='http://localhost:3000/home_st'>
              <SchoolIcon className={classes.icon} />
              <Typography className={classes.text}>หน้าหลัก</Typography>
            </Button>
          </Box>
          <Box className={classes.box}>
            <Button>
              <Person className={classes.icon} />
              <Typography className={classes.text}>โปรไฟล์</Typography>
            </Button>
          </Box>
          <Box className={classes.box}>
            <Button>
              <PeopleAltIcon className={classes.icon} />
              <Typography className={classes.text}>นักเรียน</Typography>
            </Button>
          </Box>
          <Box className={classes.box} sx={{ bgcolor: '#81FF5B'}}>
            <Button>
              <AddTaskIcon className={classes.icon} />
              <Typography className={classes.text}>สร้างแบบฝึกหัด</Typography>
            </Button>
          </Box>
          <Box className={classes.box}>
            <Button>
              <FilterVintageIcon className={classes.icon} />
              <Typography className={classes.text}>คะแนนของนักเรียน</Typography>
            </Button>
          </Box>
          <Box className={classes.boxlogout}>
            <Button>
              <ExitToApp className={classes.icon} />
              <Typography className={classes.text}>ออกจากระบบ</Typography>
            </Button>
          </Box> */}
      </Container>
  );
}

export default Left_Menu_class_th;