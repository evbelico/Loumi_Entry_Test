import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  flatPage: {
    height: "100%",
    padding: "4rem auto",
  },
  textMargin: {
    marginTop: theme.spacing(1),
  },
  rooms: {
    padding: "0.5rem 0.5rem",
    borderColor: "#ff507d",
    borderStyle: "solid",
    borderWidth: "2px",
    borderRadius: "10px",
  },
  roomsPadding: {
    padding: "0.1rem 0.1rem",
  },
  flatPicture: {
    maxWidth: "100%",
    borderRadius: "5px",
  },
}));

const Flat = () => {
  const classes = useStyles();

  const location = useLocation();
  const [flatData, setFlatData] = useState(null);

  useEffect(() => {
    if (location.state && location.state.flat) {
      setFlatData(location.state.flat);
    }
  }, [location.state]);

  return (
    <Grid
      container
      spacing={4}
      direction="row"
      justify="center"
      alignItems="flex-start"
      alignContent="center"
      className={classes.flatPage}
    >
      {flatData !== null ? (
        <React.Fragment>
          <Grid container item xs={12} sm={5} justify="center">
            <img
              src={flatData.picturePath}
              alt={flatData.pictureDesc}
              className={classes.flatPicture}
            />
          </Grid>
          <Grid item xs={12} sm={7}>
            <Typography
              variant="body1"
              color="initial"
              className={classes.textMargin}
            >
              {flatData.ref}
            </Typography>
            <Typography
              variant="h4"
              color="initial"
              className={classes.textMargin}
            >
              {flatData.name}
            </Typography>
            <hr />
            <Typography
              variant="subtitle1"
              color="initial"
              paragraph
              className={classes.textMargin}
            >
              {flatData.description}
            </Typography>

            <Grid
              container
              direction="row"
              spacing={2}
              justify="space-between"
              alignItems="center"
              className={classes.textMargin}
            >
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  color="initial"
                  className={classes.textMargin}
                >
                  Rooms list
                </Typography>
              </Grid>
              <Grid item xs={3} className={classes.rooms}>
                <Typography
                  variant="body1"
                  color="initial"
                  className={classes.roomsPadding}
                  align="center"
                >
                  Bedroom
                </Typography>
              </Grid>
              <Grid item xs={3} className={classes.rooms}>
                <Typography
                  variant="body1"
                  color="initial"
                  className={classes.roomsPadding}
                  align="center"
                >
                  Bathroom
                </Typography>
              </Grid>
              <Grid item xs={3} className={classes.rooms}>
                <Typography
                  variant="body1"
                  color="initial"
                  className={classes.roomsPadding}
                  align="center"
                >
                  Living room
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </React.Fragment>
      ) : (
        <Typography variant="h6" color="initial">
          No flat here. :(
        </Typography>
      )}
    </Grid>
  );
};

export default Flat;
