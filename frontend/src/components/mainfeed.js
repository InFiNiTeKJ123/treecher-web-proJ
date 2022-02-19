import { makeStyles } from '@mui/styles'
import { createTheme } from '@mui/material/styles';
import React from 'react'
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

const useStyles = makeStyles(({ theme = createTheme() }) => ({
    container: {
      [theme.breakpoints.down("sm")]: {
        paddingTop: theme.spacing(3),
      }
    },
    boxclassroom: {
      width: 100 , height: 'auto', alignItems: 'center',
      bgcolor: '#008037', color: 'white', 
      paddingleft: theme.spacing(3), marginBottom: theme.spacing(3),
      borderRadius: 3,
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
            sx={{ display:'flex' , fontsize: 20, fontWeight: 500 ,
                  padding: theme.spacing(2) , paddingLeft: theme.spacing(2.5)}}>
            ห้องเรียน
          </Typography>
        </Box>
        <Box>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
              component="img"
              alt="green iguana"
              height="100"
              image="https://www.img.in.th/images/5c82f85a69a47c74cf09dedd00fd4890.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 500 }}>
                  240-124
                </Typography>
                <Typography gutterBottom variant="body2" component="div" sx={{ fontWeight: 500 }}>
                  ห้องเรียนสำหรับคนรักโลก
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions CardActions>
              <Button size="small">เข้าห้องเรียน</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
        </Box>
        <Box>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
              component="img"
              alt="green iguana"
              height="100"
              image="https://www.img.in.th/images/5c82f85a69a47c74cf09dedd00fd4890.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 500 }}>
                  240-124
                </Typography>
                <Typography gutterBottom variant="body2" component="div" sx={{ fontWeight: 500 }}>
                  ห้องเรียนสำหรับคนรักโลก
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions CardActions>
              <Button size="small">เข้าห้องเรียน</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
        </Box>
      </Container>
  )
}

export default Mainfeed