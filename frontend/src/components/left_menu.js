import { Box, Container, Typography } from '@mui/material'
import React from 'react';
import { ExitToApp, Person, Settings, } from "@mui/icons-material";
import SchoolIcon from '@mui/icons-material/School';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';


const useStyles = makeStyles(({ theme = useTheme() }) => ({
  container: {
    height: "100vh",
    color: "white",
    paddingTop: theme.spacing(5),
    backgroundColor: "#008037",
    position: "sticky",
    top: 0,
    [theme.breakpoints.up("md")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ece7e7",
    },
  },
  box: {
    display: 'flex',
    alignItems: "center",
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(3),
    cursor: "pointer",
    [theme.breakpoints.up("md")]: {
      backgroundColor: "#008037", 
    },
  },
  boxlogout: {
    display: 'flex',
    alignItems: "center",
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(3),
    cursor: "pointer",
    [theme.breakpoints.up("md")]: {
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
}));

function Left_Menu() {

  const classes = useStyles()
  
  return (
    <Container className={classes.container}>
          <Box className={classes.box}>
            <SchoolIcon className={classes.icon} />
            <Typography className={classes.text}>หน้าหลัก</Typography>
          </Box>
          <Box className={classes.box}>
            <Person className={classes.icon} />
            <Typography className={classes.text}>โปรไฟล์</Typography>
          </Box>
          <Box className={classes.box}>
            <AddCircleIcon className={classes.icon} />
            <Typography className={classes.text}>เพิ่มห้องเรียน</Typography>
          </Box>
          <Box className={classes.box}>
            <Settings className={classes.icon} />
            <Typography className={classes.text}>Settings</Typography>
          </Box>
          <Box className={classes.boxlogout}>
            <ExitToApp className={classes.icon} />
            <Typography className={classes.text}>ออกจากระบบ</Typography>
          </Box>
      </Container>
  );
}

export default Left_Menu;