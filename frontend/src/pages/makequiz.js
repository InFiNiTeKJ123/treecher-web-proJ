import { Drawer, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import Avartar_mobile from "../components/teacher/avartar_mobile";

import Left_Menu_class_th from "../components/teacher/left_menu_class_th";
import Makequiz_form from "../components/teacher/makequiz_form";
import Navbar_moblie from "../components/navbar_mobile";
import Left_slidebar_class_th from "../components/teacher/left_slidebar_class_th";

const useStyles = makeStyles(({ theme = createTheme() }) => ({
  container: {
    paddingTop: theme.spacing(3),
  },
  avartar_mobile: {
    alignItems: "right",
    justifyContent: "flex-end",
    paddingTop: theme.spacing(5),
    paddingLeft: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  gridavartar: {
    paddingTop: theme.spacing(10),
    border: "1px solid black",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

function MakeQuiz_th() {
  const classes = useStyles();

  const [openslide, setOpenslide] = useState(false)

  const toggleslider = () => {
    setOpenslide(!openslide)
  }

  return (
    <Box position="flex">
      <Box component='div' sx={{ display: {md: 'none'}, position: 'sticky', top: 0 }}>
        <Navbar_moblie toggleslider={toggleslider} />
      </Box>
      <Grid container>
        <Grid item sm={1.8} sx={{ display: { xs: "none", md: "flex" }, position: 'fixed' }}>
          <Left_Menu_class_th />
        </Grid>
        <Drawer open={openslide} anchor="left" onClose={toggleslider}>
            <Left_slidebar_class_th />
        </Drawer>
        <Grid item xs sx={{ marginLeft: {md:"15%"}}} >
          <Grid item classname={classes.gridavartar}>
            <Avartar_mobile className={classes.avartar_mobile} />
          </Grid>
          <Grid item xs>
            <Makequiz_form/>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MakeQuiz_th;
