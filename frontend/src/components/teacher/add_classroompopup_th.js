import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, createTheme, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

function Add_classroomPopup_th(props) {

    const theme = createTheme()

  return (
    <Box >
      <Dialog open={props.Open} onClose={props.handleClose} >
        <DialogTitle sx={{ textAlign : 'center', fontFamily: "Kanit"  }}>
            สร้างห้องเรียน
        </DialogTitle>
        <DialogContent sx={{ display: 'flex', fontFamily: "Kanit"}}>
          <TextField
            inputProps={{style: {fontFamily: "Kanit"}}} 
            InputLabelProps={{style: {fontFamily: "Kanit"}}}
            autoFocus
            margin="dense"
            id="name"
            label="ชื่อห้องเรียน"
            fullWidth
            variant="standard"
          />
            
        </DialogContent>
        <DialogActions >
          <Button sx={{ fontFamily: "Kanit" }} variant="contained" color= "error" onClick={props.handleClose}>ยกเลิก</Button>
          <Button sx={{ fontFamily: "Kanit" }} variant="contained" color="success" onClick={props.handleClose}>ยืนยัน</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Add_classroomPopup_th