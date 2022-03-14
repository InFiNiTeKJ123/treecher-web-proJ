import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import React from "react";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import QuizIcon from "@mui/icons-material/Quiz";
import EditIcon from '@mui/icons-material/Edit';
import {
  Box,
  IconButton,
  Button,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
  Avatar,
  Card,
} from "@mui/material";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FavoriteBorder } from "@mui/icons-material";



const useStyles = makeStyles(({ theme = createTheme() }) => ({
  container: {
    width: "auto",
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(3),
    },
  },
  card_classroom: {
    maxWidth: 345,
    marginBottom: theme.spacing(3),
  },
}));

function Classroom_feed(props) {
  const classes = useStyles();

  const theme = createTheme();

  return (
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
        <HistoryEduIcon sx={{ paddingLeft: theme.spacing(2), fontSize: 35 }} />
        <Typography
          sx={{
            display: "flex",
            fontWeight: 500,
            fontFamily: "Kanit",
            fontSize: 20,
            padding: theme.spacing(2),
            paddingLeft: theme.spacing(2.5),
          }}
        >
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
            paddingBottom: 2,
          },
        }}
      >
        <Paper elevation={3}>
          <Box
            component="h2"
            sx={{
              fontFamily: "Kanit",
              paddingLeft: { xs: theme.spacing(2), md: theme.spacing(10) },
            }}
          >
            ประกาศข้อความของคุณ
          </Box>
          <Grid direction="row" spacing={2} direction="row">
            <Grid item sx={{ textAlign: "center" }}>
              <TextField
                inputProps={{style: {fontFamily: "Kanit"}}} 
                InputLabelProps={{style: {fontFamily: "Kanit"}}}
                label="คุณกำลังคิดอะไรอยู่"
                placeholder="พิมพ์ข้อความที่ต้องการบอกสมาชิกในห้องเรียน"
                sx={{ fontFamily: "Kanit", width: "85%" }}
                multiline
              />
            </Grid>
            <Grid item container spacing={3}>
              <Grid
                item
                xs={7}
                md={12}
                justifyContent="right"
                sx={{
                  display: "flex",
                  textAlign: "center",
                  paddingRight: theme.spacing(6),
                  marginTop: theme.spacing(1),
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    width: { xs: "100%", md: "20%" },
                    height: 50,
                    borderRadius: 4,
                    bgcolor: "#212121",
                    textAlight: "right",
                    marginLeft: theme.spacing(10),
                    marginBottom: theme.spacing(2),
                    marginTop: theme.spacing(1),
                    fontFamily: "Kanit",
                  }}
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
        <Paper elevation={5} variant="contained" sx={{ bgcolor: "#33995F", height: "100vh" }}>
          <Grid container >
            <Grid item xs={6} sx={{ display: 'flex'}}>
              <Avatar 
                  sx={{ fontFamily: "Kanit", fontWeight: 'bold',bgcolor: '#81DBEA',color:'#000000', fontFamily: "Kanit",
                        display: { xs: 'none', sm: 'flex' }, marginLeft: theme.spacing(4), marginTop: theme.spacing(2)}} 
                  size="small" aria-label="avatar" >
                  พ
                </Avatar>
                <Typography variant="h6" 
                sx={{ fontFamily: "Kanit", marginTop: theme.spacing(2), marginLeft: theme.spacing(2), color: "white", fontFamily: "Kanit"}}>
                  คุณครู
                  <Typography
                    sx={{ color: "white", fontFamily: "Kanit" }}>
                    29 ก.พ. 2565
                  </Typography>
                </Typography>
            </Grid>
            <Grid item xs={6} sx={{ justifyContent: 'right' }}>
              <IconButton
                  aria-label="Editicon"
                  sx={{
                    color: "white",
                    paddingTop: "5%",
                    marginLeft: "75%",

                  }}
                >
                  <EditIcon />
                </IconButton> 
            </Grid>
            <Grid item xs={12} >
              <Box
                  component="h4" variant="contained"
                    sx={{ borderRadius: 5 ,marginLeft: {xs: theme.spacing(2), md: theme.spacing(12),},
                      paddingLeft: "1%", paddingRight: "3%", width: "80%", bgcolor: "#C9E265",  
                    }}
              >
                <Typography sx={{ fontFamily: "Kanit" }}>
                  วันนี้คุณครูของดการเรียนการสอนนะคะ คุณครูได้มอบหมายงานแบบฝึกหัด ให้ทำคาบเรียนแล้ว นักเรียนสามารถทำแบบฝึกหัดในคาบเรียนได้เลยค่ะ
                </Typography>
              </Box>
            </Grid>
            {/* <Grid item xs>
              <IconButton aria-label="favoriteicon" 
                  sx={{ padding: "1%" , color: "red" }}>
                <FavoriteIcon />
              </IconButton>
              <Typography sx={{ fontFamily: "Kanit" ,color: "white", }}>
                14
              </Typography>
            </Grid> */}
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
}

export default Classroom_feed;
