import React, { useState } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Box,
  Typography,
  Container,
  Grid,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../App.css";
import { Navigate, useNavigate } from "react-router-dom";
import axiosInstance from "../config/axios";


function Login() {
  const theme = createTheme();

  const navigate = useNavigate();

  const initialFormData = Object.freeze({
		email: '',
		password: '',
	});

	const [formData, updateFormData] = useState(initialFormData);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		});
	};

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    const data = new FormData(event.currentTarget);
    
    axiosInstance.post(`token/`, {
      email: data.get('email'),
      password: data.get('password'),
    }).then((res) => {
      console.log(res.data.access)
      localStorage.setItem('access_token', res.data.access);
      localStorage.setItem('refresh_token', res.data.refresh);
      axiosInstance.defaults.headers['Authorization'] =
        'JWT ' + localStorage.getItem('access_token');

      axiosInstance.get(`user/whoami`).then((res) => {
        console.log(res.data)
        if(res.data){
          if(res.data.is_student){
            console.log("Hello Student", res.data.first_name);
            navigate('/home_st', { replace: true })
          }else{
            console.log("Hello Teacher", res.data.first_name)
            navigate('/home_th', { replace: true })
          }
        }
      })
    })
  };

  return (
      <ThemeProvider theme={theme} >
      <Container component="body" maxwidth="lg" >
      <Container component="main"  maxWidth="xs" >
        <CssBaseline />
        <Box
  
            sx={{
              marginTop: { xs: 0, sm: 5 },
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#F5F5F5",
              padding: 2,
              borderRadius: 10,
              // border: 5,
              borderColor: "green",
              alignItems: "center",
            }}
        >
          <Container 
            sx={{
              marginTop: { xs: 0, sm: 3 },
              display: "flex",
              flexDirection: "column",
              backgroundColor: "success.main",
              padding: 2,
              borderRadius: 10,
              border: 5,
              borderColor: "green",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ width: 150, height: 150, backgroundColor: "success.main" }}>
              <img
                  src="https://www.img.in.th/images/5c82f85a69a47c74cf09dedd00fd4890.png"
                  alt="TreeCherLOGO.png"
                  border="20"
                  width="200"
                />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ color: "white", marginTop: 2}}>
              TREECHER
            </Typography>
          </Container>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
                inputProps={{style: {fontFamily: "Kanit"}}} 
                InputLabelProps={{style: {fontFamily: "Kanit"}}}
                margin="normal"
                required
                fullWidth
                id="email"
                label="อีเมล"
                name="email"
                autoComplete="email"
                color="success"
                autoFocus
            />
            <TextField
                inputProps={{style: {fontFamily: "Kanit"}}} 
                InputLabelProps={{style: {fontFamily: "Kanit"}}}
                margin="normal"
                required
                fullWidth
                name="password"
                label="รหัสผ่าน"
                type="password"
                id="password"
                autoComplete="current-password"
                color="success"
            />
            <FormControlLabel 
              control={<Checkbox value="remember" color="primary" />}
              label={
                <Typography sx={{ fontFamily: "Kanit" }}>
                  จดจำรหัสผ่าน
                </Typography>
              }
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="success"
              sx={{ mt: 3, mb: 2 }}
            >
                เข้าสู่ระบบ
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              href="/signup"
              sx={{ mt: 3, mb: 2 }}
            >
              ลงทะเบียน
            </Button>
          </Box>
        </Box>
      </Container>
      </Container>
    </ThemeProvider>

  );
}

export default Login;
