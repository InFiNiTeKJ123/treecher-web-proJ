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

import FilterVintageIcon from "@mui/icons-material/FilterVintage";



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
        <FilterVintageIcon sx={{ paddingLeft: theme.spacing(2), fontSize: 35 }} />
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
          คะแนน
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
            คะแนน
          </Box>
          




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
            {/* {main_quiz()} */}
        </Box>
    </Box>
  );
}

export default Makequiz_form