import React, { useState } from "react";

import ItemCard from "../components/cards/ItemCard.jsx";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
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
    furnished: true,
    rooms: 3,
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
    furnished: true,
    rooms: 3,
  },
  {
    id: 3,
    ref: "PTR9261",
    name: "Very cute studio in 11th district - Paris",
    description:
      "Bright living room with couches and a balcony on the Tour Eiffel",
    picturePath: "/paris-salon-2.jpg",
    pictureDesc: "",
    price: 1100,
    furnished: false,
    rooms: 1,
  },
  {
    id: 4,
    ref: "ANJ1001",
    name: "Wonderful flat in 18th district - Paris",
    description:
      "Bright living room with couches and a balcony on the Tour Eiffel",
    picturePath: "/paris-salon-2.jpg",
    pictureDesc: "",
    price: 950,
    furnished: false,
    rooms: 2,
  },
];

const useStyles = makeStyles((theme) => ({
  home: {
    height: "100vh",
  },
  bodyTitle: {
    margin: "6rem auto 3rem auto",
    color: "#333333",
  },
}));

const Home = () => {
  const classes = useStyles();

  const [flatsList, setFlatsList] = useState([]);

  useEffect(() => {
    if (flats !== null) {
      setFlatsList(flats);
    }
  }, []);

  return (
    <main className={classes.home}>
      <Typography
        variant="h3"
        color="initial"
        align="center"
        className={classes.bodyTitle}
      >
        Discover all our available flats
      </Typography>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="center"
        alignItems="center"
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
