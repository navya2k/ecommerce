import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <ul className="nav-ul">
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/add">Products</Link>
        </li>
        <li>
          <Link to="/update">Products</Link>
        </li>
        <li>
          <Link to="/logout">Products</Link>
        </li>
        <li>
          <Link to="/profile">Products</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
