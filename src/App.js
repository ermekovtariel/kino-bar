import React from "react";
import "./App.css";

import { Route } from "react-router";
import Auth from "./Auth";
import OpenedCinema from "./OpenedCinema";

function App() {
  return (
    <div className="app">
      <Route path='/' exact>
          <OpenedCinema />
      </Route>
      <Route path='/auth' exact>
          <Auth />
      </Route>
    </div>
  );
}

export default App;
