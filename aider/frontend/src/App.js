// React component for the chat interface

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChatHistory from './components/ChatHistory';
// CodeDisplay import will be removed in the next step
import MessageInput from './components/MessageInput';

// Placeholder function for sending messages
const handleSendMessage = (message) => {
  console.log('Message to send:', message);
  // Here you would typically handle the message sending logic
};

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch chat history on component mount
    axios.get('/api/messages')
      .then(response => setMessages(response.data))
      .catch(error => console.error('Error fetching messages:', error));
  }, []);

  // Add functions to handle adding, updating, and deleting messages
  // ...

  return (
    <div className="App">
      <ChatHistory messages={messages} />
      {/* CodeDisplay component has been removed */}
      <MessageInput onSendMessage={handleSendMessage} />
      {/* You can now type and send messages using the MessageInput component */}
    </div>
  );
}

export default App;
