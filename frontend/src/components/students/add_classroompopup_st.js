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
        <DialogTitle sx={{ textAlign : 'center' }}>
          {"รหัสห้องเรียน"}
          </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="รหัสห้องเรียน"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color= "error" onClick={props.handleClose}>ยกเลิก</Button>
          <Button variant="contained" color="success" onClick={props.handleClose}>ยินยัน</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Add_classroomPopup_st