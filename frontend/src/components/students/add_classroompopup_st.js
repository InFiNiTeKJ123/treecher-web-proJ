import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';

function Add_classroomPopup_st(props) {

  return (
    <Box>
      <Dialog open={props.Open} onClose={props.handleClose}>
        <DialogTitle sx={{ textAlign : 'center', fontFamily: "Kanit" }}>
          {"รหัสห้องเรียน"}
          </DialogTitle>
        <DialogContent >
          <TextField
            inputProps={{style: {fontFamily: "Kanit"}}} 
            InputLabelProps={{style: {fontFamily: "Kanit"}}}
            autoFocus
            margin="dense"
            id="name"
            label="รหัสห้องเรียน"
            fullWidth
            variant="standard"
            color="success"
          />
        </DialogContent>
        <DialogActions >
          <Button variant="contained" color= "error" sx={{ fontFamily: "Kanit" }} onClick={props.handleClose}>ยกเลิก</Button>
          <Button variant="contained" color="success" sx={{ fontFamily: "Kanit" }} onClick={props.handleClose}>ยินยัน</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Add_classroomPopup_st