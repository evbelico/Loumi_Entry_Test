import React from "react";

import { useHistory } from "react-router-dom";

import { resolveStatus } from "../../api";

import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    // border: 2,
    borderRadius: 5,
    borderColor: "primary",
  },
  cardMedia: {
    // height: 300,
    width: "100%",
  },
  cardContent: {
    height: "3rem",
    width: "80%",
  },
  itemName: {
    fontWeight: "1.1rem",
  },
}));

const ItemCard = ({ flatObj }) => {
  const classes = useStyles();

  const history = useHistory();

  console.log("R u here :", flatObj);
  const handleNavigation = async () => {
    // const response = await handleNavigation();
    const response = await resolveStatus();
    console.log("So...", response);
    if (response !== null && response.ok) {
      history.push({
        pathname: `/flat/${flatObj.id}`,
        state: { flat: flatObj },
      });
    } else {
      console.log("Err:", response);
      // const status = response.status.toString();
      // console.log(stat, typeof stat);
      history.push(`/${response.status.toString()}`);
    }
  };

  return (
    <React.Fragment>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.card} raised>
          <CardActionArea>
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
            className={classes.cardContent}
          >
            <CardActionArea>Chaloha !</CardActionArea>
          </CardContent>
        </Card>
      </Grid>
    </React.Fragment>
  );
};

export default ItemCard;
