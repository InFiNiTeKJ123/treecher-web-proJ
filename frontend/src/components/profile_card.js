import React from 'react'
import { Avatar, Box, Button, createTheme, IconButton, Typography } from "@mui/material";

function Profile_card(props) {
  return (
    <Box component="div" 
        sx={{ height: "627px", p: "15px",  borderRadius: 25, background: "#fff", boxShadow: "15px 10px 25px 0px  #3fa1a9"}}>
        <Box component="form" sx={{ textAlign: "center"}} >
            <Typography variant='h4' sx={{ textAlign: "center", fontWeight: "bold", fontFamily: "Kanit", mt: 3, mb:3 }}>
                โปรไฟล์
            </Typography>
            <Box component="div"  sx={{ textAlign: "center" }}>
                <Avatar sx={{ width: 200, height: 200, backgroundColor: "success.main" , ml: 60, mb: 3}}>
                    <img
                        src="https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true"
                        alt="TreeCherLOGO.png"
                        border="20"
                        width="200"
                    />
                </Avatar>
            </Box>
            <Typography variant='h6' sx={{ fontFamily: "Kanit",mb: 3 }}>
                {props.user.first_name} {props.user.last_name}<br/>
                {props.user.email}
            </Typography>
            <Button variant='contained' color="success" sx={{ borderRadius: 20 , width: "20%" ,p: 2, fontFamily: "Kanit"}}>
                แก้ไขโปรไฟล์
            </Button>
        </Box>
    </Box>
  )
}

export default Profile_card