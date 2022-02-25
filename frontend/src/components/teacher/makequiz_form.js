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
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

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
                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 500 }}>
                    แบบฝึกหัด
                </Typography>
                <Typography gutterBottom variant="body2" component="div" sx={{ fontWeight: 500 }}>
                    มารดน้ำต้นไม้กันเถอะ
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions CardActions >
                <Button size="small">เข้าทำควิซ</Button>
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
              paddingLeft: { xs: theme.spacing(2), md: theme.spacing(10) },
            }}
          >
            สร้างแบบฝึกหัด
          </Box>
          <Grid direction="row" spacing={2} direction="row">
            <Grid item sx={{ textAlign: "center" }}>
              <TextField
                label="คุณกำลังคิดอะไรอยู่"
                placeholder="พิมพ์ข้อความที่ต้องการบอกสมาชิกในห้องเรียน"
                sx={{ width: "85%" }}
                multiline
              />
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
                <Button
                  variant="contained"
                  sx={{
                    width: "auto",
                    height: "auto",
                    borderRadius: 4,
                    bgcolor: "#212121",
                    marginLeft: { xs: theme.spacing(3), md: theme.spacing(10) },
                    fontSize: "75%",
                  }}
                >
                  <AttachFileIcon sx={{ fontSize: "200%" }} />
                  แนบไฟล์
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    width: "auto",
                    height: "auto",
                    borderRadius: 4,
                    bgcolor: "#212121",
                    marginLeft: theme.spacing(1),
                    fontSize: "75%",
                  }}
                >
                  <AddPhotoAlternateIcon />
                  แนบรูปภาพ
                </Button>
              </Grid>
              <Grid
                item
                xs={4}
                md={5}
                sx={{
                  textAlign: "right",
                  marginRight: { xs: theme.spacing(1), md: theme.spacing(3) },
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    width: { xs: "100%", md: "30%" },
                    height: 50,
                    borderRadius: 4,
                    bgcolor: "#212121",
                    marginTop: theme.spacing(1),
                  }}
                >
                  โพสต์
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
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
            {main_quiz()}
        </Box>
    </Box>
  );
}

export default Makequiz_form