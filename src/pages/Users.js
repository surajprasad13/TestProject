import React, { useEffect, useState } from "react";
import faker from "faker";
//redux
import { fetchUsers, filterUser } from "../redux/actions/postAction";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Users = ({ fetchUsers, users, filterUser }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="ui container">
      <h1>Users</h1>

      <div className="ui action input segment">
        <input type="text" placeholder="Search..." onChange={(e) => filterUser(e.target.value)} />
        <button className="ui button">Filter</button>
      </div>
      <div className="ui cards">
        {users.map(({ id, name, email, address }, index) => (
          <Link class="ui card" to={`/userpost/${id}`}>
            <div class="image">
              <img src={`https://source.unsplash.com/400x400?nature/${index}`} />
            </div>
            <div class="content">
              <a class="header">{name}</a>
              <div class="meta">
                <span class="date">{email}</span>
              </div>
              <div class="description">{address.street + address.suite + address.city}</div>
            </div>
            <div class="extra content">
              <a>
                <i class="user icon"></i>
                22 Friends
              </a>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.post.users,
});

export default connect(mapStateToProps, { fetchUsers, filterUser })(Users);
