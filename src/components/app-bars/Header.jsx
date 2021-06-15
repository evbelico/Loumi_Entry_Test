import React from "react";

import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles({
  appBarTitle: {
    fontWeight: "600",
    color: "#333333",
  },
  logo: {
    height: "40px",
  },
  linkStyle: {
    textDecoration: "none; !important",
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="inherit">
      <Toolbar>
        <Link to="/" className={classes.linkStyle}>
          <img
            src="https://uploads-ssl.webflow.com/5f58a6f1dd1d8ff68e8df68a/5f85602bd0a5730b207c2eb2_logo%20a.png"
            alt="Logo"
            className={classes.logo}
          />
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
