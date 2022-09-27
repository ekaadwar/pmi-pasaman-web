import React from "react";
import { Switch, Route } from "react-router-dom";

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
      <Route path="/" exact component={Home} />

      <PrivateRoute path="/profile">
        <Profile />
      </PrivateRoute>

      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/forgot-pass" component={ForgotPass} />

      <PrivateRoute>
        <Route path="/data" exact component={Data} />
      </PrivateRoute>

      <PrivateRoute>
        <Route path="/data/add" exact component={AddData} />
      </PrivateRoute>

      <PrivateRoute>
        <Route path="/data/:id" exact component={UserDetail} />
      </PrivateRoute>
    </Switch>
  );
};

export default Routes;
