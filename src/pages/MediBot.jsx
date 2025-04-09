import React, { useState } from 'react';

const MediBot = () => {
  const [userInput, setUserInput] = useState('');
  const [botResponse, setBotResponse] = useState('');

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userInput.trim() === '') return;

    // Simulate bot response
    setBotResponse(`You asked: "${userInput}". I'll provide you an answer soon!`);
    setUserInput('');
  };

  return (
    <div className="page">
      <h2>Medora Chatbot</h2>
      <p>Ask me anything about medicines and their side effects!</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={handleUserInput}
          placeholder="Ask me anything..."
          className="input-field"
        />
        <button type="submit">Ask</button>
      </form>
      <div className="bot-response">
        <p>{botResponse}</p>
      </div>
    </div>
  );
};

export default MediBot;
