import React, { useEffect } from "react";

//redux
import { connect } from "react-redux";
import { fetchPost } from "../redux/actions/postAction";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

const SinglePost = ({ post, fetchPost, loading }) => {
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    fetchPost(id);
  }, []);

  return (
    <div className="ui container">
      <button class="circular ui icon button" onClick={() => history.goBack()}>
        <i class="icon angle left"></i>
      </button>
      <h1>SinglePost:{id}</h1>

      {loading ? (
        <div class="ui three doubling stackable cards">
          <div class="ui card">
            <div class="image">
              <div class="ui placeholder">
                <div class="square image"></div>
              </div>
            </div>
            <div class="content">
              <div class="ui placeholder">
                <div class="header">
                  <div class="very short line"></div>
                  <div class="medium line"></div>
                </div>
                <div class="paragraph">
                  <div class="short line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div class="ui card">
          <div class="content">
            <div class="header">{post.title}</div>
          </div>
          <div class="content">
            <h4 class="ui sub header">Description</h4>
            <div class="ui small feed">
              <div class="event">
                <div class="content">
                  <div class="summary">{post.body}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="extra content">
            <button class="ui button">Join Project</button>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  post: state.post.post,
  loading: state.post.loading,
});

export default connect(mapStateToProps, { fetchPost })(SinglePost);
