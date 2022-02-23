import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, createTheme, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

function Add_classroomPopup_th(props) {

    const theme = createTheme()

  return (
    <Box>
      <Dialog open={props.Open} onClose={props.handleClose}>
        <DialogTitle sx={{ textAlign : 'center' }}>
            สร้างห้องเรียน
        </DialogTitle>
        <DialogContent sx={{ display: 'flex'}}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="ชื่อห้องเรียน"
            fullWidth
            variant="standard"
          />
            <Box sx={{ textAlign: 'right', paddingLeft: theme.spacing(3)}}>
                <FormControl sx={{ mt: 2, minWidth: 120 }}>
                <InputLabel htmlFor="max-width">จำนวนนักเรียน</InputLabel>
                <Select
                    autoFocus
                    // value={maxWidth}
                    // onChange={handleMaxWidthChange}
                    label="maxWidth"
                    inputProps={{
                    name: 'max-width',
                    id: 'max-width',
                    }}
                >
                    <MenuItem value="10">10</MenuItem>
                    <MenuItem value="20">20</MenuItem>
                    <MenuItem value="30">30</MenuItem>
                    <MenuItem value="40">40</MenuItem>
                    <MenuItem value="50">50</MenuItem>
                </Select>
                </FormControl>
            </Box>
        </DialogContent>
        <DialogActions >
          <Button variant="contained" color= "error" onClick={props.handleClose}>ยกเลิก</Button>
          <Button variant="contained" color="success" onClick={props.handleClose}>ยืนยันการสร้างห้องเรียน</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Add_classroomPopup_th