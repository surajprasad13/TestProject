import React, { useEffect, useState } from "react";
//redux
import { fetchPosts, filterPosts } from "../redux/actions/postAction";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";
//source.unsplash.com/400x400?nature/${index}

import alt from "../assets/images/alt.png";

const options = [
  { key: 1, text: "UserId", value: "userId" },
  { key: 2, text: "Id", value: "id" },
  { key: 3, text: "Title", value: "title" },
  { key: 4, text: "Description", value: "description" },
];

const Posts = ({ fetchPosts, filterPosts, posts }) => {
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    fetchPosts();
  }, [filterPosts, value]);

  const onSearch = () => {
    filterPosts(type, value);
  };

  return (
    <div className="ui container">
      <h1>Posts</h1>
      <div className="ui  segment">
        <div class="ui right labeled input">
          <Dropdown
            onChange={(e, { value }) => setType(value)}
            options={options}
            placeholder="Choose an option"
            selection
            value={type}
          />
          <input type="text" placeholder="Filter by string" onChange={(e) => setValue(e.target.value)} />
        </div>
        <button className="ui button" type="submit" onClick={onSearch}>
          Submit
        </button>
      </div>

      <div className="ui container">
        <div className="ui cards">
          {posts.map(({ id, userId, title, body }, index) => (
            <Link to={`/post/${id}`} className="ui card" key={index}>
              {loading && (
                <div class="ui placeholder">
                  <div class="square image"></div>
                </div>
              )}
              <div class="ui move up reveal">
                <div class="visible content">
                  <img
                    src={`https://source.unsplash.com/400x400?water/${index}`}
                    class="ui large image"
                    onLoad={() => setLoading(false)}
                  />
                </div>
                <div class="hidden content">
                  <img src={`https://source.unsplash.com/400x400?nature/${index}`} class="ui large image" />
                </div>
              </div>
              <div className="content">
                <h4>Title</h4>
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
                <button className="ui button">Id-{id}</button>
                <button className="ui button">userId-{userId}</button>
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

export default connect(mapStateToProps, { fetchPosts, filterPosts })(Posts);
