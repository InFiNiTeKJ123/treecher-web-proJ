import React from 'react'
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { AppBar, Toolbar } from '@mui/material';


const useStyles = makeStyles(({theme = useTheme()}) => ({
    appbar: {
        backgroundColor: '#008037',
    }

}))
function Headbar() {
    const classes = useStyles()

  return (
    <AppBar style={{backgroundColor: '#008037'}}>
        <Toolbar>

        </Toolbar>
    </AppBar>
  )
}

export default Headbar