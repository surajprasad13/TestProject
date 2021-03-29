import React, { useEffect, useState } from "react";
import faker from "faker";
//redux
import { fetchUsers, filterUser } from "../redux/actions/postAction";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card } from "../components";

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
        {users.map((item, index) => (
          <Card item={item} index={index} key={index} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.post.users,
});

export default connect(mapStateToProps, { fetchUsers, filterUser })(Users);
