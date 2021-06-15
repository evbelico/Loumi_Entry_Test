import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/app-bars/Header.jsx";
import Home from "./views/Home.jsx";
import Flat from "./views/Flat.jsx";
import Error401 from "./views/errors/Error401.jsx";
import Error403 from "./views/errors/Error403.jsx";
import Error500 from "./views/errors/Error500.jsx";
import NotFound from "./views/NotFound.jsx";
import Footer from "./components/app-bars/Footer.jsx";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  app: {
    minHeight: "100vh",
  },
  mainContainer: {
    height: "100vh",
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.app}>
        <CssBaseline />
        <Header />
        <Container className={classes.mainContainer}>
          <Switch>
            <Route exact path="/" component={() => <Home />} />
            <Route exact path="/flat/:id" component={() => <Flat />} />
            <Route exact path="/401" component={() => <Error401 />} />
            <Route exact path="/403" component={() => <Error403 />} />
            <Route exact path="/500" component={() => <Error500 />} />
            <Route component={() => <NotFound />} />
          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
