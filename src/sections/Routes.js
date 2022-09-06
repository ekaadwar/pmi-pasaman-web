import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact element={<Home />} />
      <Route path="/signin" exact element={<SignIn />} />
    </Switch>
  );
};

export default Routes;
