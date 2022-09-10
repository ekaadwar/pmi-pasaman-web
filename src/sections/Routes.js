import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import Data from "../pages/Data";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/data" element={<Data />} />
    </Switch>
  );
};

export default Routes;
