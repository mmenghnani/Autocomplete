import React from 'react';
import './App.css';
import AutoComplete from './AutoComplete';
import countries from './countries';


function App() {
  return (
    <div className="App">
      <label>Country name </label>
      <AutoComplete countries={countries}/>
    </div>
  );
}

export default App;
