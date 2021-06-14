import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Header from "./components/app-bars/Header.jsx";
import Home from "./views/Home.jsx";
import Flat from "./views/Flat.jsx";
import Error401 from "./views/errors/Error401.jsx";
import Error403 from "./views/errors/Error403.jsx";
import Error500 from "./views/errors/Error500.jsx";
import NotFound from "./views/NotFound.jsx";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  app: {
    minHeight: "100vh",
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.app}>
        <header>
          {/* To do : header component */}
          <Header />
        </header>

        <Container maxWidth="lg" className={classes.app}>
          <main>
            <Switch>
              <Route exact path="/" component={() => <Home />} />
              {/* To do : page body */}
              <Route exact path="/flat" component={() => <Flat />} />
              <Route exact path="/401" component={() => <Error401 />} />
              <Route exact path="/403" component={() => <Error403 />} />
              <Route exact path="/500" component={() => <Error500 />} />
              <Route path="*" component={() => <NotFound />} />
              {/* To do : proper routing */}
            </Switch>
          </main>
        </Container>
      </div>
    </Router>
  );
};

export default App;
