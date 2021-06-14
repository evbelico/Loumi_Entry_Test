import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

import { handleNavigation, resolveStatus } from "../api";

import ItemCard from "../components/cards/ItemCard.jsx";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useEffect } from "react";

const flats = [
  {
    id: 1,
    ref: "KOX3408",
    name: "Wonderful flat in 7th district - Paris",
    description: "Huge apartment near the Tour Eiffel",
    picturePath: "/paris-salon-2.jpg",
    pictureDesc:
      "Bright living room with couches and a balcony on the Tour Eiffel",
    price: 1500,
  },
  {
    id: 2,
    ref: "MAT0771",
    name: "Wonderful flat in 20th district - Paris",
    description:
      "Bright living room with couches and a balcony on the Tour Eiffel",
    picturePath: "/paris-salon-2.jpg",
    pictureDesc: "Two bedroom apartment near Ménilmontant district",
    price: 1100,
  },
  {
    id: 3,
    ref: "PTR9261",
    name: "Wonderful flat in 11th district - Paris",
    description:
      "Bright living room with couches and a balcony on the Tour Eiffel",
    picturePath: "/paris-salon-2.jpg",
    pictureDesc: "",
    price: 1100,
  },
];

const useStyles = makeStyles((theme) => ({
  home: {
    margin: "6rem auto 0rem auto",
    // height: "100%",
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
  },
  bodyTitle: {
    // margin: "5.50rem auto auto auto",
    margin: "0rem auto 3rem auto",
  },
}));

const Home = () => {
  const classes = useStyles();
  const history = useHistory();

  const [flatsList, setFlatsList] = useState([]);

  useEffect(() => {
    if (flats !== null) {
      setFlatsList(flats);
    }
  }, []);

  console.log("flats :", flats);
  console.log("Flats list :", flatsList);

  // const handleClick = async (flat) => {
  //   const response = await resolveStatus();
  //   console.log("So...", response);
  //   if (response !== null && response.ok) {
  //     history.push({
  //       pathname: `/flat/${flat.id}`,
  //       state: { flat: flat },
  //     });
  //   } else {
  //     console.log("Err:", response);
  //     // const status = response.status.toString();
  //     history.push(`/${response.status.toString()}`);
  //   }
  // };

  return (
    <main className={classes.home}>
      <Typography
        variant="h3"
        color="initial"
        align="center"
        className={classes.bodyTitle}
      >
        Découvrez nos logements disponibles
      </Typography>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="center"
        wrap="nowrap"
        className={classes.home}
      >
        {flatsList !== null ? (
          flatsList.map((flat) => <ItemCard flatObj={flat} key={flat.id} />)
        ) : (
          <div>No flats to show</div>
        )}
      </Grid>
    </main>
  );
};

export default Home;
