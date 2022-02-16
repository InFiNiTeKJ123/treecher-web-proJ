import { Box } from '@mui/system'
import React from 'react'
import Left_Menu from '../components/left_menu'
import Navbar from '../components/navbar'

// const useStyles = makeStyles((theme) => {
//     pass
// })

function Home_teacher() {
  return (
  <Box sx={{ flexGrow: 1 }}>
    <Navbar />
    <Left_Menu /> 
  </Box>
    
  )
}

export default Home_teacher