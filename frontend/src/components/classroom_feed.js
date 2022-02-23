import { makeStyles } from '@mui/styles'
import { createTheme } from '@mui/material/styles';
import React from 'react'
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import QuizIcon from "@mui/icons-material/Quiz";
import { Button, Grid, Paper, Stack, TextField, Typography } from "@mui/material";
import { Box, grid, spacing } from "@mui/system";
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';



const useStyles = makeStyles(({ theme = createTheme() }) => ({
    container: {
      width: 'auto', 
      [theme.breakpoints.down("sm")]: {
        paddingTop: theme.spacing(3),
      }
    },
    card_classroom: {
      maxWidth: 345 ,
      marginBottom: theme.spacing(3)
    }
  }));

function Classroom_feed(props) {

    const classes = useStyles();

    const theme = createTheme();

  return (
    <div>
        <Box component='div'
          sx={{ width: 250 , height: 'auto', alignItems: 'center',
                bgcolor: '#008037', color: 'white', display: 'flex',
                paddingleft: theme.spacing(3), marginBottom: theme.spacing(3), marginLeft: theme.spacing(8), 
                borderRadius: 3, }}>
          <HistoryEduIcon sx={{ paddingLeft: theme.spacing(2), fontSize: 35 }}/>
          <Typography
            sx={{ display:'flex' , fontWeight: 500 , fontSize: 20, 
                  padding: theme.spacing(2) , paddingLeft: theme.spacing(2.5)}}>
            240-124
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
            paddingBottom: 2
          },
        }}
      >
        <Paper elevation={3}>
          <Box component='h1' sx={{ paddingLeft: theme.spacing(10) ,  }}>
            ประกาศข้อความของคุณ
          </Box>
          <Grid  direction="row" spacing={2} direction='row'>
            <Grid item sx={{ textAlign: 'center' }} >
            <TextField
              label="สร้างโพสต์"
              placeholder="พิมพ์ข้อความที่ต้องการบอกสมาชิกในห้องเรียน"
              margin="normal"
              sx={{ width: "85%", }}
              multiline
            />
            </Grid>
            <Grid item container spacing={3}>
              <Grid item xs={5} sx={{textAlign: 'center', paddingRight: theme.spacing(6), marginTop: theme.spacing(1)}} >
                <Button 
                  variant="contained"
                  sx={{ width: 'auto', height: 'auto', borderRadius: 4, bgcolor: '#212121' }}
                >
                  <AttachFileIcon />
                  แนบไฟล์
                </Button>
                <Button 
                  variant="contained"
                  sx={{ width: 'auto', height: 'auto', borderRadius: 4, bgcolor: '#212121', marginLeft: theme.spacing(1) }}
                >
                  <AddPhotoAlternateIcon />
                  แนบรูปภาพ
                </Button>
              </Grid>
              <Grid item xs={6} sx={{ textAlign: 'right', marginRight: theme.spacing(5)}} >
                <Button 
                  variant="contained"
                  sx={{ width: 100, height: 50, borderRadius: 4, bgcolor: '#212121' }}
                >
                  โพสต์
                </Button>
              </Grid>
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
        <Paper elevation={3}></Paper>
      </Box>
    </div>
  )
}

export default Classroom_feed