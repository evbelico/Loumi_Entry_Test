import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  flatPage: {
    height: "100%",
    // margin: "8rem auto 0rem auto",
  },
  flatPicture: {
    maxWidth: "100%",
    borderRadius: "5px",
  },
});

const Flat = () => {
  const classes = useStyles();

  const location = useLocation();
  const [flatData, setFlatData] = useState(null);

  useEffect(() => {
    if (location.state && location.state.flat) {
      console.log(location.state.flat);
      setFlatData(location.state.flat);
    }
    console.log("ERR ? : ", location.state);
  }, [location.state]);

  return (
    // <main className={classes.flatPage}>
    <Grid
      container
      spacing={3}
      direction="row"
      justify="space-evenly"
      alignItems="center"
      alignContent="center"
      wrap="nowrap"
      className={classes.flatPage}
    >
      {flatData !== null ? (
        <React.Fragment>
          <Grid container item xs={12} sm={6}>
            <img
              src={flatData.picturePath}
              alt={flatData.pictureDesc}
              className={classes.flatPicture}
            />
          </Grid>
          <Grid item>So mesmerising</Grid>
        </React.Fragment>
      ) : (
        <div>No flat here :(</div>
      )}
    </Grid>
    // </main>
  );
};

export default Flat;
