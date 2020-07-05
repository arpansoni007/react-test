import React from 'react';
import Person from './Person/Person';
import './App.css';

const test = (data) =>{
    return data+ ' World!';
};

function App() {
  return (
    <div className="App">
      <Person name={test('Hello')}/>
    </div>
  );
}

export default App;
