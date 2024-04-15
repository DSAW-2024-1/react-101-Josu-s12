// En App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [quote, setQuote] = useState({});
  const [character, setCharacter] = useState({});
  const [image, setImage] = useState('');

  useEffect(() => {
    fetchQuote();
    fetchCharacter();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://thesimpsonsquoteapi.glitch.me/quotes');
      setQuote(response.data[0]);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  const fetchCharacter = async () => {
    try {
      const response = await axios.get('https://thesimpsonsquoteapi.glitch.me/characters');
      const randomCharacter = response.data[Math.floor(Math.random() * response.data.length)];
      setCharacter(randomCharacter);
      setImage(randomCharacter.image);
    } catch (error) {
      console.error('Error fetching character:', error);
    }
  };

  return (
    <div>
      <h1>The Simpsons Quotes</h1>
      <div>
        <h2>Quote:</h2>
        <p>{quote.quote}</p>
      </div>
      <div>
        <h2>Character:</h2>
        <p>Name: {character.character}</p>
        <img src={image} alt={character.character} />
      </div>
    </div>
  );
};

export default App;
