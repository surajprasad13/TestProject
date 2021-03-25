import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import BoardUser from "./pages/BoardUser";
import Users from "./pages/Users";
import Posts from "./pages/Posts";

import { Footer } from "./components";

import { logout } from "./redux/actions/authAction";
import { clearMessage } from "./redux/actions/messageAction";

import { history } from "./helpers/history";

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    }
  }, [currentUser]);

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
                {currentUser.username}
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

        <div className="ui container" style={{ marginTop: "100px" }}>
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/users" component={Users} />
            <Route path="/posts" component={Posts} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
