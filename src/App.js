import './App.css';

import React from 'react';
import Person from './Person';

const App = () => {
  return (
    <div>
      <h1> Person Information </h1>
      <Person name="Rahul"/>
      <Person name="Raj"/>
    </div>
  );
};

export default App;