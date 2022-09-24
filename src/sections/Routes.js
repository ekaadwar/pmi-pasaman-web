import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import AuthRoute from "../components/AuthRoute";
import PrivateRoute from "../components/PrivateRoute";
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
      <Route path="/" exact element={<Home />} />
      <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
      <Route path="/signin" element={<AuthRoute element={<SignIn />} />} />
      <Route path="/signup" element={<AuthRoute element={<SignUp />} />} />
      <Route path="/forgot-pass" element={<ForgotPass />} />
      <Route path="/data" exact element={<PrivateRoute element={<Data />} />} />
      <Route
        path="/data/add"
        exact
        element={<PrivateRoute element={<AddData />} />}
      />
    </Switch>
  );
};

export default Routes;
