import React, { useState } from 'react'
import { Grid } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system'
import Mainfeed from '../components/mainfeed'
import Left_Menu from '../components/left_menu'
import Navbar from '../components/navbar'
import Avartar_mobile from '../components/avartar_mobile'

const useStyles = makeStyles(({ theme = useTheme() }) => ({
  container: {
    paddingTop: theme.spacing(3),
  },
  avartar_mobile: {
    alignItems: 'right', 
    justifyContent: 'flex-end',
    paddingTop: theme.spacing(5),
    paddingLeft: theme.spacing(12),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  gridavartar :{
    paddingTop: theme.spacing(10),
    border: "1px solid black", 
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }
}));


// const listItems = [
//   {
//     listIcon: <Home />,
//     listText: "Home"
//   },
//   {
//     listIcon: <AssignmentInd />,
//     listText: "Resume"
//   },
//   {
//     listIcon: <Apps />,
//     listText: "Portfolio"
//   },
//   {
//     listIcon: <ContactMail />,
//     listText: "Contacts"
//   }
// ];

function Home_teacher() {

  const classes = useStyles()

  const [open, setOpen] = useState(false)

  const toggleslider = () => {
    setOpen(!open)
  }

  // const leftslide_lst = () => {
  //   <Box>
  //     <List>
  //       {listItems.map((listItem, index) => (
  //         <ListItem className={classes.listItem} button key={index}>
  //           <ListItemIcon className={classes.listItem}>
  //             {listItem.listIcon}
  //           </ListItemIcon>
  //           <ListItemText primary={listItem.listText} />
  //         </ListItem>
  //       ))}
  //     </List>
  //   </Box>
  // }

  return (
    <Box position='flex'>
      <Navbar/>
      <Grid container item spacing={0.5}>
        <Grid item xs={1.8} sm={1.5} sx={{display: { xs: 'none', sm: 'flex' }}}>
          <Left_Menu />
        </Grid>
        <Grid item xs > 
          {/* <Box className={classes.box}>ห้องเรียน</Box> */}
          <Grid item classname={classes.gridavartar}>
            <Avartar_mobile className={classes.avartar_mobile}/>
          </Grid>
          <Grid >
            <Mainfeed/>
          </Grid>
        </Grid>
      </Grid>
    </Box>
    
  )
}

export default Home_teacher