import React from "react";
import "./Chatbot";
import Message from "./Message";

const Messages = ({ messages }) => {
  console.log("Messages: " + messages); 
  return (
    <div className="messagesSection">
      {messages.map(message => {
        return (
          <div className="messagesContainer">
            <Message message={message} />
          </div>
        );
      })}
    </div>
  );
};

export default Messages;