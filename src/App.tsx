import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/page1">
          <Page1 />
        </Route>
        <Route path="/page2">
          <Page2 />
        </Route>
        <Route path="/page3">
          <Page3 />
        </Route>
        <Route path="/">
          <div>Hello World!</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
