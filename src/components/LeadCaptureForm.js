import React, { useState } from 'react';
import './LeadCaptureForm.css';

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chat-container">
      {/* Chat window */}
      <div className={`chat-popup ${isOpen ? 'show' : ''}`}>
        <div className="chat-header">
          <h4>Chat with us</h4>
          <button className="close-chat" onClick={toggleChat}>
            &times;
          </button>
        </div>
        <div className="chat-body">
          <p>Hello! How can we help you?</p>
        </div>
        <div className="chat-footer">
          <input type="text" placeholder="Type a message..." />
          <button type="submit">Send</button>
        </div>
      </div>

      {/* Floating chat button */}
      <button className="chat-button" onClick={toggleChat}>
        💬 Chat
      </button>
    </div>
  );
};

export default ChatButton;
