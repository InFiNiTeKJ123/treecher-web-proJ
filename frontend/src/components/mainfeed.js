import { makeStyles } from '@mui/styles'
import { useTheme } from '@mui/material/styles';
import React from 'react'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material';

const useStyles = makeStyles(({ theme = useTheme() }) => ({
    container: {
      paddingTop: theme.spacing(3),
    },
  }));

function Mainfeed() {

    const classes = useStyles()

  return (
    <Container className={classes.container}>
        <Box>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
          />
            <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
        </Box>
    </Container>
  )
}

export default Mainfeed