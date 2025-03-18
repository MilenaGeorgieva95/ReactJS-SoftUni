import React from "react";
import { Avatar, List } from "antd";

const Chat = ({ messages }) => {
  return (
    <List
      className="demo-loadmore-list"
      itemLayout="horizontal"
      dataSource={messages}
      bordered={true}
      renderItem={(message) => (
        <List.Item
          actions={[
            <a key="list-loadmore-edit">edit</a>,
            <a key="list-loadmore-more">more</a>,
          ]}
        >
          <List.Item.Meta
            avatar={
              <Avatar src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg" />
            }
            title={
              <a href="https://ant.design">
                {message.author + " - " + message.username}
              </a>
            }
            description={message.content}
          />
        </List.Item>
      )}
    />
  );
};
export default Chat;
