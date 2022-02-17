import React from 'react';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Container } from '@mui/material';


const useStyles = makeStyles(({theme = useTheme()}) => ({
    container: {
        border: "1px solid #ece7e7"
    },
    paper: {
        borderRadius: theme.shape.borderRadius,
        justifyContent: 'flex-end',
        margin: 'auto',
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        [theme.breakpoints.up("sm")]: {
            display: "none",
          },
    }
}))


export default function ComplexGrid() {

    const classes = useStyles()

  return (
    <Container className={classes.container}>
        <Paper className={classes.paper}>
        <Grid container spacing={2}>
            <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
            </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                    Standard license
                </Typography>
                <Typography variant="body2" gutterBottom>
                    Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    ID: 1030114
                </Typography>
                </Grid>
                <Grid item>
                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                    Remove
                </Typography>
                </Grid>
            </Grid>
            <Grid item>
                <Typography variant="subtitle1" component="div">
                $19.00
                </Typography>
            </Grid>
            </Grid>
        </Grid>
        </Paper>
    </Container>
  );
}
// import React from 'react'
// import { makeStyles } from '@mui/styles'
// import { useTheme } from '@mui/material/styles';
// import { Box } from '@mui/system';
// import { Container } from '@mui/material';

// const useStyles = makeStyles(({ theme = useTheme() }) => ({
//     container: {
//         height: "10%",
//         paddingTop: theme.spacing(3),
//         paddingLeft: theme.spacing(3)
//     },
//   }));


// function Avartar_mobile() {

//     const classes = useStyles()

//   return (
//     <Container className={classes.container} sx={{alignItems: 'right'}} >
//         <Box>
//             avartar_mobile
//         </Box>
//     </Container>
//   )
// }

// export default Avartar_mobile