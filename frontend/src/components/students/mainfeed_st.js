import { makeStyles } from '@mui/styles'
import { createTheme } from '@mui/material/styles';
import React from 'react'
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import FavoriteIcon from '@mui/icons-material/Favorite';

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

function Mainfeed_st() {

    const classes = useStyles();

    const theme = createTheme();

  return (
      <Container className={classes.container}>
        <Box component='div'
          sx={{ width: 160 , height: 'auto', alignItems: 'center',
                bgcolor: '#008037', color: 'white', display: 'flex',
                paddingleft: theme.spacing(3), marginBottom: theme.spacing(3),
                borderRadius: 3, }}>
          <SchoolIcon sx={{ paddingLeft: theme.spacing(2) }}/>
          <Typography 
            sx={{ fontFamily: "Kanit", display:'flex' , fontWeight: 500 ,
                  padding: theme.spacing(2) , paddingLeft: theme.spacing(2.5)}}>
            ห้องเรียน
          </Typography>
        </Box>
        <Box>
          <Card sx = {{background: 'linear-gradient(45deg, #cfd7fd 30%, #a1e7db 90%)' }} className={classes.card_classroom}>
            <CardActionArea href='/classroom_st'>
              <CardMedia
              component="img"
              alt="green iguana"
              height="100"
              image="https://www.img.in.th/images/5c82f85a69a47c74cf09dedd00fd4890.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Kanit", fontWeight: 500 }}>
                  240-124
                </Typography>
                <Typography gutterBottom variant="body2" component="div" sx={{ fontFamily: "Kanit", fontWeight: 500 }}>
                  ห้องเรียนสำหรับคนรักโลก
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions CardActions>
              <Button sx={{ fontFamily: "Kanit" }} size="small">เข้าห้องเรียน</Button>
            </CardActions>
        </Card>
        </Box>
        <Box>
          <Card sx = {{background: 'linear-gradient(45deg, #ff7c7c 30%, #dd0b0e 90%)' }} className={classes.card_classroom}>
            <CardActionArea>
              <CardMedia
              component="img"
              height="100%"
              width="100%"
              src="https://www.img.in.th/images/94d979d914421959e394cb5ae806dcae.png" 
              alt="94d979d914421959e394cb5ae806dcae.png" 
              border="0" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Kanit", fontWeight: 500 }}>
                  Status : "Feel Fan" 
                </Typography>
                <Typography gutterBottom variant="body2" component="div" sx={{ fontFamily: "Kanit", fontWeight: 500 }}>
                  ห้องเรียนสำหรับคนโสด
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions CardActions>
              <Button startIcon = { <FavoriteIcon/> }
                sx={{ bgcolor: "error", fontFamily: "Kanit", color: '#ff0000' }} size="large">
                 เข้าสู่หัวใจ</Button>
            </CardActions>
        </Card>
        </Box>
      </Container>
  )
}

export default Mainfeed_st