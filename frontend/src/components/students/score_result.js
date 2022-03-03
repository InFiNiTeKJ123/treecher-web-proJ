import { makeStyles } from '@mui/styles'
import { createTheme } from '@mui/material/styles';
import React from 'react'
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';

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

function Score_result(props) {

    const classes = useStyles();

    const theme = createTheme();

  return (
      <Container className={classes.container}>
        <Box component='div'
          sx={{ width: 160 , height: 'auto', alignItems: 'center',
                bgcolor: '#008037', color: 'white', display: 'flex',
                paddingleft: theme.spacing(3), marginBottom: theme.spacing(3),
                borderRadius: 3, }}>
          <FilterVintageIcon sx={{ paddingLeft: theme.spacing(2) }}/>
          <Typography
           
            sx={{ fontFamily: "Kanit", display:'flex' , fontWeight: 500 ,
                  padding: theme.spacing(2) , paddingLeft: theme.spacing(2.5)}}>
            คะแนน
            
          </Typography>
        </Box>
        <Box>
          <Card className={classes.card_classroom}>
            <CardActionArea onClick={props.Openpopup}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Kanit", fontWeight: 500 }}>
                  คะแนนแบบฝึกหัดที่ 1 
                </Typography>
                <Typography gutterBottom variant="h3" component="div" sx={{ fontFamily: "Kanit", fontWeight: 500 }}>
                  10/10
                </Typography>
              </CardContent>
            </CardActionArea>
        </Card>
        </Box>
        <Box>
          <Card className={classes.card_classroom}>
            <CardActionArea onClick={props.Openpopup}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Kanit", fontWeight: 500 }}>
                  คะแนนแบบฝึกหัดที่ 2 
                </Typography>
                <Typography gutterBottom variant="h3" component="div" sx={{ fontFamily: "Kanit", fontWeight: 500 }}>
                  9/10
                </Typography>
              </CardContent>
            </CardActionArea>
        </Card>
        </Box>
      </Container>
  )
}

export default Score_result