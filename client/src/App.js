import React from 'react';
import './App.css';
import Search from "./components/Search/Search"
import Saved from "./components/Saved/Saved"
import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route exact path="/search">
      <Search/>
    </Route>
    <Route exact path="/">
      <Redirect to="/search"/>
    </Route>
    <Route exact path="/saved">
      <Saved/>
    </Route>
    <Route path="*">
      <h1>Page Not found</h1>
    </Route>
    </Switch>

    </BrowserRouter>
  );
}

export default App;

