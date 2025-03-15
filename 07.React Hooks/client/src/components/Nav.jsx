import React, { useState } from "react";
import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router";

const items = [
  {
    label: <Link to="/">Home</Link>,
    key: "mail",
    icon: <MailOutlined />,
  },
  {
    label: <Link to="/chat">Messages</Link>,
    key: "app",
    icon: <AppstoreOutlined />,
  },
];
const Nav = () => {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      <h1>React Hooks</h1>
    </>
  );
};
export default Nav;
