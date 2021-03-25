import React, { useEffect } from "react";
import faker from "faker";
//redux
import { fetchPosts } from "../redux/actions/postAction";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

//source.unsplash.com/400x400?nature/${index}

const Posts = ({ fetchPosts, posts }) => {
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="ui container">
      <div className="ui cards">
        {posts.map(({ title, body }, index) => (
          <Link to="/posts/id">
            <div class="ui card">
              <div class="content">
                <div class="header">{title}</div>
              </div>
              <div class="content">
                <h4 class="ui sub header">Description</h4>
                <div class="ui small feed">
                  <div class="event">
                    <div class="content">
                      <div class="summary">{body}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="extra content">
                <button class="ui button">Join Project</button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.post.posts,
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
