import { Box, Button, Container, IconButton, Typography } from '@mui/material'
import React from 'react';
import { ExitToApp, Person, Settings, } from "@mui/icons-material";
import SchoolIcon from '@mui/icons-material/School';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';

import AssignmentIcon from '@mui/icons-material/Assignment';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';


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

function Left_Menu_class_st() {

  const classes = useStyles()
  
  return (
    <Container className={classes.container} >
          <Box className={classes.box} >
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
          </Box>
      </Container>
  );
}

export default Left_Menu_class_st;