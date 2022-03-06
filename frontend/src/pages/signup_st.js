import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles"

const theme = createTheme();

const useStyles = makeStyles({
  icon: {
    fontSize: "100%",
    color: "white"
  },
  student_button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  teacher_button: {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  signup_button :{
    marginTop: 5,
    mt: 3, 
    mb: 2,
    background: 'linear-gradient(45deg, #3bc206 30%, #ebeb3b 95%)',
  }
  ,
})

function SignUp_ST() {

  const classes = useStyles()

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      firstname: data.get("firstName"),
      lastname: data.get("lastName") ,
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
            marginTop: { xs: 2, md: 4 },
            display: "flex",
            flexDirection: "column",
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
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  inputProps={{style: {fontFamily: "Kanit"}}} 
                  InputLabelProps={{style: {fontFamily: "Kanit"}}}
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="ชื่อ"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  inputProps={{style: {fontFamily: "Kanit"}}} 
                  InputLabelProps={{style: {fontFamily: "Kanit"}}}
                  required
                  fullWidth
                  id="lastName"
                  label="นามสกุล"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  inputProps={{style: {fontFamily: "Kanit"}}} 
                  InputLabelProps={{style: {fontFamily: "Kanit"}}}
                  required
                  fullWidth
                  id="email"
                  label="อีเมล"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  inputProps={{style: {fontFamily: "Kanit"}}} 
                  InputLabelProps={{style: {fontFamily: "Kanit"}}}
                  required
                  fullWidth
                  name="password"
                  label="รหัสผ่าน"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  inputProps={{style: {fontFamily: "Kanit"}}} 
                  InputLabelProps={{style: {fontFamily: "Kanit"}}}
                  required
                  fullWidth
                  name="password"
                  label="ยืนยันรหัสผ่าน"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            {/* <Grid
              container
              justifyContent="center"
              spacing={2}
              sx={{ marginTop: 1.5 }}
            >
              <Grid item>
                <Button variant="contained" color="success" size="large"
                        startIcon={<FaceRetouchingNaturalIcon />}
                        className={classes.teacher_button}
                        sx={{ fontFamily: "Kanit", fontSize: 18, fontWeight: "bold" , width: { xs: 130, md:180 },}}>
                  คุณครู
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="success" size="large"
                        startIcon={<ChildCareIcon />}
                        className={classes.student_button} 
                        sx={{ fontFamily: "Kanit", fontSize: 18, fontWeight: "bold", width: { xs: 130, md:180 },}}>
                  นักเรียน
                </Button>
              </Grid>
            </Grid> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.signup_button}
              sx={{ fontFamily: "Kanit", marginTop: 5, fontSize: 20, fontWeight: "bold" }}
            >
              ลงทะเบียน
            </Button>
            <Grid container justifyContent="flex-end" sx={{ marginTop: 2, marginBottom: 5 }}>
              <Grid item>
                <Link href="/login" variant="body2" sx={{ fontFamily: "Kanit" }}>
                  มีบัญชีอยู่แล้วใช่ไหม? ไปที่ล็อกอิน
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignUp_ST;
