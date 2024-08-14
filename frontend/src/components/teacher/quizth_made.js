import { makeStyles } from '@mui/styles'
import { createTheme } from '@mui/material/styles';
import React, { useEffect, useState } from 'react'
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Typography, Grid, IconButton } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AddIcon from '@mui/icons-material/Add';
import MuiAlert from '@mui/material/Alert';
import Quiz_popup1 from '../quiz_popup1';
import axiosInstance from '../../config/axios';
import Quiz_logo from '../../assets/Quiz.png';


const useStyles = makeStyles(({ theme = createTheme() }) => ({
    container: {
      width: 'auto', 
      marginTop: theme.spacing(3), 
      [theme.breakpoints.down("sm")]: {
        paddingTop: theme.spacing(3),
      }
    },
    card_classroom: {
      maxWidth: 345 ,
      marginBottom: theme.spacing(3)
    }
  }));

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Quizth_made(props) {

    const classes = useStyles();

    const theme = createTheme();

    const [QuizList, setQuizList] = useState([])

    //! axios
    useEffect( async () => {
      let res = await axiosInstance.get('classrooms/quiz')
      console.log(res.data[0])
      setQuizList(res.data[0])
    } ,[])

    const [open1, setOpen1] = useState(false)
  
    const handleOpenPopup1 = () => {
      setOpen1(true)
    }
  
    const handleClosePopup1 = () => {
      setOpen1(false)
    }

   return (
      <Container className={classes.container}>
        <Box component='div'
          sx={{ width: { xs: "65%", sm: "28%" ,md: "16%" } , height: 'auto', alignItems: 'center',
                bgcolor: '#008037', color: 'white', display: 'flex',
                paddingleft: theme.spacing(3), marginBottom: theme.spacing(3),
                borderRadius: 3, }}>
          <AssignmentIcon sx={{ paddingLeft: theme.spacing(2) }}/>
          <Typography 
            sx={{ fontFamily : "Kanit", display:'flex' , fontWeight: 500 ,
                  padding: theme.spacing(2) , paddingLeft: theme.spacing(2)}}>
            แบบฝึกหัด
          </Typography>
          <IconButton >
            <AddIcon sx={{ color: "white"}}/>
          </IconButton>
        </Box>
        
        <Grid container sx={{ alignItems: "center", pl:{ xs: 5 , md: 2} }}>
                  <Card sx = {{background: 'linear-gradient(45deg, #a1e7db 30%, #7ad154 90%)', marginRight: theme.spacing(4) }}  className={classes.card_classroom}>
                    <CardActionArea onClick={handleOpenPopup1}>
                      <CardMedia
                      component="img"
                      alt="Quiz logo"
                      height="250"
                      width="125"
                      image={Quiz_logo}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Kanit" ,fontWeight: 500 }}>
                          {QuizList.title}
                        </Typography>
                        <Typography  gutterBottom variant="body2" component="div" sx={{ fontFamily: "Kanit", fontWeight: 500 }}>
                          {QuizList.content}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions CardActions onClick={handleOpenPopup1}>
                      <Button sx={{ fontFamily: "Kanit"}} size="small">เข้าทำควิซ</Button>
                    </CardActions>
                    <Quiz_popup1 Open={open1} setopen={setOpen1} handleclose={handleClosePopup1} />
                </Card>

               </Grid>
      </Container>
  )
}

export default Quizth_made