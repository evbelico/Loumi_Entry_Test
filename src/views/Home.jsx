import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { handleNavigation, resolveStatus } from "../api";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  home: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  bodyTitle: {
    margin: "6rem auto 6rem auto",
  },
}));

const Home = () => {
  const classes = useStyles();

  const history = useHistory();
  const [status, setStatus] = useState({});

  const handleClick = async () => {
    // const response = await handleNavigation();
    const response = await resolveStatus();
    console.log("So...", response);
    if (response !== null && response.ok) {
      history.push("/flat");
    } else {
      console.log("Err:", response);
      const stat = response.status.toString();
      console.log(stat, typeof stat);
      history.push(`/${stat}`);
    }
    // setStatus(response);
  };

  console.log("Front response :", status);
  return (
    <div className={classes.home}>
      <Typography
        variant="h2"
        color="initial"
        align="center"
        className={classes.bodyTitle}
      >
        Welcome to Loumi !
      </Typography>
      <Typography variant="body1" color="initial">
        {status && <span>{status.message}</span>}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="medium"
        onClick={handleClick}
      >
        Click me
      </Button>
    </div>
  );
};

export default Home;
