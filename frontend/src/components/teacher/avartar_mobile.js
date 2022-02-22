import React from 'react';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Avatar , Container } from '@mui/material';

const useStyles = makeStyles(({theme = useTheme()}) => ({
    container: {
        paddingTop: theme.spacing(5),
        paddingLeft: theme.spacing(10),
    },
    paper: {
        borderRadius: 25,
        p: 2,
        width: '100%',
        maxWidth: 'lg',
        [theme.breakpoints.up("sm")]: {
            display: "none",
          },
    },
    gridavatar: {
        paddingRight: theme.spacing(3)
   },
    text_teacher:{
        alignItem: 'center',
        paddingLeft: theme.spacing(2),
        color: 'white', 
    },
    text:{
        alignItem: 'center',
        paddingLeft: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        color: '#fcf872', 
    },
}))


function Avartar_mobile() {

    const classes = useStyles()

  return (
    <Container className={classes.container}>
        <Paper className={classes.paper} sx={{ bgcolor: '#008037'}}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="h4" component="div" className={classes.text_teacher}>
                                คุณครู
                            </Typography>
                            <Typography variant="body2" gutterBottom className={classes.text} >
                                เพ็ชรัตน์ สุริยะไชย
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridavatar}>
                        <Avatar sx={{ fontWeight: 'bold',bgcolor: '#81DBEA',color:'#000000', display: { xs: 'flex', sm: 'none' }}} size="small" aria-label="avatar">
                                พ
                        </Avatar>
                    </Grid>
                </Grid>
            </Grid>
    </Paper>
</Container>
  );
}

export default Avartar_mobile;


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