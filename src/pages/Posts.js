import React, { useEffect, useState } from "react";
import faker from "faker";
//redux
import { fetchPosts } from "../redux/actions/postAction";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";
//source.unsplash.com/400x400?nature/${index}

const Posts = ({ fetchPosts, posts }) => {
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="ui container">
      <div class="ui secondary  menu">
        <div class="right menu">
          <div class="item">
            <Dropdown text="Filter" icon="filter" floating labeled button className="icon">
              <Dropdown.Menu>
                <Dropdown.Header icon="tags" content="Filter by tag" />
                <Dropdown.Divider />
                <Dropdown.Item label={{ color: "red", empty: true, circular: true }} text="Important" />
                <Dropdown.Item label={{ color: "blue", empty: true, circular: true }} text="Announcement" />
                <Dropdown.Item label={{ color: "black", empty: true, circular: true }} text="Discussion" />
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>

      <div className="ui container">
        <div className="ui cards">
          {posts.map(({ id, title, body }, index) => (
            <Link to={`/post/${id}`} className="ui card">
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.post.posts,
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
