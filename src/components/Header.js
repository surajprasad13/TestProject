import React from "react";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div class="ui stackable menu">
      <div class="item">
        <img src="/images/logo.png" />
      </div>
      <Link className="item" to="/">
        Home
      </Link>
      <Link className="item" to="/users">
        Users
      </Link>
      <Link className="item" to="/posts">
        Posts
      </Link>
      <Link className="item">Signout</Link>
    </div>
  );
};

export default Header;
