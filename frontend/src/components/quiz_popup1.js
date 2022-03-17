import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Box, createTheme, IconButton, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
import CancelIcon from "@mui/icons-material/Cancel";
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Quiz_popup1(props) {
  const theme = createTheme();

  const [close, setClose] = useState(false);

  const clickonClose = (props) => {
    setClose(!props.clickcheckpoint);
  };


  const [opensnackbar1, setOpensnackbar1] = useState(false);

  const handleClick1 = () => {
    setOpensnackbar1(true);
  };

  const handleClose1 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpensnackbar1(false);
  };

  const Checkpoint1 = () => (
    <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={opensnackbar1} autoHideDuration={6000} onClose={handleClose1}>
          <Alert onClose={handleClose1} severity="success" sx={{ fontFamily: "Kanit", width: '100%' }}>
            เย้ คุณได้รดน้ำต้นไม้แล้ว
          </Alert>
        </Snackbar>
      </Stack>
  )

  return (
    <Box>
      <Dialog
        open={props.Open}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.handleclose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{ m: 0, p: 2, display: "flex" }}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Kanit",
              marginLeft: theme.spacing(1),
              marginRight: theme.spacing(10),
              fontWeight: "bold",
            }}
          >
            {"แบบฝึกหัดการรดน้ำต้นไม้"}
          </Typography>
          <IconButton
            aria-label="CancelIcon"
            size="medium"
            // color="disabled"
            onClick={props.handleclose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              marginLeft: { xs: theme.spacing(5), md: theme.spacing(8) },
            }}
          >
            <CancelIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box component="div" sx={{ textAlign: "center" }}>
            <DialogContentText  sx={{ fontFamily: "Kanit" }} id="alert-dialog-slide-description">
              วันนี้นักเรียนรดน้ำต้นไม้แล้วหรือยังคะ ?
            </DialogContentText>
          </Box>
          <Box component="div" sx={{ textAlign: "center" }}>
            <Box
              component="img"
              src="https://www.img.in.th/images/816c46fd5f108794fd30c930e2577d3a.png"
              alt="wateringtheplant.png"
              sx={{ width: { xs: 150, md: 225 }, height: { xs: 150, md: 225 } }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            sx = {{ fontFamily: "Kanit"}}
            startIcon={<CheckCircleOutlineIcon />}
            variant="contained"
            color="success"
            onClick={props.clickcheckpoint}
            onClose={close}
            // onClose={}
            // onClick={(props) => {props.checkpoint && props.handleclose}}
          >
            ยืนยัน
          </Button>
          <Button 
            sx = {{ fontFamily: "Kanit"}}
            startIcon={<DoNotDisturbAltIcon />}
            variant="contained"
            color="error"
            onClick={props.handleclose}
          >
            ยกเลิก
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Quiz_popup1;


