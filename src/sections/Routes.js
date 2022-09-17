import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import AddData from "../pages/AddData";
import Data from "../pages/Data";
import ForgotPass from "../pages/ForgotPass";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact element={<Data />} />
      <Route path="/profile" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-pass" element={<ForgotPass />} />
      <Route path="/data" exact element={<Profile />} />
      <Route path="/data/add" exact element={<AddData />} />
    </Switch>
  );
};

export default Routes;
