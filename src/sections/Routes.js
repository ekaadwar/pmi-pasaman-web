import React from "react";
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "../components/PrivateRoute";
import AddData from "../pages/AddData";
import Data from "../pages/Data";
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
      <Route
        path="/profile"
        render={(props) => <PrivateRoute element={<Profile {...props} />} />}
      />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/forgot-pass" component={ForgotPass} />
      <Route
        path="/data"
        exact
        render={(props) => <PrivateRoute element={<Data {...props} />} />}
      />
      <Route
        path="/data/add"
        exact
        render={(props) => <PrivateRoute element={<AddData {...props} />} />}
      />
      <Route
        path="/data/:id"
        exact
        render={(props) => <PrivateRoute element={<UserDetail {...props} />} />}
      />
    </Switch>
  );
};

export default Routes;
