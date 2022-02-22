import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Box, createTheme } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Quiz_popup(props) {

  const theme = createTheme()

  return (
    <Box>
      <Dialog
        open={props.Open}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.handleclose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"บันทึกการรดน้ำต้นไม้ครั้งที่ 1"}</DialogTitle>
        <DialogContent>
          
        <Box component='div'
         sx={{ textAlign : 'center'}}>
            <DialogContentText id="alert-dialog-slide-description">
            วันนี้นักเรียนรดน้ำต้นไม้แล้วหรือยังคะ
            </DialogContentText>
        </Box>
        <Box component='div'
         sx={{ textAlign : 'center'}}>
           <img 
            src="https://www.img.in.th/images/83b7c243c2ca76e853ca96df4c2e3514.png" 
            alt="quiztree.png" 
            height = "225"
            width = "225" />
        </Box>
        </DialogContent>
        <DialogActions>
          <Button startIcon = {<CheckCircleOutlineIcon/>} variant="contained" color="success" onClick={props.handleclose}>รดน้ำต้นไม้แล้ว</Button>
          <Button startIcon = {<DoNotDisturbAltIcon/>} variant="contained" color="error" onClick={props.handleclose}>ว้าแย่จังยังไม่รดน้ำต้นไม้เลย</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Quiz_popup