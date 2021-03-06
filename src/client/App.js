import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from "react-router-dom";

import Upload from "./Upload";
import Gallery from "./Gallery";
import Home from "./Home";
import TopNav from "./NavBar";

const App = () => {
  return (
    <>
      <TopNav />
      <Route exact path="/" component={Home} />
      <Route exact path="/upload" component={Upload} />
      <Route exact path="/gallery" component={Gallery} />
    </>
  );
};

export default App;
