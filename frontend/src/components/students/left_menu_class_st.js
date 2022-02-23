import { Box, Button, Container, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react';
import { ExitToApp, Person, Settings, } from "@mui/icons-material";
import SchoolIcon from '@mui/icons-material/School';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';

import AssignmentIcon from '@mui/icons-material/Assignment';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import { Link, useHref } from "react-router-dom";




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
}));

function Left_Menu_class_st(props) {

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
            เพื่อนในห้องเรียน
          </Button>
          <Button startIcon = {<AssignmentIcon className={classes.icon} />} variant="contained" color={props.changecolor ? "success" : "error"} 
              sx={{ width: 170, height: 50, fontSize: 16, marginBottom: theme.spacing(3) }} onClick={props.handleClick} href='/quiz' >
            แบบฝึกหัด
          </Button>
          <Button startIcon = {<FilterVintageIcon className={classes.icon} />} variant="contained" color="success" 
              sx={{ width: 170, height: 50, fontSize: 16, marginBottom: theme.spacing(3) }}>
            คะแนนของฉัน
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
              <Typography className={classes.text}>เพื่อนในห้องเรียน</Typography>
            </Button>
          </Box>
          <Box className={classes.box} sx={{ bgcolor: '#81FF5B'}}>
            <Button>
              <AssignmentIcon className={classes.icon} />
              <Typography className={classes.text}>แบบฝึกหัด</Typography>
            </Button>
          </Box>
          <Box className={classes.box}>
            <Button>
              <FilterVintageIcon className={classes.icon} />
              <Typography className={classes.text}>คะแนนของฉัน</Typography>
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

export default Left_Menu_class_st;