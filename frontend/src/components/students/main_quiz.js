import { makeStyles } from '@mui/styles'
import { createTheme } from '@mui/material/styles';
import React, { useEffect, useState } from 'react'
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Typography, Grid } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';

import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import Quiz_popup2 from '../quiz_popup2';
import Quiz_popup1 from '../quiz_popup1';
import Quiz_popup3 from '../quiz_popup3';
import Quiz_popup4 from '../quiz_popup4';
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

function Main_quiz(props) {

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
  
    const [open2, setOpen2] = useState(false)
    
    const handleOpenPopup2 = () => {
      setOpen2(true)
    }
  
    const handleClosePopup2 = () => {
      setOpen2(false)
    }
  
    const [open3, setOpen3] = useState(false)
    
    const handleOpenPopup3 = () => {
      setOpen3(true)
    }
  
    const handleClosePopup3 = () => {
      setOpen3(false)
    }
  
    const [open4, setOpen4] = useState(false)
    
    const handleOpenPopup4 = () => {
      setOpen4(true)
    }
  
    const handleClosePopup4 = () => {
      setOpen4(false)
    }
  // popup

  // snackbar2

  const [opensnackbar2, setOpensnackbar2] = useState(false);

  const handleClick2 = () => {
    setOpensnackbar2(true);
    setOpen2(false)
  };

  const handleClose2 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpensnackbar2(false);
  };

  const Checkpoint2 = () => (
    <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={opensnackbar2} autoHideDuration={2000} onClose={handleClose2}>
          <Alert onClose={handleClose2} severity="success" sx={{ fontFamily: "Kanit", width: '100%' }}>
            เย้! คุณคือสุดยอดนักแยกขยะ
          </Alert>
        </Snackbar>
      </Stack>
  )

    // snackbar3

    const [opensnackbar3, setOpensnackbar3] = useState(false);

    const handleClick3 = () => {
      setOpensnackbar3(true);
      setOpen3(false)
    };
  
    const handleClose3 = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpensnackbar3(false);
    };
  
    const Checkpoint3 = () => (
      <Stack spacing={3} sx={{ width: '100%' }}>
          <Snackbar open={opensnackbar3} autoHideDuration={2000} onClose={handleClose3}>
            <Alert onClose={handleClose3} severity="success" sx={{ fontFamily: "Kanit", width: '100%' }}>
              เย้! คุณคือสุดยอดนักประหยัดพลังงาน
            </Alert>
          </Snackbar>
        </Stack>
    )

        // snackbar4

    const [opensnackbar4, setOpensnackbar4] = useState(false);

    const handleClick4 = () => {
      setOpensnackbar4(true);
      setOpen4(false)
    };
      
    const handleClose4 = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      
      setOpensnackbar4(false);
    };
      
    const Checkpoint4 = () => (
      <Stack spacing={4} sx={{ width: '100%' }}>
          <Snackbar open={opensnackbar4} autoHideDuration={2000} onClose={handleClose4}>
            <Alert onClose={handleClose4} severity="success" sx={{ fontFamily: "Kanit", width: '100%' }}>
              เย้! คุณใช้ไฟฟ้าอย่างปลอดภัยแล้ว
            </Alert>
          </Snackbar>
        </Stack>
    )
    

  return (
      <Container className={classes.container}>
        <Box component='div'
          sx={{ width: 160 , height: 'auto', alignItems: 'center',
                bgcolor: '#008037', color: 'white', display: 'flex',
                paddingleft: theme.spacing(3), marginBottom: theme.spacing(3),
                borderRadius: 3, }}>
          <AssignmentIcon sx={{ paddingLeft: theme.spacing(2) }}/>
          <Typography 
            sx={{ fontFamily : "Kanit", display:'flex' , fontWeight: 500 ,
                  padding: theme.spacing(2) , paddingLeft: theme.spacing(2.5)}}>
            แบบฝึกหัด
          </Typography>
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

export default Main_quiz