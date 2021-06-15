import React from "react";

import { useHistory } from "react-router-dom";

import { resolveStatus } from "../../api";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: 5,
    borderColor: "primary",
  },
  cardMedia: {
    width: "100%",
  },
  cardContentBox: {
    width: "100%",
    padding: "1rem 1.5rem !important",
  },
  cardContent: {
    textAlign: "center",
  },
  cardDetails: {
    marginTop: "0.50rem",
  },
  flatInfo: {
    borderColor: "#ff507d",
    borderStyle: "solid",
    borderWidth: "2px",
    borderRadius: "10px",
  },
  textNormalized: {
    "text-transform": "inherit",
  },
  itemName: {
    fontWeight: "1.1rem",
  },
  textColor: {
    color: "#333333",
  },
  navButton: {
    marginTop: theme.spacing(2),
    width: "100%",
    background:
      "linear-gradient(to right, #247df3 0%, #ffd17d 35%, #ff507d 100%)",
    color: "#ffffff",
    fontWeight: "1000",
    webkitBackgroundClip: "text",
    webkitTextFillColor: "transparent",
  },
}));

const ItemCard = ({ flatObj }) => {
  const classes = useStyles();

  const history = useHistory();

  const handleNavigation = async () => {
    const response = await resolveStatus();

    if (response !== null && response.ok) {
      history.push({
        pathname: `/flat/${flatObj.id}`,
        state: { flat: flatObj },
      });
    } else {
      history.push(`/${response.status.toString()}`);
    }
  };

  return (
    <React.Fragment>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.card} raised>
          <CardActionArea onClick={handleNavigation}>
            <CardMedia
              title={flatObj.pictureName}
              component="img"
              src={flatObj.picturePath}
              height="90%"
              width="100%"
              className={classes.cardMedia}
            />
          </CardActionArea>
          <CardContent
            onClick={handleNavigation}
            className={classes.cardContentBox}
          >
            <CardActionArea className={classes.cardContent}>
              <Typography
                variant="body1"
                color="initial"
                className={classes.textColor}
              >
                {flatObj.name}
              </Typography>
              <Grid
                container
                spacing={2}
                justify="space-evenly"
                className={classes.cardDetails}
              >
                <Grid item className={classes.flatInfo}>
                  <Typography
                    variant="button"
                    color="initial"
                    className={classes.textNormalized}
                    gutterBottom
                  >
                    {flatObj.furnished ? "Furnished" : "Not furnished"}
                  </Typography>
                </Grid>
                <Grid item className={classes.flatInfo}>
                  <Typography
                    variant="button"
                    color="initial"
                    className={classes.textNormalized}
                    gutterBottom
                  >
                    {flatObj.rooms > 1
                      ? `${flatObj.rooms} rooms`
                      : `${flatObj.rooms}  room`}
                  </Typography>
                </Grid>
              </Grid>
            </CardActionArea>
          </CardContent>
          <Button
            variant="contained"
            color="default"
            size="large"
            className={classes.navButton}
            onClick={handleNavigation}
          >
            {flatObj.price}€ / month
          </Button>
        </Card>
      </Grid>
    </React.Fragment>
  );
};

export default ItemCard;
