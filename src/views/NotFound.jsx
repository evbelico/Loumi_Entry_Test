import React from "react";

import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  errorPage: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    marginBottom: theme.spacing(2),
  },
  navButton: {
    marginTop: theme.spacing(2),
    background:
      "linear-gradient(to right, #247df3 0%, #ffd17d 35%, #ff507d 100%)",
    color: "#ffffff",
    fontWeight: theme.typography.fontWeightBold,
    webkitBackgroundClip: "text",
    webkitTextFillColor: "transparent",
  },
  bodyTitle: {
    margin: "0rem auto 3rem auto",
    color: "#333333",
  },
}));

const NotFound = () => {
  const classes = useStyles();

  const history = useHistory();

  const handleNavigation = () => {
    history.push("/");
  };

  return (
    <main className={classes.errorPage}>
      <Typography variant="h5" color="initial" className={classes.errorText}>
        Oh oh...
      </Typography>
      <Typography variant="h6" color="initial" className={classes.errorText}>
        This page does not exist !
      </Typography>
      <Button
        variant="contained"
        color="default"
        size="medium"
        className={classes.navButton}
        onClick={handleNavigation}
      >
        Go back home
      </Button>
    </main>
  );
};

export default NotFound;
