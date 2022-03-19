import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { Box, IconButton, Button, Grid, Paper, Stack, TextField, Typography, Avatar, Card,} from "@mui/material";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import Classroom_posts from "./classroom_posts";
import axiosInstance from "../config/axios";



const useStyles = makeStyles(({ theme = createTheme() }) => ({
  container: {
    width: "auto",
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(3),
    },
  },
  card_classroom: {
    maxWidth: 345,
    marginBottom: theme.spacing(3),
  },
}));

function Classroom_feed(props) {

  const theme = createTheme();

  const [posts, setPosts] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget)

    axiosInstance.post('classrooms/posts/', {
      content: data.get("content")
    }).then((res) => {
      console.log(res.data)
    })
  }

  useEffect( async () => {
    let post_result = await axiosInstance.get('classrooms/posts')
    console.log(post_result.data)
    setPosts(post_result.data)
  }, [])

  return (
    <Box component="div">
      <Box
        component="div"
        sx={{
          width: { xs: "60%", md: "15%" },
          height: "auto",
          alignItems: "center",
          bgcolor: "#008037",
          color: "white",
          display: "flex",
          paddingleft: theme.spacing(3),
          marginBottom: theme.spacing(3),
          marginLeft: { xs: theme.spacing(2), md: theme.spacing(8) },
          marginTop: { xs: theme.spacing(2) },
          borderRadius: 3,
        }}
      >
        <HistoryEduIcon sx={{ paddingLeft: theme.spacing(2), fontSize: 35 }} />
        <Typography
          sx={{
            display: "flex",
            fontWeight: 500,
            fontFamily: "Kanit",
            fontSize: 20,
            padding: theme.spacing(2),
            paddingLeft: theme.spacing(2.5),
          }}
        >
          240-124
        </Typography>
      </Box>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,

            width: "90%",
            height: "auto",
            borderRadius: 3,
            marginLeft: "auto",
            marginRight: "auto",
            paddingBottom: 2,
          },
        }}
      >
        <Paper elevation={3}>
          <Box
            component="h2"
            sx={{
              fontFamily: "Kanit",
              paddingLeft: { xs: theme.spacing(2), md: theme.spacing(10) },
            }}
          >
            ประกาศข้อความของคุณ
          </Box>
          <Grid direction="row" spacing={2} >
            <Grid item sx={{ textAlign: "center" }}>
              <TextField
                inputProps={{style: {fontFamily: "Kanit"}}} 
                InputLabelProps={{style: {fontFamily: "Kanit"}}}
                color="success"
                label="คุณกำลังคิดอะไรอยู่"
                placeholder="พิมพ์ข้อความที่ต้องการบอกสมาชิกในห้องเรียน"
                sx={{ fontFamily: "Kanit", width: "85%" }}
                id="content"
                name="content"
                multiline
              />
            </Grid>
            <Grid item container spacing={3}>
              <Grid
                item
                xs={7}
                md={12}
                justifyContent="right"
                sx={{
                  display: "flex",
                  textAlign: "center",
                  paddingRight: theme.spacing(6),
                  marginTop: theme.spacing(1),
                }}
              >
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    width: { xs: "100%", md: "20%" },
                    height: 50,
                    borderRadius: 4,
                    bgcolor: "#212121",
                    textAlight: "right",
                    marginLeft: theme.spacing(10),
                    marginBottom: theme.spacing(2),
                    marginTop: theme.spacing(1),
                    fontFamily: "Kanit",
                  }}
                >
                  โพสต์
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Box>
      {posts.map(r => <Classroom_posts posts={r} key={r.id}/>)}
    </Box>
  );
}

export default Classroom_feed;
