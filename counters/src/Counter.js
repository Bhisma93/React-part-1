import React from 'react';

// Rule #1 extend React.Component
class Counter extends React.Component {
    // Rule 4 accept props in constructor method
    constructor(props){
        super(props);

        // State is always an obj and is *MY* stuff
        this.state = { 
            currentValue: props.initialValue,

        };
        setInterval(this._increaseValue, 1000);
    }

    // Always write helper functions as arrow funcs
    _increaseValue = () => {
        // calculate the new current value
        let newCurrentValue = this.state.currentValue +1;
        // then, set new current value in state
        // but must call this.setState
        // I cannot alter this.state directly

        this.setState({
            currentValue: newCurrentValue
        });
    }

    // Rule 2 must have render method
    render() {
        // Rule 3 must return some JSX or a call to React. createElement
        return (
            <div className='counter'>
                {this.state.currentValue}
            </div>
        );
    }
}

// Counter is a react component
// const Counter = ({
//     finalValue, 
//     initialValue
// }) => {
//     // console.log(props);
//     return (
//         <div className="counter">
//             {initialValue}
//         </div>
//     );
// };

export default Counter;