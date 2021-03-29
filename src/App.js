import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Users from "./pages/Users";
import Posts from "./pages/Posts";
import SinglePost from "./pages/SinglePost";

import { Footer } from "./components";

import { logout } from "./redux/actions/authAction";
import { clearMessage } from "./redux/actions/messageAction";

import { history } from "./helpers/history";
import UserPost from "./pages/UserPost";

const App = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  useEffect(() => {}, [currentUser]);

  const logOut = () => {
    dispatch(logout());
  };

  return (
    <Router history={history}>
      <div>
        <div className="ui top fixed inverted segment menu">
          <div className="ui inverted secondary pointing menu">
            <Link to={"/"} className="active item">
              Suraj Prasad
            </Link>

            <Link to={"/home"} className="item">
              Home
            </Link>

            {currentUser && (
              <>
                <Link to={"/users"} className="item">
                  Users
                </Link>
                <Link to={"/posts"} className="item">
                  Posts
                </Link>
                <Link to={"/profile"} className="item">
                  Profile
                </Link>
              </>
            )}

            {currentUser ? (
              <div className="right menu">
                <Link to={"/profile"} className="ui item">
                  Suraj
                </Link>

                <a href="/login" className="item" onClick={logOut}>
                  LogOut
                </a>
              </div>
            ) : (
              <div className="right menu">
                <Link to={"/login"} className="ui item">
                  Login
                </Link>

                <Link to={"/register"} className="ui item">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="ui container" style={{ position: "relative", margin: "100px" }}>
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/users" component={Users} />
            <Route path="/posts" component={Posts} />
            <Route path="/post/:id" component={SinglePost} />
            <Route path="/userpost/:id" component={UserPost} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
