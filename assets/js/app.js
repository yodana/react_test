import "../css/app.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Navbar from "./composents/Navbar";
import { Switch, Route, HashRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SexPage from "./pages/SexPage";
import IdendityPage from "./pages/IdendityPage";
import IdendityContext from "./context/IdendityContext";
import MenuLeft from "./composents/MenuLeft";

console.log("Hello Webpack Encore! Edit me in assets/js/app.js");

const App = () => {
  /** Initialisation de l'user */
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    sex: ""
  });

  return (
    <>
      <IdendityContext.Provider value={{ user, setUser }}>
        <HashRouter>

          <Navbar></Navbar>
          <MenuLeft></MenuLeft>
          <main className="container pt-5 pl-5">
          <Switch>
            <Route path="/idendity" component={IdendityPage}></Route>
            <Route path="/sexIdendity" component={SexPage}></Route>
            <Route path="/" component={HomePage}></Route>
          </Switch>
          </main>
        </HashRouter>
      </IdendityContext.Provider>
    </>
  );
};

const rootElement = document.querySelector("#app");
ReactDOM.render(<App />, rootElement);
