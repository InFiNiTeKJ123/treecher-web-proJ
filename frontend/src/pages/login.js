import React from "react";
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
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../App.css";

function Login() {
  const theme = createTheme();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (

      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: { xs: 0, sm: 5 },
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#F5F5F5",
              padding: 2,
              borderRadius: 10,
              border: 5,
              borderColor: "green",
              alignItems: "center",
            }}
          >
            <Container
              sx={{
                marginTop: { xs: 0, sm: 6 },
                display: "flex",
                padding: 2,
                borderRadius: 5,
                flexDirection: "column",
                backgroundColor: "success.main",
                alignItems: "center",
              }}
            >
              <Avatar
                sx={{ width: 150, height: 150, backgroundColor: "success.main" }}
              >
                <img
                  src="https://www.img.in.th/images/5c82f85a69a47c74cf09dedd00fd4890.png"
                  alt="TreeCherLOGO.png"
                  border="20"
                  width="200"
                />
              </Avatar>
              <Typography
                component="h1"
                variant="h5"
                color="white"
                sx={{ paddingTop: theme.spacing(2), fontFamily: "Kanit" }}
              >
                TREECHER
              </Typography>
            </Container>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
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
                control={<Checkbox value="remember" color="success" />}
                label="จดจำรหัสผ่าน"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="success"
                href="http://localhost:3000/home_st"
                sx={{ mt: 3, mb: 2 }}
              >
                เข้าสู่ระบบ
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                sx={{ mt: 3, mb: 2 }}
              >
                ลงทะเบียน
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>

  );
}

export default Login;
