import React, { Component } from 'react';
import Counter from './Counter';

const handleClick = () => {
  console.log('haaaaay');
};

function convertNumToCounter(value) {
  return (
    <Counter initialValue={value} />
  );
}

let counterValues = [42, 3, 18, 29, 56, 13];
let counterElements = counterValues.map(convertNumToCounter);

const App = () => {
  return (
    <div className="container">
      <button onClick={handleClick}>+</button>
      <div className="counter-box">
        {counterElements}
      </div>
    </div>
  );
};

export default App;
