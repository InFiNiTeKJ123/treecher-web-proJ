import { makeStyles } from '@mui/styles'
import { createTheme } from '@mui/material/styles';
import React from 'react'
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Typography, Grid } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';

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
  

function Quizmade(props) {

    const classes = useStyles();

    const theme = createTheme();

  return (
      <Container className={classes.container}>
        <Box component='div'
          sx={{ width: 250 , height: 'auto', alignItems: 'center',
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
        <Box>
          <Card className={classes.card_classroom}>
            <CardActionArea onClick={props.Openpopup}>
              <CardMedia
              component="img"
              alt="green iguana"
              height="100"
              image="https://www.img.in.th/images/83b7c243c2ca76e853ca96df4c2e3514.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Kanit" ,fontWeight: 500 }}>
                  แบบฝึกหัด
                </Typography>
                <Typography  gutterBottom variant="body2" component="div" sx={{ fontFamily: "Kanit", fontWeight: 500 }}>
                  มารดน้ำต้นไม้กันเถอะ
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions CardActions onClick={props.Openpopup}>
              <Button sx={{ fontFamily: "Kanit"}} size="small">เข้าทำควิซ</Button>
            </CardActions>
        </Card>
        </Box>
        <Box>
          <Card className={classes.card_classroom}>
            <CardActionArea onClick={props.Openpopup}>
              <CardMedia
              component="img"
              alt="green iguana"
              height="100"
              image="https://www.img.in.th/images/83b7c243c2ca76e853ca96df4c2e3514.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Kanit" ,fontWeight: 500 }}>
                  แบบฝึกหัด
                </Typography>
                <Typography  gutterBottom variant="body2" component="div" sx={{ fontFamily: "Kanit", fontWeight: 500 }}>
                  มารดน้ำต้นไม้กันเถอะ
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions CardActions onClick={props.Openpopup}>
              <Button sx={{ fontFamily: "Kanit"}} size="small">เข้าทำควิซ</Button>
            </CardActions>
        </Card>
        </Box>
      </Container>
  )
}

export default Quizmade