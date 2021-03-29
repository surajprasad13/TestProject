import React, { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ item, index }) => {
  const [loading, setLoading] = useState(true);
  const { id, name, address, website, email } = item;
  return (
    <Link class="ui card" to={`/userpost/${id}`}>
      <div class="image">
        {loading && (
          <div class="ui placeholder">
            <div class="square image"></div>
          </div>
        )}
        <img
          src={`https://source.unsplash.com/400x400?nature/${index}`}
          alt="altimage"
          onLoad={() => setLoading(false)}
        />
      </div>
      <div class="content">
        <a class="header">
          <i class="user circle icon"></i>
          {name}
        </a>
        <div class="meta">
          <i class="envelope outline icon"></i> <span class="date">{email}</span>
        </div>
        <div class="description">
          <i class="map pin icon"></i>
          {address.street + address.suite + address.city}
        </div>
      </div>
      <div class="extra content">
        <a>
          <i class="globe icon"></i>
          {website}
        </a>
      </div>
    </Link>
  );
};

export default Card;
