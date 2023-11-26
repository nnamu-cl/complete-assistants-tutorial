import React from 'react';
import PropTypes from 'prop-types';
import './ChatLayout.css'
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";
import {SendOutlined, UserOutlined} from "@ant-design/icons";
import { Avatar } from '@material-ui/core';
import { FaUser } from 'react-icons/fa';


function Header() {
    return (
        <div className="header">
            <Avatar>
                <FaUser />
            </Avatar>
            <div>
                <p>Your Profile</p>
                <p>Nicholas Namusanga</p>
            </div>
        </div>
    );
}

const ChatLayout = () => (
  <div className="ChatLayout">
    <div style={{ position: "relative", height: "500px" }}>
      <MainContainer>
        <ChatContainer>
          <MessageList>
           <Header/>
            <Message
                model={{
                  message: "Hello my friend",
                  sentTime: "just now",
                  sender: "Joe",
                }}
                
            >

                <Avatar src="../../logo.svg" name={"Zoe"} />
            </Message>
          </MessageList>
          <MessageInput placeholder="Type message here" attachButton={false} 
          sendButton={true} />
        </ChatContainer>
      </MainContainer>
    </div>;
  </div>
);

ChatLayout.propTypes = {};

ChatLayout.defaultProps = {};

export default ChatLayout;
