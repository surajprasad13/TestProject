import React, { useEffect } from "react";
import faker from "faker";
//redux
import { fetchUsers } from "../redux/actions/authAction";
import { connect } from "react-redux";

const Users = ({ fetchUsers, users }) => {
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="ui container">
      <div className="ui cards">
        {users.map(({ name, email, address }, index) => (
          <div class="ui card">
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
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.post.users,
});

export default connect(mapStateToProps, { fetchUsers })(Users);
