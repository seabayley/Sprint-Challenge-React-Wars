import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCardsWrapper from './components/CharacterCardsWrapper';
import { dummyData } from './dummydata';
import './App.css';

const App = () => {
  const [swapiData, setSwapiData] = useState(null);
  const [loading, setLoading] = useState(true);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  function useAxios() {

    useEffect(() => {
      axios.get(`https://swapi.co/api/people`)
        .then(function (response) {
          setSwapiData(swapiData => swapiData = response.data);
          setLoading(false);
        })
        .catch(function (error) {
          console.log(error);
        })
    }, [])
  }

  useAxios()

  if (loading) return <p>Loading...</p>

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharacterCardsWrapper data={swapiData.results} />
    </div>
  );
}

export default App;
