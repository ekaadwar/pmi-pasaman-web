import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import AuthRoute from "../components/AuthRoute";
import PrivateRoute from "../components/PrivateRoute";
import AddData from "../pages/AddData";
import Data from "../pages/Data";
// import Data from "../pages/DataFunc";
import ForgotPass from "../pages/ForgotPass";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import UserDetail from "../pages/UserDetail";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact element={<Home />} />
      <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
      {/* <Route path="/profile" element={<Profile />} /> */}
      <Route path="/signin" element={<AuthRoute element={<SignIn />} />} />
      <Route path="/signup" element={<AuthRoute element={<SignUp />} />} />
      <Route path="/forgot-pass" element={<ForgotPass />} />
      <Route path="/data" exact element={<PrivateRoute element={<Data />} />} />
      <Route
        path="/data/add"
        exact
        element={<PrivateRoute element={<AddData />} />}
      />
      <Route path="/data/:id" exact element={<UserDetail />} />
    </Switch>
  );
};

export default Routes;
