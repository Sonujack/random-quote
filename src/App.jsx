// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QuoteCard from './QuoteCard';
import './App.css'; // For styles

const App = () => {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  const fetchQuote = async () => {
    const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
    setQuote(response.data[0]);
  };

  const saveQuote = () => {
    setSavedQuotes((prev) => [...prev, quote]);
  };

  useEffect(() => {
    fetchQuote(); 
  }, []);

  return (
    <div className="App">
      <h1>Ron Swanson Quotes</h1>
      <QuoteCard quote={quote} onSave={saveQuote} />
      <h2>Saved Quotes</h2>
      <ul>
        {savedQuotes.map((savedQuote, index) => (
          <li key={index}>{savedQuote}</li>
        ))}
      </ul>
      <button onClick={fetchQuote} className="btn">Get New Quote</button>
    </div>
  );
};

export default App;
