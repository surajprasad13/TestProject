import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

//redux
import { fetchUsersPost } from "../redux/actions/postAction";
import { connect } from "react-redux";

const UserPost = ({ fetchUsersPost, userpost }) => {
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetchUsersPost(id);
  }, []);

  return (
    <div className="ui container" style={{ marginTop: "100px" }}>
      <button className="circular ui icon button" onClick={() => history.goBack()}>
        <i className="icon angle left"></i>
      </button>
      <h1>UserPost{id}</h1>

      <div className="ui cards">
        {userpost.map(({ title, body }) => (
          <div className="ui card">
            <div className="content">
              <div className="header">{title}</div>
            </div>
            <div className="content">
              <h4 className="ui sub header">Description</h4>
              <div className="ui small feed">
                <div className="event">
                  <div className="content">
                    <div className="summary">{body}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="extra content">
              <button className="ui button">Join Project</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userpost: state.post.userpost,
});

export default connect(mapStateToProps, { fetchUsersPost })(UserPost);
