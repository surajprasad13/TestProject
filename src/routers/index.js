import React from "react";
import { Switch, Route, Link, Redirect, useHistory, useLocation } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Posts from "../pages/Posts";
import Users from "../pages/Users";
import SinglePost from "../pages/SinglePost";

import { Header, Footer } from "../components";

function HomeRouter() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/posts" component={Posts} />
        <Route path="/users" component={Users} />
        <Route path="/posts/:id" component={SinglePost} />
      </Switch>
      <Footer />
    </>
  );
}

const RouterComponent = () => {
  return (
    <Switch>
      <Route path="/" component={HomeRouter} />
      <Route path="/login" component={Login} exact />
      <Route path="/register" component={Register} />
    </Switch>
  );
};

export default RouterComponent;
