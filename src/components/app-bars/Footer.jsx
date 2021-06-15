import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  footer: {
    top: "auto",
    bottom: 0,
    background:
      "linear-gradient(to right, #ff507d 0%, #ffd17d 35%, #247df3 100%)",
  },
  toolbar: {
    minHeight: "2.25rem",
    justifyContent: "flex-end",
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.footer}>
      <Toolbar variant="dense" className={classes.toolbar}>
        <Typography variant="caption">
          Made with
          <span role="img" aria-label="heart-emoji">
            &#10084;&#65039;
          </span>
          by Eva
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
