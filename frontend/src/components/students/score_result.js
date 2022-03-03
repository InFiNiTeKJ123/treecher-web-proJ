import React from "react";
import Button from "@mui/material/Button";
import { Box, Typography, Grid } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
//import Button from '@mui/material/Button';
import SportsScoreIcon from '@mui/icons-material/SportsScore';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      
    </Box>
  );
  
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h6">
          สรุปผลคะแนน
        </Typography>
        <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom>
          แบบฝึกหัดที่ 1 
        </Typography>
        <Typography variant="h2" component="div">
          คะแนน
        </Typography>
        <Grid variant="h3" sx={{ fontSize: 50, mb: 2 , background: '#fcf872', padding: 1}} >
          10/10
        </Grid>
      </CardContent>
    </React.Fragment>
  );

function Score_result(props) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  
  );
}

export default  Score_result;
