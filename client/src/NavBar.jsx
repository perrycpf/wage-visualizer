import React from "react";
import { Link } from "react-router-dom";

const NavBar = props => {
  return (
    <div className="NavBar">
      <Link to="/" id="catherine">
        wage<span id="cat">map</span>
      </Link>

      {props.currentUser ? (
        <span id="catherine22">
          <Link to="/wagemap" id="start">
            click to start
          </Link>
          |
          <Link to="/logout" id="leave">
            logout
          </Link>
        </span>
      ) : (
        <span id="catherine2">
          <Link to="/login">login</Link>|<Link to="/signup">signup</Link>
        </span>
      )}
    </div>
  );
};

export default NavBar;
