import React from 'react'
import { makeStyles } from "@mui/styles";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import QuizIcon from "@mui/icons-material/Quiz";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box, grid, spacing } from "@mui/system";
import { createTheme } from '@mui/material/styles';

import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SaveAltIcon from '@mui/icons-material/SaveAlt'


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

function Makequiz_form(props) {

    const classes = useStyles()

    const theme = createTheme()

    const main_quiz = () => (
        <Box>
            <Card className={classes.card_classroom}>
            <CardActionArea >
                <CardMedia
                component="img"
                alt="green iguana"
                height="100"
                image="https://www.img.in.th/images/83b7c243c2ca76e853ca96df4c2e3514.png"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 500 ,fontFamily: "Kanit"}}>
                    แบบฝึกหัด
                </Typography>
                <Typography gutterBottom variant="body2" component="div" sx={{ fontWeight: 500 ,fontFamily: "Kanit"}}>
                    มารดน้ำต้นไม้กันเถอะ
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions CardActions >
                <Button sx={{fontFamily: "Kanit"}} size="small">เข้าทำควิซ</Button>
            </CardActions>
        </Card>
      </Box>
    )

  return (
    <Box component="div">
      <Box
        component="div"
        sx={{
          width: { xs: "60%", md: "20%" },
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
            fontFamily: "Kanit",
            display: "flex",
            fontWeight: 500,
            fontSize: 20,
            padding: theme.spacing(2),
            paddingLeft: theme.spacing(2.5),
          }}
        >
          สร้างแบบฝึกหัด
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
            สร้างแบบฝึกหัด
          </Box>
          <Grid direction="row" spacing={2} direction="row">
            <Grid item sx={{ textAlign: "center" }}>
              <TextField
                inputProps={{style: {fontFamily: "Kanit"}}} 
                InputLabelProps={{style: {fontFamily: "Kanit"}}}
                label="หัวข้อแบบฝึกหัด"
                placeholder="หัวข้อแบบฝึกหัด"
                sx={{ width: "85%" }}
                multiline
              />
                <Box
                  sx={{
                    paddingLeft: { xs: theme.spacing(2), md: theme.spacing(10) },
                  }}
                >
                </Box>
              
              
              <TextField
                inputProps={{style: {fontFamily: "Kanit"}}} 
                InputLabelProps={{style: {fontFamily: "Kanit"}}}
                label="โจทย์"
                placeholder="โจทย์"
                sx={{ paddingTop: theme.spacing(5), paddingBottom: theme.spacing(3),  width: "85%" }}
                multiline
              />
              <Box>
              <img 
                src="https://www.img.in.th/images/0f9b48e6133c8f997195402b9ed492f9.png" 
                alt="0f9b48e6133c8f997195402b9ed492f9.png" 
                width="60%"
                border="2" />
              </Box>

              <TextField
                inputProps={{style: {fontFamily: "Kanit"}}} 
                InputLabelProps={{style: {fontFamily: "Kanit"}}}
                label="คำตอบ"
                placeholder="คำตอบ"
                sx={{ paddingTop: theme.spacing(3), paddingBottom: theme.spacing(2), width: "85%"}}
                multiline
              />
              <TextField
                inputProps={{style: {fontFamily: "Kanit"}}} 
                InputLabelProps={{style: {fontFamily: "Kanit"}}}
                label="ตัวเลือกที่ 1"
                placeholder="ตัวเลือกที่ 1"
                sx={{ paddingBottom: theme.spacing(2), width: "85%" }}
                multiline
              />
              <TextField
                inputProps={{style: {fontFamily: "Kanit"}}} 
                InputLabelProps={{style: {fontFamily: "Kanit"}}}
                label="ตัวเลือกที่ 2"
                placeholder="ตัวเลือกที่ 2"
                sx={{ paddingBottom: theme.spacing(1), width: "85%"}}
                multiline
              />
              <Grid>
                <Grid
                  item
                  xs={5}
                  md={6}
                  sx={{
                    textAlign: "center",
                    paddingRight: theme.spacing(6),
                    marginTop: theme.spacing(1),
                  }}
                >
                </Grid>
                <Grid
                  item
                  
                  sx={{
                  textAlign: "center",
                  margin: { xs: theme.spacing(1), md: theme.spacing(2) },
                  }}
                >
                <Button startIcon = {<AddCircleIcon />}
                  variant="contained"
                  sx={{
                    fontFamily: "Kanit",
                    width: "85%",
                    height: 'auto',
                    borderRadius: 4,
                    bgcolor: '#81DBEA',
                    paddingTop: theme.spacing(1),
                    paddingLeft: theme.spacing(1),
                    color:'#000000',
                  }}
                >
                    เพิ่มตัวเลือก
                </Button>
              </Grid>
            </Grid>
          </Grid>

            <Grid item container spacing={3}>
              <Grid
                item
                xs={7}
                md={6}
                sx={{
                  display: "flex",
                  textAlign: "center",
                  paddingRight: theme.spacing(6),
                  marginTop: theme.spacing(1),
                }}
              >
              </Grid>
              <Grid
                item
                xs={4}
                md={5}
                sx={{
                  textAlign: "center",
                  margin: { xs: theme.spacing(1), md: theme.spacing(3) },
                }}
              >
                <TextField
                  inputProps={{style: {fontFamily: "Kanit"}}} 
                  InputLabelProps={{style: {fontFamily: "Kanit"}}}
                  id="datetime-local"
                  label="กำหนดส่ง"
                  type="datetime-local"
                  defaultValue="2017-05-24T10:30"
                  sx={{
                    fontFamily: "Kanit", 
                    textAlign: "Left",
                    width: 250,
                    paddingRight: theme.spacing(1),
                  }}
                />
                <Button startIcon = {<SaveAltIcon />}
                  variant="contained"
                  sx={{
                    fontFamily: "Kanit",
                    width: '25%',
                    height: 'auto',
                    borderRadius: 3,
                    bgcolor: "#212121",
                    color: "#000000",
                    marginTop: theme.spacing(1),
                    paddingLeft: theme.spacing(2),
                    background: '#fff200',
                  }}
                >
                  บันทึก
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <Button startIcon = {<AddCircleIcon />}
            variant="contained"
            sx={{
              fontFamily: "Kanit",
              width: "30%",
              height: "85",
              borderRadius: 4,
              bgcolor: "#008037",
              marginLeft: theme.spacing(10),
              }}
        >
            
              เพิ่มโจทย์
        </Button>
      </Box>
      {/* <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,

            width: "90%",
            height: "50%",
            borderRadius: 3,
            marginLeft: "auto",
            marginRight: "auto",
          },
        }}
      >
        <Paper elevation={3} sx={{ padding: theme.spacing(5)}}>
            {main_quiz()}
        </Paper>
      </Box> */}
        <Box sx={{ margin: theme.spacing(3) }}> 
            {/* {main_quiz()} */}
        </Box>
    </Box>
  );
}

export default Makequiz_form