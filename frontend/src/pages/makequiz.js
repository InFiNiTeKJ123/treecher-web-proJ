import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import Avartarst_mobile from "../components/students/avartarst_mobile";

import Left_Menu_class_th from "../components/teacher/left_menu_class_th";
import Navbar from "../components/teacher/navbar";
import Classroom_feed from "../components/classroom_feed";
import Makequiz_form from "../components/teacher/makequiz_form";

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

  const [open, setOpen] = useState(false);

  const handleOpenPopup = () => {
    setOpen(true);
  };

  const handleClosePopup = () => {
    setOpen(false);
  };

  return (
    <Box position="flex">
      <Navbar />
      <Grid container>
        <Grid item sm={1.8} sx={{ display: { xs: "none", sm: "flex" } }}>
          <Left_Menu_class_th />
        </Grid>
        <Grid item xs>
          <Grid item classname={classes.gridavartar}>
            <Avartarst_mobile className={classes.avartar_mobile} />
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
