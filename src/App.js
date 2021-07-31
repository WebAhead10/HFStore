import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Movies from "./Pages/Movies/Movies";
import Search from "./Pages/Search/Search";
import Favorite from "./Pages/Favorite/Favorite";
import { Container } from "@material-ui/core";

function App() {
  const [fav, setFav] = React.useState([]);
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route path="/" exact>
              <Movies setFav={setFav}></Movies>
            </Route>
            <Route path="/search">
            <Search setFav={setFav}></Search>
            </Route>
            <Route path="/favorite">
              <Favorite setFav={setFav} fav={fav}>
              </Favorite>
            </Route>
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
