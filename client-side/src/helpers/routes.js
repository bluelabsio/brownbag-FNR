import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";

const mapStateToProps = ({ session: { username} }) => ({
  loggedIn: Boolean(username)
});

const Auth = ({ loggedIn, path, component: Component }) => (
  <Route
    path={path}
    render={props => (
      loggedIn ?
      <Redirect to='/data' /> :
      <Component {...props} />
    )}
  />
);
const Protected = ({ loggedIn, path, component: Component }) => (
  <Route
    path={path}
    render={props => (
      loggedIn ? 
      <Component {...props} /> :
      <Redirect to='/home' />
    )}
  />
);

export const AuthRoute = withRouter(
  connect(mapStateToProps)(Auth)
);
export const ProtectedRoute = withRouter(
  connect(mapStateToProps)(Protected)
);