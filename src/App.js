import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Country from "./pages/Country";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Country />
        <Home />
      </div>
      {/* <Route path="/">
        <Home />
      </Route>

      <Route path="/country">
        <Home />
      </Route> */}
    </BrowserRouter>
  );
}

export default App;
