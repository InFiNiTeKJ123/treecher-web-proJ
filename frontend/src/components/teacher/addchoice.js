import React , { useState } from "react";
import { Container } from '@mui/material';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@mui/styles'
import {Button,IconButton} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveIcon from '@mui/icons-material/Remove';
import { createTheme } from '@mui/material/styles';

const useStyles = makeStyles(({ theme = createTheme() }) => ({
  container: {
    width: 'auto', 
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(3),
    }
  },
  card_classroom: {
    maxWidth: 345 ,
    marginBottom: theme.spacing(3)
  }
}));

function Addchoice() {
  const classes = useStyles();

  const theme = createTheme()

  const [inputFields, setInputFields] = useState([{ choice : "" }]);
  const handleChangeIput = (index,event) => {
      const values = [...inputFields];
      values[index][event.target.choice]=event.target.value;
      setInputFields(values);
  }
  const handleAddFields = () => {
      setInputFields([...inputFields,{choice: ''}])
  }
  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index,1);
    setInputFields(values);
  }
  return (
    <Container>
        <form className={classes.root}>
        { inputFields.map((inputField, index) =>(
          <div key={index}>
            <TextField
             inputProps={{style: {fontFamily: "Kanit"}}} 
             InputLabelProps={{style: {fontFamily: "Kanit"}}}
              choice="choice"
              label="ตัวเลือก"
              sx={{ 
                paddingTop: theme.spacing(3),
                paddingLeft: theme.spacing(4),
                width: "100%" }}
              value={inputField.choice}
              onChange={event => handleChangeIput(index,event)}
            />
            <IconButton
                onClick={() => handleRemoveFields(index)}>
                <RemoveIcon/>
            </IconButton>
            <IconButton
                onClick={() => handleAddFields()}>
                <AddCircleIcon/>
            </IconButton>
          </div>
        )) }
        </form>
        
    </Container>
  );
}

export default Addchoice;