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
          <div class="ui move up reveal">
            <div class="visible content">
              <img src={`https://source.unsplash.com/400x400?water/${post.index}`} class="ui large image" />
            </div>
            <div class="hidden content">
              <img src={`https://source.unsplash.com/400x400?nature/${post.index}`} class="ui large image" />
            </div>
          </div>
          <div className="content">
            <h4>Title</h4>
            <div className="header">{post.title}</div>
          </div>
          <div className="content">
            <h4 className="ui sub header">Description</h4>
            <div className="ui small feed">
              <div className="event">
                <div className="content">
                  <div className="summary">{post.body}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="extra content">
            <button className="ui button">Id-{post.id}</button>
            <button className="ui button">userId-{post.userId}</button>
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
