import React from 'react';
import Navbar from './components/navbar';
import Whoami from './config/whoami';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

function App() {

  let user = Whoami()

  return (
    <div>
      <Box component='div' sx={{ display: {xs: 'none', sm: 'flex'}, position: 'sticky', top: 0}}>
        <Navbar user={user}/>
      </Box>
      <Outlet />
    </div>
  );
}

export default App;


