import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

import "./App.css";

const Navbar = () => {
  //const {SubMenu} = Menu;
  return (
    <React.Fragment>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/music">Music</Link>
        </Menu.Item>
      </Menu>
    </React.Fragment>
  );
};

export default Navbar;
