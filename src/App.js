import React, { useEffect } from "react";
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
        <div className="ui top fixed menu">
          <div className="ui item">
            <Link to={"/"} className="ui item">
              Suraj Prasad
            </Link>
          </div>
          <div className="ui item">
            <Link to={"/home"} className="ui item">
              Home
            </Link>

            {currentUser && (
              <>
                <Link to={"/users"} className="ui item">
                  Users
                </Link>
                <Link to={"/posts"} className="ui item">
                  Posts
                </Link>
                <Link to={"/profile"} className="ui item">
                  Profile
                </Link>
              </>
            )}
          </div>

          {currentUser ? (
            <div className="ui item">
              <Link to={"/profile"} className="ui item">
                Suraj
              </Link>

              <a href="/login" className="ui item" onClick={logOut}>
                LogOut
              </a>
            </div>
          ) : (
            <div className="ui item">
              <Link to={"/login"} className="ui item">
                Login
              </Link>

              <Link to={"/register"} className="ui item">
                Sign Up
              </Link>
            </div>
          )}
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
