import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import axiosInstance from '../../config/axios';
import { useNavigate } from 'react-router-dom';

function Join_classroomPopup_st(props) {

  const navigate = useNavigate()

  const { register, handleSubmit , formState: { errors } } = useForm();
  const Submit_JoinClassroom = (data) => {
    console.log(data.classroom_code)
    props.setopen(false)

    axiosInstance.post('classrooms/join/',{
      join_code: data.classroom_code
    }).then(
      navigate('/home_st', { replace: true })
    )
  }
  
  return (
    <Box>
      <Dialog open={props.Open} onClose={props.handleClose}>
        <DialogTitle sx={{ textAlign : 'center', fontFamily: "Kanit" }}>
          {"รหัสห้องเรียน"}
          </DialogTitle>
        <Box component="form" noValidate onSubmit={handleSubmit(Submit_JoinClassroom)}>
          <DialogContent >
            <TextField
              inputProps={{style: {fontFamily: "Kanit"}}} 
              InputLabelProps={{style: {fontFamily: "Kanit"}}}
              autoFocus
              margin="dense"
              id="classroom_code"
              label="รหัสห้องเรียน"
              fullWidth
              variant="standard"
              color="success"
              {...register("classroom_code", {required: "กรุณาใส่รหัสห้องเรียน", 
              minLength: {
                value: 7,
                message: "รหัสเข้าห้องเรียนต้องไม่น้อนกว่า 7 ตัวอักษร"
             }})}
                error={!!errors?.classroom_code}
                helperText={errors?.classroom_code ? errors.classroom_code.message : null}
            />
          </DialogContent>
          <DialogActions >
            <Button variant="contained" color= "error" sx={{ fontFamily: "Kanit" }} onClick={props.handleClose}>ยกเลิก</Button>
            <Button type="submit" variant="contained" color="success" sx={{ fontFamily: "Kanit" }} >ยินยัน</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
}

export default Join_classroomPopup_st