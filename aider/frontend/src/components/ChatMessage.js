import React from 'react';

const ChatMessage = ({ message }) => {
  return (
    <div className="chat-message">
      <p>{message.text}</p>
      {/* Buttons for edit and delete actions will be added here later */}
    </div>
  );
};

export default ChatMessage;
