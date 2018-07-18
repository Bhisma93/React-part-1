import React from 'react';
import Counter from './Counter';


function convertNumToCounter(obj) {
  return (
    <Counter key={obj.id} initialValue={obj.value} />
  );
}

// let counterValues = [42, 3, 18, 29, 56, 13];
// let counterElements = counterValues.map(convertNumToCounter);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counterValues: [{id: 666, value: 66}]
    };
  }


  _handleClick = () => {
    let newObj = {
      id: (new Date()).getTime(),
      value: 666
    };
    this.setState({
      counterValues: this.state.counterValues.concat(newObj)
    });
  }

  render() {
    return (
      <div className="container">
        <button onClick={this._handleClick}>+</button>
          <div className="counter-box">
            {this.state.counterValues.map(convertNumToCounter)}
          </div>
      </div>
    );
  }
}

// const App = () => {
//   return (
//     <div className="container">
//       <button onClick={handleClick}>+</button>
//       <div className="counter-box">
//         {counterElements}
//       </div>
//     </div>
//   );
// };

export default App;
