import React , { useState } from "react";
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
import Slide from "@mui/material/Slide";
import { Box, grid, spacing } from "@mui/system";
import { createTheme } from '@mui/material/styles';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import AssignmentIcon from '@mui/icons-material/Assignment';
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import Addchoice from './addchoice';
import Addproblem from './addproblem';


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

    const Alert = React.forwardRef(function Alert(props, ref) {
      return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const [open, setOpen] = useState(false)

    const [close, setClose] = useState(false);

    const clickonClose = (props) => {
      setClose(!props.clickcheckpoint);
    };
    
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

    const Transition = React.forwardRef(function Transition(props, ref) {
      return <Slide direction="up" ref={ref} {...props} />;
});

      setOpensnackbar(false);
    };


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
        <Paper elevation={3} >
          <Box
            component="h2"
            sx={{
              fontFamily: "Kanit",
              paddingLeft: { xs: theme.spacing(2), md: theme.spacing(10) },
            }}
          >
            สร้างแบบฝึกหัด
          </Box>
          <Grid direction="row" spacing={2}>
            <Grid item sx={{ textAlign: "center", marginBottom: theme.spacing(3),}}>
              <TextField
                inputProps={{style: {fontFamily: "Kanit"}}} 
                InputLabelProps={{style: {fontFamily: "Kanit"}}}
                label="หัวข้อแบบฝึกหัด"
                placeholder="หัวข้อแบบฝึกหัด"
                sx={{ width: "85%" }}
                multiline
              />
            </Grid>
          </Grid>
        </Paper>
      </Box>
  
        <Box> 
            <Addproblem/>
        </Box>
        <Grid item sx={{ textAlign: "center" }}>
        <Button startIcon = {<AssignmentIcon />}
                  variant="outlined"
                  href="/quizmade"
                  sx={{
                    fontFamily: "Kanit",
                    fontSize: 20,
                    width: '25%',
                    height: 'auto',
                    borderRadius: 3,
                    bgcolor: "#212121",
                    color: "#000000",
                    marginRight: theme.spacing(30),
                    marginBottom: theme.spacing(5),
                    marginTop: theme.spacing(3),
                    background: '#fff200',
                  }}
                >
                แบบฝึกหัด
        </Button>
        <Button startIcon = {<NoteAddIcon />} variant="outlined" onClick={handleClick}
                  sx={{
                    fontFamily: "Kanit",
                    fontSize: 20,
                    width: '25%',
                    height: 'auto',
                    borderRadius: 3,
                    bgcolor: "#212121",
                    color: "#000000",
                    marginLeft: theme.spacing(30),
                    marginBottom: theme.spacing(5),
                    marginTop: theme.spacing(3),
                    background: '#fff200',
                  }}
                >
                สร้างแบบฝึกหัด
          </Button>
              <Snackbar 
                open={opensnackbar} 
                autoHideDuration={2000} 
                onClose={handleClose}>
                <Alert onClose={handleClose} severity="success"  >
                  สร้างแบบฝึกหัดเรียบร้อยแล้ว
                </Alert>
              </Snackbar>
        </Grid>
        </Box>
  );
}

export default Makequiz_form