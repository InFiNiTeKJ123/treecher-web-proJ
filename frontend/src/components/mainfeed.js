import { makeStyles, ThemeProvider } from '@mui/styles'
import { useTheme, createTheme } from '@mui/material/styles';
import React from 'react'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

const useStyles = makeStyles(({ theme = useTheme() }) => ({
    container: {
      paddingTop: theme.spacing(3),
    },
  }));

function Mainfeed() {

    const classes = useStyles();

    const theme = createTheme();

  return (
      <Container className={classes.container}>
        <Box component='div'
          sx={{ width: 100 , height: 'auto', 
                bgcolor: '#008037', color: 'white', 
                paddingleft: theme.spacing(3), marginBottom: theme.spacing(3),
                borderRadius: 3, }}>
          <SchoolIcon sx={{ display: '', paddingLeft: theme.spacing(2), paddingTop: theme.spacing(2)}}/>
          <Typography 
            sx={{ display:'flex' ,fontsize: '10', fontWeight: 500 ,
                  padding: theme.spacing(2) , paddingLeft: theme.spacing(2.5)}}>
            ห้องเรียน
          </Typography>
        </Box>
        <Box>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
            component="img"
            alt="green iguana"
            height="100"
            image="https://www.img.in.th/images/5c82f85a69a47c74cf09dedd00fd4890.png"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              240-124
            </Typography>
          </CardContent>
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