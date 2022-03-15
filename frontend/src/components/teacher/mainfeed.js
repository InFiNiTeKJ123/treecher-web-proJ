import { makeStyles } from '@mui/styles'
import { createTheme } from '@mui/material/styles';
import React from 'react'
import { Box, Button, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

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

function Mainfeed() {

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
            sx={{ display:'flex' , fontWeight: 500 , fontFamily: "Kanit" ,
                  padding: theme.spacing(2) , paddingLeft: theme.spacing(2.5)}}>
            ห้องเรียน
          </Typography>
        </Box>
        <Grid container sx={{ alignItems: "center" }}>
          <Card sx = {{background: 'linear-gradient(45deg, #a1e7db 30%, #77bb4c  90%)', flexDirection: 'column', marginRight: theme.spacing(4) }} className={classes.card_classroom}>
            <CardActionArea href='/classroom_th'>
              <CardMedia
              component="img"
              alt="green iguana"
              height="250"
              width="125"
              image="https://www.img.in.th/images/5c82f85a69a47c74cf09dedd00fd4890.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Kanit", fontWeight: 500  }}>
                  240-124
                </Typography>
                <Typography gutterBottom variant="body2" component="div" sx={{ fontFamily: "Kanit", fontWeight: 500 }}>
                  ห้องเรียนสำหรับคนรักโลก
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions CardActions>
              <Button sx={{ fontFamily: "Kanit", color:"#008037" }} size="small" href='/classroom_th' >เข้าห้องเรียน</Button>
            </CardActions>
          </Card>
      
          <Card sx = {{background: 'linear-gradient(45deg, #ff6868 30%, #efc2cc  80%)', flexDirection: 'column', marginRight: theme.spacing(4) }} className={classes.card_classroom}>
              <CardActionArea href='/classroom_th'>
                <CardMedia
                component="img"
                alt="green iguana"
                height="250"
                width="125"
                image="https://www.img.in.th/images/7318bff9408bfd1dddf7fe3c0539c1a8.png"/>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Kanit", fontWeight: 500 }}>
                    502-002
                  </Typography>
                  <Typography gutterBottom variant="body2" component="div" sx={{ fontFamily: "Kanit", fontWeight: 500 }}>
                    ห้องเรียนดนตรี
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions CardActions>
                <Button sx={{ fontFamily: "Kanit", color:"#000000" }} size="small" href='/classroom_th' >เข้าห้องเรียน</Button>
              </CardActions>
            </Card>

          <Card sx = {{background: 'linear-gradient(45deg, #ffc587 30%, #ecff84 60%)', flexDirection: 'column' , marginRight: theme.spacing(4) }} className={classes.card_classroom}>
            <CardActionArea href='/classroom_th'>
              <CardMedia
              component="img"
              alt="green iguana"
              height="250"
              width="125"
              image="https://www.img.in.th/images/c8efa1ac57689492fd93e235b6f8d3b9.png"/>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Kanit", fontWeight: 500 }}>
                  001-103
                </Typography>
                <Typography gutterBottom variant="body2" component="div" sx={{ fontFamily: "Kanit", fontWeight: 500 }}>
                  ห้องแนะแนว
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions CardActions>
              <Button sx={{ fontFamily: "Kanit", color:"#000000" }} size="small" href='/classroom_th' >เข้าห้องเรียน</Button>
            </CardActions>
          </Card>

          <Card sx = {{background: 'linear-gradient(45deg, #af4fff 30%,#5396fc  60%)', flexDirection: 'column' , marginRight: theme.spacing(4) }} className={classes.card_classroom}>
            <CardActionArea href='/classroom_th'>
              <CardMedia
              component="img"
              alt="green iguana"
              height="250"
              width="125"
              image="https://www.img.in.th/images/8174a40842545887fd91f9dc8df9adb9.png"/>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Kanit", fontWeight: 500, color:"#ffffff" }}>
                  320-005
                </Typography>
                <Typography gutterBottom variant="body2" component="div" sx={{ fontFamily: "Kanit", fontWeight: 500, color:"#ffffff" }}>
                  ห้องเรียนดาราศาสตร์
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions CardActions>
              <Button sx={{ fontFamily: "Kanit", color:"#000000" }} size="small" href='/classroom_th' >เข้าห้องเรียน</Button>
            </CardActions>
          </Card>
        </Grid>
      </Container>
  )
}

export default Mainfeed