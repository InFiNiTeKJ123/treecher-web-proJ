import { Avatar, Box, Button, Container, Drawer, Grid, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Avartarst_mobile from '../components/students/avartarst_mobile'
import Left_Menu_st from '../components/students/left_menust'
import Navbarst from '../components/students/navbarst'
import Left_slidebar_st from '../components/students/left_slidebar_st';

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
}));

function Profile() {

  const classes = useStyles()

  const theme = createTheme()

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

  const profile_info = () => (
    <Box component="div">
    <Box
      component="div"
      sx={{
        width: { xs: "60%", md: "15%" },
        height: "auto",
        alignItems: "center",
        bgcolor: "#008037",
        color: "white",
        display: "flex",
        paddingleft: theme.spacing(3),
        marginBottom: theme.spacing(3),
        marginLeft: { xs: theme.spacing(2), md: theme.spacing(8) },
        marginTop: { xs: theme.spacing(2) },
        borderRadius: 3,
      }}
    >
      <Typography
        sx={{
          display: "flex",
          fontWeight: 500,
          fontSize: 20,
          padding: theme.spacing(2),
          paddingLeft: theme.spacing(2.5),
        }}
      >
        โปรไฟล์
      </Typography>
    </Box>
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,

          width: "90%",
          height: "auto",
          borderRadius: 3,
          marginLeft: "auto",
          marginRight: "auto",
          paddingBottom: 2,
        },
      }}
    >
      <Paper elevation={3}>
        <Box sx={{ margin: 5, display: 'flex' }}>
          <Avatar 
            sx={{ fontWeight: 'bold',bgcolor: '#fcf872',color:'#000000', 
                  display: { xs: 'none', sm: 'flex' }, width: 100, height: 100}} 
                  size="medium" aria-label="avatar" >
                  ฉ
            </Avatar>
            {/* <Box component='div' sx={{ marginLeft: 10 }}>
              <Typography>ชื่อ</Typography>
              <TextField >สวัสดีครับ</TextField>
            </Box>
            <Box component='div' sx={{ marginLeft: 10 }}>
              <Typography>นามสกุล</Typography>
              <TextField >สวัสดีครับ</TextField>
            </Box> */}
          </Box>
          <Grid container sx={{ width: 100 }}>
              <Grid item xs={6}>
                <Typography>ชื่อ</Typography>
                <TextField >สวัสดีครับ</TextField>
              </Grid>
              <Grid item xs={6}>
                <Typography>นามสกุล</Typography>
                <TextField >สวัสดีครับ</TextField>
              </Grid>
            </Grid>
      </Paper>
    </Box>
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,

          width: "90%",
          height: 200,
          borderRadius: 3,
          marginLeft: "auto",
          marginRight: "auto",
        },
      }}
    >
      {/* <Paper elevation={3}></Paper> */}
    </Box>
  </Box>
  )

  return (
    <Box > 
      <Navbarst toggleslider={toggleslider}/>
      <Grid container>
        <Grid item sm={1.8} sx={{display: { xs: 'none', sm: 'flex' }, }}>
          <Left_Menu_st openpopup={handleOpenPopup}/>
        </Grid>
        <Drawer open={openslide} anchor="left" onClose={toggleslider}>
            <Left_slidebar_st openpopup={handleOpenPopup} />
          </Drawer>
        <Grid item xs> 
          <Grid item classname={classes.gridavartar}>
            <Avartarst_mobile className={classes.avartar_mobile}/>
          </Grid>
          <Grid item xs >
            {profile_info()}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Profile