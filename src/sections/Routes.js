import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AddData from '../pages/AddData'
import AuthRoute from '../components/AuthRoute'
import Data from '../pages/Data'
import DonorHistoryUser from '../pages/DonorHistoryUser'
import ForgotPass from '../pages/ForgotPass'
import GeneralRoute from '../pages/GeneralRoute'
import Home from '../pages/Home'
import MyDonor from '../pages/MyDonor'
import MyProfile from '../pages/MyProfile'
import PrivateRoute from '../components/PrivateRoute'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import UserDetail from '../pages/UserDetail'
import ResetPass from '../pages/ResetPass'
import UpdatePass from '../pages/UpdatePass'

const Routes = () => {
  return (
    <Switch>
      <Route
        path="/"
        exact
        render={(props) => <GeneralRoute element={<Home {...props} />} />}
      />

      <Route
        path="/profile"
        render={(props) => <PrivateRoute element={<MyProfile {...props} />} />}
      />

      <Route
        path="/update-pass"
        render={(props) => <PrivateRoute element={<UpdatePass {...props} />} />}
      />

      <Route
        path="/signin"
        render={(props) => <AuthRoute element={<SignIn {...props} />} />}
      />

      <Route
        path="/signup"
        render={(props) => <AuthRoute element={<SignUp {...props} />} />}
      />

      <Route
        path="/forgot-pass"
        render={(props) => <AuthRoute element={<ForgotPass {...props} />} />}
      />

      <Route
        path="/reset-password/:token"
        render={(props) => <AuthRoute element={<ResetPass {...props} />} />}
      />

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
      <Route
        path="/stock"
        exact
        render={(props) => (
          <GeneralRoute element={<DonorHistoryUser {...props} />} />
        )}
      />
      <Route
        path="/history"
        exact
        render={(props) => (
          <PrivateRoute element={<DonorHistoryUser {...props} />} />
        )}
      />

      <Route
        path="/history/:id"
        exact
        render={(props) => (
          <PrivateRoute element={<DonorHistoryUser {...props} />} />
        )}
      />
      <Route
        path="/myhistory"
        exact
        render={(props) => <PrivateRoute element={<MyDonor {...props} />} />}
      />

      <Route
        path="/expenditure"
        exact
        render={(props) => (
          <PrivateRoute element={<DonorHistoryUser {...props} />} />
        )}
      />
    </Switch>
  )
}

export default Routes
