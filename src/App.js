import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, addDoc, getDocs } from "firebase/firestore";
import Questionnaire from './Questionnaire';

function App() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [feedback, setFeedback] = useState(''); // Separate feedback message

  // Fetch messages on component mount
  useEffect(() => {
    const fetchMessages = async () => {
      const querySnapshot = await getDocs(collection(db, "messages"));
      const fetchedMessages = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setMessages(fetchedMessages);
    };

    fetchMessages();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (message) {
      try {
        await addDoc(collection(db, "messages"), { text: message });
        setMessage(''); // Clear the input field
        setFeedback('Thank you! You rock!'); // Set feedback message
      } catch (error) {
        console.error('Error adding document: ', error);
      }
    }
  };

  const handleAssessmentSubmit = async (assessmentData) => {
    // Handle Questionnaire data submission
    try {
      await addDoc(collection(db, "assessments"), assessmentData);
      alert('Your assessment has been saved!');
    } catch (error) {
      console.error('Error saving assessment: ', error);
    }
  };

  return (
    <div>
      <h1>Career Assessment Tool</h1>

      {/* Messaging Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          placeholder="Type your message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      <p>{feedback}</p>

      {/* List Messages */}
      <ul>
        {messages.map((msg) => (
          <li key={msg.id}>{msg.text}</li>
        ))}
      </ul>

      {/* Render the Questionnaire Component */}
      <Questionnaire onSubmit={handleAssessmentSubmit} />
    </div>
  );
}

export default App;



